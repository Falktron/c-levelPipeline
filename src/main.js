import App from './App.svelte';

const app = new App({
  target: document.body,
});

window.initMap = function ready() {
	app.$set({ ready: true });
}

export default app;
/*import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		name: 'promp'
	}
});

export default app;*/