<script lang="ts">
  import { onMount } from 'svelte';
  import Counter from './lib/Counter.svelte';
  import WrapperReactSvelte from './lib/WrapperReactSvelte.svelte';

  let counter = 12;
</script>

<main>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <WrapperReactSvelte
    dynamicImportPromise={import('app4/Badge')}
    props={{ onClick: () => (counter += 1), counter }}
  />

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>
