<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let width: number | string = 24;
  export let height: number | string = 24;
  export let style: string = '';
</script>

<img {src} {alt} {width} {height} style={style} loading="lazy" />
