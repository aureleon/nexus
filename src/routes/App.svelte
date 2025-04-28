<script>
  import Router from 'svelte-spa-router';
  import Home from '../routes/Home.svelte';
  import About from '../routes/About.svelte';
  import Projects from '../routes/Projects.svelte';
  import Contact from '../routes/Contact.svelte';

  const routes = {
    '/': Home,
    '/about': About,
    '/projects': Projects,
    '/contact': Contact
  };
</script>

<Router {routes} />
