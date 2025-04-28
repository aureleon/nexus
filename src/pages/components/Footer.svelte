<script>
    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content">
    <p>
      <span class="footer-owner">&copy; {currentYear} Daniel Guzman. Let's connect:
        <a href="mailto:dhguzman@proton.me" class="footer-link" aria-label="Email">
          <img src="/socials/email-dark.svg" alt="Email" width="32" height="32" style="vertical-align: middle;" />
        </a>
        <span class="footer-socials">
          <a href="https://github.com/aureleon" class="footer-link" target="_blank" rel="noopener" aria-label="GitHub">
            <img src="/socials/github.svg" alt="GitHub" width="20" height="20" style="vertical-align: middle;" />
          </a>
          <a href="https://linkedin.com/in/dhguzman" class="footer-link" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img src="/socials/linkedin.svg" alt="LinkedIn" width="20" height="20" style="vertical-align: middle;" />
          </a>
        </span>
      </span>
    </p>
    <div class="built-with">
      <span>
        Built with
        <a href="https://bun.sh/" target="_blank" rel="noopener" class="footer-link" aria-label="Bun">
          <img src="/icons/bun.svg" alt="Bun" width="20" height="20" style="vertical-align: middle;" />
        </a>
        <span class="footer-plus">+</span>
        <a href="https://svelte.dev/" target="_blank" rel="noopener" class="footer-link" aria-label="Svelte">
          <img src="/icons/svelte.svg" alt="Svelte" width="20" height="20" style="vertical-align: middle;" />
        </a>
        <span class="footer-plus">+</span>
        <a href="https://astro.build/" target="_blank" rel="noopener" class="footer-link" aria-label="Astro">
          <img src="/icons/astro.svg" alt="Astro" width="20" height="20" style="vertical-align: middle;" />
        </a>
      </span>
    </div>
  </div>
</footer>

<style>
.footer {
  padding: 2rem 0 1.5rem 0;
  text-align: center;
  font-size: 1rem;
  border-top: 1px solid #333;
  margin-top: auto;
  background: none;
  color: #E0E0E0;
  box-shadow: none;
  font-family: 'Fira Mono', monospace;
}

.footer-content {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.footer-content p {
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
}

.footer-owner {
  font-size: 1rem;
  letter-spacing: 0.1em;
  margin-right: 0.2em;
  padding: 0 0.1em;
  font-weight: 400;
  display: flex;
  align-items: center;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  margin: 0 0.15em 0 0.15em;
  transition: color 0.2s;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.footer-link:hover {
  color: #00ADB5;
  text-decoration: underline;
}

.built-with {
  margin-top: 0.2rem;
  font-size: 1rem;
  opacity: 0.7;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 0.3em;
}

.footer-plus {
  color: #00ADB5;
  font-weight: 500;
  font-size: 1.1em;
  margin: 0 0.15em;
}

.footer-socials {
  margin-left: 0.5em;
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
}
</style>
