<script lang="ts">
  import Icon from './Icon.svelte';
  import { theme, toggleTheme } from '../lib/ThemeStore.ts';
  import type { Theme } from '../lib/ThemeStore.ts';
  export let lightSrc: string = '';
  export let darkSrc: string = '';
  let currentTheme: Theme | undefined = undefined;
  theme.subscribe(value => currentTheme = value);
</script>

<button aria-label="Toggle theme" on:click={toggleTheme} style="background:none;border:none;cursor:pointer;padding:0;margin-left:auto;">
  {#if currentTheme === 'light'}
    <Icon src={lightSrc} alt="Lightbulb Icon" width={48} height={48} />
  {:else if currentTheme === 'dark'}
    <Icon src={darkSrc} alt="Lightbulb Icon" width={48} height={48} />
  {:else}
    <Icon src={lightSrc} alt="Lightbulb Icon" width={48} height={48} />
  {/if}
</button>
