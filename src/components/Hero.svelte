<script>
  import { theme, toggleTheme } from '../lib/ThemeStore.ts';
  import Icon from './Icon.svelte';
  let currentTheme;
  theme.subscribe(value => currentTheme = value);
</script>

<section class="hero hero-bounded">
  <div class="hero-text">
    <h1>Hi, I'm Daniel 👋</h1>
    <h3>I'm a life-long learner and a software engineer.</h3>
    <h3>Here's a bit about me:</h3>
    <ul class="creative-list">
      <li><div>🛠️</div> An avid tinkerer across the full hardware/software stack</li>
      <li><div>🐧</div> Passionate about the Linux ecosystem and FOSS programs</li>
      <li><div>🔍</div> Driven by pure curiosity and a love for lifelong learning</li>
      <li><div>🌍</div> Originally from Ventura, CA, but enjoying the sun in Austin.</li>
    </ul>
  </div>
  <div class="hero-icon">
    <button aria-label="Toggle theme" on:click={toggleTheme} style="background:none;border:none;cursor:pointer;padding:0;">
      <Icon src={currentTheme === 'light' ? '/extra/lightbulb-on.svg' : '/extra/lightbulb-off.svg'} alt="Lightbulb Icon" width={200} height={200} />
    </button>
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    min-height: 50vh;
  }
  .hero-bounded {
    background: rgba(0,0,0,0.04); /* Slightly darker, low opacity */
    border-radius: 2rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    border: 1px solid rgba(0,0,0,0.07);
    max-width: 960px;
    margin: 3rem auto;
    overflow: hidden;
  }
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
  }
  .hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  /* Removed unused .hero-text p selector */
  .hero-text h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  .hero-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero-icon img {
    width: 200px;
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
    }
    .hero-icon img {
      margin-top: 2rem;
    }
  }
  /* Add creative-list styling */
  .creative-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .creative-list li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
