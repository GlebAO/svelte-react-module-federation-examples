<script>
	export let name = 'world';
    function handleClick() {
		alert('clicked')
	}
</script>

<h1>Hello {name}!</h1>
<button on:click={handleClick}>
	Click me
</button>