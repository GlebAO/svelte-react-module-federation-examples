<script lang="ts">
  import Counter from './lib/Counter.svelte';
  import WrapperReactSvelte from './lib/WrapperReactSvelte.svelte';

  let counter = 12;
</script>

<main>
  <h1>Vite + Svelte</h1>

  <WrapperReactSvelte
    dynamicImportPromise={import('app4/Badge')}
    props={{ onClick: () => (counter += 1), counter }}
  />

  <div class="card">
    <Counter />
  </div>
</main>
