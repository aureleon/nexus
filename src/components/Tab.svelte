<script>
  export let href = '';
  export let label = '';
</script>

<a href={href}><slot>{label}</slot></a>

<style>
a {
  display: inline-block;
  min-width: 0;
  max-width: 100%;
  padding: 0.5rem 1rem;
  text-align: center;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s, transform 0.2s;
}

a:hover {
  color: var(--accent-color);
  transform: scale(1.1);
}

a:active {
  color: var(--accent-color-hover);
}
</style>
