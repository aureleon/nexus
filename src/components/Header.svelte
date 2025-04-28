<script>
  import Icon from './Icon.svelte';
  import Tab from './Tab.svelte';
  import { theme, toggleTheme } from '../lib/ThemeStore.ts';
  let currentTheme;
  theme.subscribe(value => currentTheme = value);
</script>

<header>
  <Icon class="logo" src="/extra/aureleon.png" alt="Logo" width={56} height={56} />
  <nav>
    <Tab href="#about" label="About" />
    <Tab href="#projects" label="Projects" />
    <Tab href="#contact" label="Contact" />
  </nav>
  <button aria-label="Toggle theme" on:click={toggleTheme} style="background:none;border:none;cursor:pointer;padding:0;margin-left:auto;">
    <Icon src={currentTheme === 'light' ? '/extra/lightbulb-on.svg' : '/extra/lightbulb-off.svg'} alt="Lightbulb Icon" width={28} height={28} />
  </button>
</header>

<style>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #333;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 2rem;
  width: 100%;
  margin-top: 0.5rem;
}
</style>
