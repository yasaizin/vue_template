<script lang="ts">
	import Header from '$lib/component/Header.svelte';
	import Footer from '$lib/component/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
</style>
