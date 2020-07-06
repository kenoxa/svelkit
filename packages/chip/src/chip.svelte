<script lang="typescript">
  export let className: string = ''
  export { className as class }

  export let as: 'span' | 'div' = 'span'
</script>

{#if as === 'div'}
  <div class:chip={true} class={className} {...$$restProps}>
    <slot />
  </div>
{:else}
  <span class:chip={true} class={className} {...$$restProps}>
    <slot />
  </span>
{/if}

<style lang="scss">
  @import 'spectre.css/src/variables';
  @import 'spectre.css/src/mixins';
  @import 'spectre.css/src/chips';
</style>
