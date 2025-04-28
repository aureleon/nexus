<script>
  import Icon from './Icon.svelte';
</script>

<header>
  <Icon class="logo" src="/extra/aureleon.png" alt="Logo" width={56} height={56} />
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
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

.logo {
  align-self: center;
  margin-right: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 2rem;
  width: 100%;
  margin-top: 0.5rem;
}
nav a {
  flex: 1 1 0;
  text-align: center;
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
}
nav a:hover {
  color: #00ADB5;
}
</style>
