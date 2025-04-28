<script lang="ts">
  import { theme } from '../lib/ThemeStore';
  import { location } from 'svelte-spa-router';
  import { derived } from 'svelte/store';

  export let as: string = 'div';
  export let className: string = '';
  export let style: string = '';
  export let onClose: (() => void) | undefined = undefined;
  export let onMinimize: (() => void) | undefined = undefined;
  export let onMaximize: (() => void) | undefined = undefined;

  let resizeDir: string | null = null;
  let windowEl: HTMLElement;
  let resizing = false;
  let startX: number;
  let startY: number;
  let startW: number;
  let startH: number;
  let startTop: number;
  let startLeft: number;

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  let isDragModeActive = false;

  let currentTheme: string;
  theme.subscribe(value => currentTheme = value);

  let isMaximized = false;
  let prevRect: { top: number; left: number; width: number; height: number } | null = null;

  // Map routes to titles
  const routeTitles = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/contact': 'Contact'
  };

  // Derive the current title from the route (type-safe)
  const pageTitle = derived(location, $location => {
    return routeTitles[$location as keyof typeof routeTitles] || '';
  });

  function startResize(e: MouseEvent, dir: string = 'se') {
    e.preventDefault();
    resizing = true;
    resizeDir = dir;
    startX = e.clientX;
    startY = e.clientY;
    startW = windowEl.offsetWidth;
    startH = windowEl.offsetHeight;
    startTop = windowEl.offsetTop;
    startLeft = windowEl.offsetLeft;
    window.addEventListener('mousemove', doResize);
    window.addEventListener('mouseup', stopResize);
  }

  function doResize(e: MouseEvent) {
    if (!resizing) return;
    let newW = startW, newH = startH, newTop = startTop, newLeft = startLeft;
    const minW = 200;
    const minH = 100;
    const maxW = window.innerWidth - startLeft;
    const maxH = window.innerHeight - startTop;
    if (resizeDir === 'e' || resizeDir === 'se') {
      newW = Math.max(minW, Math.min(startW + (e.clientX - startX), maxW));
    }
    if (resizeDir === 's' || resizeDir === 'se') {
      newH = Math.max(minH, Math.min(startH + (e.clientY - startY), maxH));
    }
    if (resizeDir === 'n') {
      newH = Math.max(minH, Math.min(startH - (e.clientY - startY), startTop + startH));
      newTop = startTop + (e.clientY - startY);
      newTop = Math.max(0, Math.min(newTop, window.innerHeight - newH));
      windowEl.style.top = newTop + 'px';
    }
    if (resizeDir === 'w') {
      newW = Math.max(minW, Math.min(startW - (e.clientX - startX), startLeft + startW));
      newLeft = startLeft + (e.clientX - startX);
      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - newW));
      windowEl.style.left = newLeft + 'px';
    }
    windowEl.style.width = newW + 'px';
    windowEl.style.height = newH + 'px';
  }

  function stopResize() {
    resizing = false;
    window.removeEventListener('mousemove', doResize);
    window.removeEventListener('mouseup', stopResize);
  }

  function startDrag(e: MouseEvent) {
    if (resizing) return;
    isDragging = true;
    offsetX = e.clientX - windowEl.offsetLeft;
    offsetY = e.clientY - windowEl.offsetTop;
    window.addEventListener('mousemove', doDrag);
    window.addEventListener('mouseup', stopDrag);
  }

  function doDrag(e: MouseEvent) {
    if (!isDragging) return;
    windowEl.style.left = (e.clientX - offsetX) + 'px';
    windowEl.style.top = (e.clientY - offsetY) + 'px';
  }

  function stopDrag() {
    isDragging = false;
    window.removeEventListener('mousemove', doDrag);
    window.removeEventListener('mouseup', stopDrag);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.altKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      isDragModeActive = !isDragModeActive;

      if (isDragModeActive) {
        const rect = windowEl.getBoundingClientRect();
        const centerX = rect.left + (rect.width / 2);
        const centerY = rect.top + (rect.height / 2);

        startDrag(new MouseEvent('mousedown', {
          clientX: centerX,
          clientY: centerY
        }));
      } else {
        stopDrag();
      }
    }
  }

  function handleKeyup(e: KeyboardEvent) {
    if (isDragModeActive && (e.key === 'Enter' || e.key === ' ')) {
      isDragModeActive = false;
      stopDrag();
    }
  }

  function handleClick() {
    if (isDragModeActive) {
      isDragModeActive = false;
      stopDrag();
    }
  }

  function handleMaximize() {
    if (!isMaximized) {
      // Save current position and size
      prevRect = {
        top: windowEl.offsetTop,
        left: windowEl.offsetLeft,
        width: windowEl.offsetWidth,
        height: windowEl.offsetHeight
      };
      isMaximized = true;
    } else {
      // Restore previous position and size
      if (prevRect) {
        windowEl.style.top = prevRect.top + 'px';
        windowEl.style.left = prevRect.left + 'px';
        windowEl.style.width = prevRect.width + 'px';
        windowEl.style.height = prevRect.height + 'px';
      }
      isMaximized = false;
    }
    if (onMaximize) onMaximize();
  }

  const buttons = [
    { class: 'close', aria: 'Close', handler: onClose, symbol: '✕', isImg: false },
    { class: 'minimize', aria: 'Minimize', handler: onMinimize, symbol: '-', isImg: false },
    { class: 'maximize', aria: 'Maximize', handler: handleMaximize, symbol: '/term/maximize.png', isImg: true }
  ];
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} on:click={handleClick} />

<svelte:element this={as} class={`terminal-window${isMaximized ? ' maximized' : ''} ${className}`} style={style} bind:this={windowEl} data-theme={currentTheme}>
  <div class="terminal-header" role="button" tabindex="0" on:mousedown={startDrag}>
    <div class="terminal-controls">
      {#each buttons as btn}
        <button class={`term-btn ${btn.class}`} aria-label={btn.aria} on:click={btn.handler}>
          {#if btn.isImg}
            <img class="term-btn-symbol" src={btn.symbol} alt={btn.aria} width="8" height="8" />
          {:else}
            <span class="term-btn-symbol">{btn.symbol}</span>
          {/if}
        </button>
      {/each}
    </div>
    <div class="terminal-title"><span>{$pageTitle}</span></div>
    <hr class="terminal-divider" />
  </div>
  <div class="terminal-content">
    <slot />
  </div>
</svelte:element>

<style>
  .terminal-window {
    background-color: var(--terminal-bg);
    color: var(--terminal-text);
    border-radius: 10px;
    font-family: "Fira Mono", monospace;
    width: max-content;
    box-shadow: 0 2px 16px var(--terminal-shadow);
    border: 1.5px solid var(--border-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    resize: both;
    min-width: min-content;
    min-height: min-content;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    min-width: 200px;
    min-height: 100px;
  }

  .terminal-window.maximized {
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100% !important;
    max-height: 100% !important;
    transform: none !important;
    border-radius: 0 !important;
    z-index: 9999;
  }

  .terminal-window[data-theme='light'] {
    --terminal-bg: #f0f0f0;
    --terminal-text: #2d2d2d;
    --terminal-header-bg: #e0e0e0;
    --terminal-divider: #d0d0d0;
    --terminal-shadow: rgba(0,0,0,0.15);
    --terminal-border: #ccc;
  }

  .terminal-window[data-theme='dark'] {
    --terminal-bg: #282c34;
    --terminal-text: #fff;
    --terminal-header-bg: #23262e;
    --terminal-divider: #353942;
    --terminal-shadow: rgba(0,0,0,0.25);
    --terminal-border: #222;
  }

  .terminal-header {
    width: 100%;
    min-height: 40px;
    height: 44px;
    background: var(--bg-color-secondary);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
  }

  .terminal-controls {
    position: absolute;
    top: 12px;
    left: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    z-index: 2;
    margin: 0;
    height: 20px;
    overflow: visible;
  }
  .terminal-divider {
    width: 100%;
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: -1px;
    left: 0;
    overflow: visible;
  }
  .terminal-content {
    padding: 20px;
    flex: 1 1 auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
  }
  .term-btn.close { background: var(--error-color); }
  .term-btn.minimize { background: var(--warning-color); }
  .term-btn.maximize { background: var(--success-color); }
  .term-btn:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.15);
  }
  .term-btn:active {
    width: 18px !important;
    height: 18px !important;
  }
  .term-btn {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none;
    padding: 0;
    margin: 0;
    opacity: 0.85;
    cursor: pointer;
    transition: width 0.12s, height 0.12s, box-shadow 0.15s;
    position: relative;
    background-clip: padding-box;
    box-shadow: 0 1px 4px var(--shadow-color);
  }
  .term-btn-symbol {
    color: var(--text-color-bright);
    opacity: 0;
    font-size: 13px;
    font-family: inherit;
    font-weight: bold;
    pointer-events: none;
    user-select: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.15s;
  }
  .term-btn:active .term-btn-symbol {
    opacity: 1;
  }

  .terminal-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    pointer-events: none;
    z-index: 1;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    letter-spacing: 0.04em;
  }
</style>