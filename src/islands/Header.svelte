<script>
  import Icon from '../components/Icon.svelte';
  import Tab from '../components/Tab.svelte';
  import Theme from '../components/Theme.svelte';
  import { theme, toggleTheme } from '../lib/ThemeStore.ts';
  let currentTheme;
  theme.subscribe(value => currentTheme = value);
</script>

<header>
  <Icon href="/#/" src="/extra/aureleon.png" alt="Logo" width={56} height={56} style="vertical-align: middle;" ariaLabel="Homepage" />
  <nav class="tab-nav">
    <Tab href="/#/about" label="About" />
    <Tab href="/#/projects" label="Projects" />
    <Tab href="/#/contact" label="Contact" />
  </nav>
  <Theme lightSrc='/extra/lightbulb-on.svg' darkSrc='/extra/lightbulb-off.svg' />
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

.tab-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  gap: 0;
}
.tab-nav :global(.tab) {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
}
nav {
  /* Remove previous nav styles that set width/gap */
  width: unset;
  gap: unset;
  margin-top: 0.5rem;
}
</style>
