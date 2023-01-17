<script lang="ts" context="module">
  export interface ReactWrapperProps {
    render: (props: any) => void;
    destroy: () => void;
  }
</script>

<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from 'svelte';

  export let dynamicImportPromise: Promise<() => () => ReactWrapperProps>;
  export let props: undefined | Record<string, string> = undefined;

  let container: HTMLElement;
  let reactWrapper: ReactWrapperProps;

  onMount(async () => {
    const reactWrapperFn = (await dynamicImportPromise)['default'];
    reactWrapper = reactWrapperFn(container);
    reactWrapper.render(props);
  });

  onDestroy(() => {
    console.log('component destoyed');
    reactWrapper.destroy();
  });

  afterUpdate(() => {
    console.log('component afterUpdate');
    reactWrapper.render(props);
  });
</script>

<div bind:this={container} />
