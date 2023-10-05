<script>
	import { Router, Route } from "svelte-routing";
	import data from "./routes";
	import { navigate } from 'svelte-routing';
  
	import Layout from "./routes/Layout.svelte";
  
	export let url = "";
  
	import { addMessages, init } from "svelte-i18n";
  
	import en from "../public/lang/en.json";
  
	addMessages("en", en);
  
	init({
	  initialLocale: "en",
	});
  
	if (!localStorage.getItem("authUser")) {
	  navigate('/');
	}
  
  </script>
  
  <Router {url}>
	{#each data.publicRoutes as route}
	  <Route path={route.path}>
		<svelte:component this={route.component} />
	  </Route>
	{/each}
  
	{#each data.authProtectedRoutes as route}
	  <Route path={route.path} let:params>
		<Layout>
		  <svelte:component this={route.component} />
		</Layout>
	  </Route>
	{/each}
  </Router>
  <!-- <script>

	import { query } from './API.js';
	import { extractData} from './extractData.js';

	function sendQuery(prompt) {
		const data = { "question": prompt };
		query(data).then((response) => {
			result = extractData(response);
			console.log(typeof(result), result);
		
		
		});
	}

	export let name;

	let answer = '';
	let result = ['...waiting for resultssd','...waiting for results'];


	function handleSubmit() {
	    sendQuery(answer);
		alert(`answered question "${answer}"`);
	}
</script>




<main>
	<h1>test {name}!</h1>

	<form on:submit|preventDefault={handleSubmit}>
		<input bind:value={answer} />
		<button disabled={!answer}  type="submit"> Submit </button>
	</form>
	
	<h2>Name:  {result[0]}</h2>
	<p>Comapany statement:  {result[1]}</p>


	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	button {
		width:200px;
	}
</style> -->