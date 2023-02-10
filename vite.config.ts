import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
//import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@/', replacement: __dirname + '/src/' },
			{ find: '@modules', replacement: __dirname + '/src/modules' },
			{ find: '@store', replacement: __dirname + '/src/store/index.ts' },
			{ find: '@router', replacement: __dirname + '/src/router/index.ts' },
			{ find: '@layouts', replacement: __dirname + '/src/layouts' },
			{ find: '@design', replacement: __dirname + '/src/design' },
			{ find: '@components', replacement: __dirname + '/src/components' },
			{ find: '@types', replacement: __dirname + '/src/types/index.ts' },
		],
	},
	plugins: [vue()],
	/*server: {
		https: {
			key: fs.readFileSync('certs/localhost.key'),
			cert: fs.readFileSync('certs/localhost.crt'),
		},
	},*/
});
