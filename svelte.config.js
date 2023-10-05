import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node(),

        methodverride:{
            allowed:['PATCH','DELETE']
        }
	}
};

export default config;