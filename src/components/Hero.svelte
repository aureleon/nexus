<script>
  import { theme, toggleTheme } from '../lib/ThemeStore.ts';
  import Icon from './Icon.svelte';
  let currentTheme;
  theme.subscribe(value => currentTheme = value);
</script>

<section class="hero hero-bounded">
  <div class="hero-text">
    <h1>Hi, I'm Daniel <span class="wave-emoji">👋</span></h1>
    <h3>I'm a life-long learner and a software engineer.</h3>
    <h3>Here's a bit about me:</h3>
    <ul class="creative-list">
      <li><div>🛠️</div> An avid tinkerer across the full hardware/software stack</li>
      <li><div>🐧</div> Passionate about the Linux ecosystem and FOSS programs</li>
      <li><div>🔍</div> Driven by pure curiosity and a love for lifelong learning</li>
      <li><div>🌍</div> Originally from Ventura, CA, but enjoying the sun in Austin.</li>
    </ul>
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
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
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
  .wave-emoji {
    display: inline-block;
    transition: transform 0.2s;
    cursor: pointer;
  }
  .wave-emoji:hover {
    animation: wiggle 0.5s;
  }
  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(-15deg); }
    40% { transform: rotate(10deg); }
    60% { transform: rotate(-10deg); }
    80% { transform: rotate(8deg); }
    100% { transform: rotate(0deg); }
  }
</style>
