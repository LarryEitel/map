// import adapter from "@sveltejs/adapter-vercel";
import adapter from "@sveltejs/adapter-auto";
import {vitePreprocess} from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    adapter: adapter(),
    files: {
        assets: 'static',
    },
    preprocess: [
        vitePreprocess({
            postcss: true
        })
    ]
};

export default config;
