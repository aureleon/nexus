<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let width: number | string = 24;
  export let height: number | string = 24;
  export let style: string = '';
  export let href: string | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let target: string | undefined = undefined;
  export let rel: string | undefined = undefined;
  export let srcDark: string | undefined = undefined;
  export let srcLight: string | undefined = undefined;

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Store for current theme
  const theme = writable('light');

  onMount(() => {
    const getTheme = () => (
      document.documentElement.getAttribute('data-theme') || 'light'
    );
    theme.set(getTheme());
    const observer = new MutationObserver(() => {
      theme.set(getTheme());
    });
    observer.observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme']
    });
    return () => observer.disconnect();
  });

  $: selectedSrc = src;
  $: if (srcDark && srcLight) {
    selectedSrc = $theme === 'dark' ? srcDark : srcLight;
  }
</script>

<style>
  .bounce-hover {
    transition: transform 0.2s cubic-bezier(.68,-0.55,.27,1.55);
  }
  .bounce-hover:hover {
    transform: translateY(-4px) scale(1.08);
  }
</style>

{#if href}
  <a
    class="icon-link"
    href={href}
    aria-label={ariaLabel}
    target={target}
    rel={rel}
  >
    <img class="bounce-hover" src={selectedSrc} {alt} {width} {height} style={style} loading="lazy" />
  </a>
{:else}
  <img class="bounce-hover" src={selectedSrc} {alt} {width} {height} style={style} loading="lazy" />
{/if}
