<script>
    import Icon from '../components/Icon.svelte';
    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content-row">
    <div class="footer-main-text">
      <div class="footer-copyright">&copy; {currentYear} Daniel Guzmán.</div>
      <div class="footer-connect">
        Let's connect:
        <span class="footer-socials">
          <Icon href="mailto:dhguzman@proton.me" srcLight='/socials/email-light.svg' srcDark="/socials/email-dark.svg" alt="Email" width={32} height={32} style="vertical-align: middle;" ariaLabel="@Email" />
          <Icon href="https://github.com/aureleon" srcLight='/socials/github-light.svg' srcDark="/socials/github-dark.svg" alt="GitHub" width={20} height={20} style="vertical-align: middle;" ariaLabel="@GitHub" target="_blank" rel="noopener" />
          <Icon href="https://linkedin.com/in/dhguzman" src="/socials/linkedin.svg" alt="LinkedIn" width={20} height={20} style="vertical-align: middle;" ariaLabel="@LinkedIn" target="_blank" rel="noopener" />
        </span>
      </div>
    </div>
    <div class="built-with">
      <span>
        Built with
        <Icon href="https://bun.sh/" src="/icons/bun.svg" alt="Bun" width={20} height={20} style="vertical-align: middle;" ariaLabel="<Bun/>" target="_blank" rel="noopener" class="footer-link" />
        <span class="footer-plus">+</span>
        <Icon href="https://svelte.dev/" src="/icons/svelte.svg" alt="Svelte" width={20} height={20} style="vertical-align: middle;" ariaLabel="<Svelte/>" target="_blank" rel="noopener" class="footer-link" />
        <span class="footer-plus">+</span>
        <Icon href="https://astro.build/" srcLight="/icons/astro-light.svg" srcDark='/icons/astro-dark.svg' alt="Astro" width={20} height={20} style="vertical-align: middle;" ariaLabel="<Astro/>" target="_blank" rel="noopener" class="footer-link" />
      </span>
    </div>
  </div>
</footer>

<style>
.footer {
  padding: 0.5rem 0 0.3rem 0;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid var(--border-color);
  margin-top: auto;
  background: var(--bg-color-secondary);
  box-shadow: none;
  width: 100vw;
  box-sizing: border-box;
  color: var(--text-color);
}

.footer-content-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  margin: 0;
  width: 100vw;
  gap: 0;
  position: relative;
}

.footer-main-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5em;
}

.built-with {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-size: 0.95rem;
  opacity: 0.7;
  letter-spacing: 0.01em;
  gap: 0.15em;
  white-space: nowrap;
  margin-left: auto;
  padding-right: 0.5em;
}

.footer-plus {
  color: #00ADB5;
  font-weight: 500;
  font-size: 1em;
  margin: 0 0.08em;
}

.footer-socials {
  margin-left: 0.2em;
  display: inline-flex;
  gap: 0.15em;
  align-items: center;
}

.footer-copyright {
  white-space: nowrap;
}

.footer-connect {
  display: flex;
  align-items: center;
  gap: 0.3em;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .footer-content-row {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100vw;
    max-width: 100vw;
    position: static;
  }
  .built-with {
    margin-left: 0;
    justify-content: center;
    width: 100%;
    text-align: center;
  }
  .footer-main-text {
    position: static;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer {
    width: 100vw;
    min-height: unset;
  }
  .built-with {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .footer-main-text {
    flex-direction: column;
    gap: 0.2em;
  }
}

</style>
