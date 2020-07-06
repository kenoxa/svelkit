<script lang="typescript">
  import Chip from '../chip.svelte'

  import favicon from './favicon.png'
</script>

<svelte:head>
  <title>Chip Preview</title>
  <link rel="icon" type="image/png" href={favicon} />
</svelte:head>

<p>
  <Chip>Crime</Chip>
  <Chip>Drama</Chip>
  <Chip>Biography</Chip>
  <Chip>Mystery</Chip>
</p>
