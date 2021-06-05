import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Isaí',
		lastName: 'Arellano'
	}
});

export default app;