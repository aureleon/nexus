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
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.1s, transform 0.2s;
}
a:hover {
  color: #00ADB5;
  transform: scale(1.2);
}
</style>
