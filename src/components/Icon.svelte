<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let width: number | string = 24;
  export let height: number | string = 24;
  export let style: string = '';
  export let href: string | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let target: string | undefined = undefined;
  export let rel: string | undefined = undefined;
</script>

<style>
  .bounce-hover {
    transition: transform 0.2s cubic-bezier(.68,-0.55,.27,1.55);
  }
  .bounce-hover:hover {
    transform: translateY(-4px) scale(1.08);
  }
</style>

{#if href}
  <a
    class="icon-link"
    href={href}
    aria-label={ariaLabel}
    target={target}
    rel={rel}
  >
    <img class="bounce-hover" {src} {alt} {width} {height} style={style} loading="lazy" />
  </a>
{:else}
  <img class="bounce-hover" {src} {alt} {width} {height} style={style} loading="lazy" />
{/if}
