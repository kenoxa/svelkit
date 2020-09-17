<script>
  import { onDestroy } from 'svelte'

  /**
   * The slot is shown when `show` becomes truthy. Default: `true`
   *
   * Additionally this is used as a key for the delay. A different `show` value resets the timeout.
   */
  export let show: unknown = true

  /**
   * minimum delay in msecs for showing the loading slot. Default: `200`
   */
  export let ms: number = 200

  let visible: boolean
  let timeoutRef: ReturnType<typeof setTimeout>

  onDestroy(() => clearTimeout(timeoutRef))

  // Not written as a reactive block to prevent svelte from detection changes to timeoutRef and ms
  // which would lead to another update, and again and again ...
  const updateDelay = (show: unknown): void => {
    clearTimeout(timeoutRef)
    visible = false
    if (show) {
      timeoutRef = setTimeout(() => {
        visible = true
      }, ms)
    }
  }

  $: updateDelay(show)
</script>

{#if visible}
  <slot />
{/if}
