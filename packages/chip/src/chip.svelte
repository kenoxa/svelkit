<script lang="typescript">
  export let className: string = ''
  export { className as class }

  export let as: 'span' | 'div' = 'span'

  export let active: boolean = false
</script>

{#if as === 'div'}
  <div class:chip={true} class:active class={className} {...$$restProps}>
    <slot />
  </div>
{:else}
  <span class:chip={true} class:active class={className} {...$$restProps}>
    <slot />
  </span>
{/if}

<style src="./chip.scss">

</style>
