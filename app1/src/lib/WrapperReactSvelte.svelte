<script lang="ts" context="module">
  export interface ReactWrapperProps {
    render: (props: any) => void;
    destroy: () => void;
  }
</script>

<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from 'svelte';

  export let dynamicImportPromise: Promise<() => () => ReactWrapperProps>;
  export let props: undefined | any = undefined;

  let container: HTMLElement;
  let reactWrapper: ReactWrapperProps;

  onMount(async () => {
    const reactWrapperFn = (await dynamicImportPromise)['default'];
    reactWrapper = reactWrapperFn(container);
    reactWrapper.render(props);
    console.log('component mounted');
  });

  onDestroy(() => {
    reactWrapper.destroy();
    console.log('component destoyed');
  });

  afterUpdate(() => {
    reactWrapper.render(props);
    console.log('component updated (afterUpdate)');
  });
</script>

<div bind:this={container} />
