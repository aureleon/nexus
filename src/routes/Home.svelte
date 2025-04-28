<script>
import Term from '../islands/Term.svelte';
</script>

<section>
  <Term as="div" className="home-text">
    <div class="terminal-content">
      <h1>Hey, I'm Daniel <span class="wave-emoji">👋</span></h1>
      <h3>I'm a life-long learner and a software engineer.</h3>
      <h3>Here's a bit about me:</h3>
      <ul class="creative-list">
        <li><div>🛠️</div> An avid tinkerer across the full hardware/software stack</li>
        <li><div>🐧</div> Passionate about the Linux ecosystem and FOSS programs</li>
        <li><div>🔍</div> Driven by pure curiosity and a love for lifelong learning</li>
        <li><div>🌍</div> Originally from Ventura, CA, but enjoying the sun in Austin.</li>
      </ul>
    </div>
  </Term>
</section>

<style>
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
