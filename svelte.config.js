import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config()

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		floc: process.env.NODE_ENV === "development",
		adapter: adapter({
			out: './build',
			precompress: true
		}),

		// Override http methods in the Todo forms
		methodOverride: {
			parameter: '_method',
			allowed: ['POST', 'PATCH', 'DELETE']
		},
		vite: {
			resolve: {
				alias: {
					'$stores': path.resolve('./src/stores'),
					'$api': path.resolve('./src/api'),
					'$config': path.resolve('./src/config'),
				}
			},
			build: {
				minify: true
			}
		},
	}
};

export default config;
