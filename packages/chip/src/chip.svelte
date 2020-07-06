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

<style lang="scss">
  @import 'spectre.css/src/variables';
  @import 'spectre.css/src/mixins';

  // @import 'spectre.css/src/chips';
  .chip {
    align-items: center;
    background: $bg-color-dark;
    border-radius: 5rem;
    display: inline-flex;
    font-size: 90%;
    height: $unit-6;
    line-height: $unit-4;
    margin: $unit-h;
    max-width: $control-width-sm;
    overflow: hidden;
    padding: $unit-1 $unit-2;
    text-decoration: none;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;

    &.active {
      background: $primary-color;
      color: $light-color;
    }

    > :global(.avatar) {
      margin-left: -$unit-2;
      margin-right: $unit-1;
    }

    > :global(.btn-clear) {
      border-radius: 50%;
      transform: scale(0.75);
    }
  }
</style>
