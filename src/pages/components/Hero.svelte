<script>
    // Simple component, props if needed later
  </script>

  <section class="hero">
    <div class="hero-text">
      <h1>Driven by Curiosity</h1>
      <p>Lifelong Learner<br>Avid Tinkerer<br>FOSS Enthusiast</p>
      <a href="#projects" class="btn">View Projects</a>
    </div>
    <div class="hero-icon">
      <img src="/extra/lightbulb.svg" alt="Lightbulb Icon" />
    </div>
  </section>

  <style>
    .hero {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 4rem 2rem;
      min-height: 80vh;
      font-family: 'Fira Mono', monospace;
    }
    .hero-text h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-family: 'Fira Mono', monospace;
    }
    .hero-text p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 2rem;
      font-family: 'Fira Mono', monospace;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      border: 1px solid #E0E0E0;
      text-decoration: none;
      color: #E0E0E0;
      font-weight: bold;
      border-radius: 5px;
      transition: background-color 0.3s;
      font-family: 'Fira Mono', monospace;
    }
    .btn:hover {
      background-color: #00ADB5;
      border-color: #00ADB5;
      color: #121212;
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
  </style>
