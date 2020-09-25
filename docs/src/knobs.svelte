<script lang="js">
  import { useAutoId } from '@svelkit/hooks'
  import { baseline, row, col, form } from '@svelkit/spectre'

  const autoId = useAutoId('knobs')

  baseline()

  export let state /*: Record<string, unknown> */ = {}
  export let config /*: Record<string, { label: string, options?: unknown[], size?: number, type?: string }> */ = {}
</script>

<section>
  <div use:row>
    {#each Object.keys(config) as key}
    <div use:col={'auto'}>
      <div use:form.group>
        <label use:form.label for={autoId(key)}>{config[key].label || key}</label>

        {#if config[key].options}
          <select bind:value={state[key]} use:form.select id={autoId(key)}>
            {#each config[key].options as value}
              <option {value} selected={value === state[key]}>{value}</option>
            {/each}
          </select>
        {:else if config[key].type === 'number'}
          <input bind:value={state[key]} type="number" min={config[key].min ?? state.min} max={config[key].max ?? state.max} use:form.input id={autoId(key)}>
        {:else}
          <input bind:value={state[key]} size={config[key].size} use:form.input id={autoId(key)}>
        {/if}
      </div>
    </div>
    {/each}
  </div>
</section>

<style>
  section {border-top: 1px solid #c0c0d8; margin: 8px -8px; padding: 0 8px;}
</style>
