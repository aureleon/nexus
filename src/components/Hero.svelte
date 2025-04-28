<script>
  import { theme, toggleTheme } from '../lib/ThemeStore.ts';
  let currentTheme;
  theme.subscribe(value => currentTheme = value);
</script>

<section class="hero">
  <div class="hero-text">
    <h1>Hi, I'm Daniel 👋</h1>
    <h3>I'm a life-long learner, and a software engineer.</h3>
    <h3>Here's a bit about me:</h3>
    <ul class="creative-list">
      <li>🛠️ Always tinkering with new tech and ideas</li>
      <li>🐧 Passionate about open source and the Linux ecosystem</li>
      <li>🔍 Driven by curiosity and a love for lifelong learning</li>
    </ul>
  </div>
  <div class="hero-icon">
    <button aria-label="Toggle theme" on:click={toggleTheme} style="background:none;border:none;cursor:pointer;padding:0;">
      <img src={currentTheme === 'light' ? '/extra/lightbulb-on.svg' : '/extra/lightbulb-off.svg'} alt="Lightbulb Icon" />
    </button>
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 2rem;
    min-height: 70vh; /* Reduced from 80vh */
    font-family: 'Fira Mono', monospace;
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
    font-family: 'Fira Mono', monospace;
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
  }
  .creative-list li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
