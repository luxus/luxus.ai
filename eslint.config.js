// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu(
	{
		stylistic: true,
		svelte: true,
		typescript: { tsconfigPath: 'tsconfig.lint.json' }
	},
	{
		name: 'my-additional-svelte-rules',
		files: ['**/*.svelte'],
		rules: {
			'svelte/first-attribute-linebreak': 'error',
			'svelte/max-attributes-per-line': 'error'
			// ...
			// more rules: https://sveltejs.github.io/eslint-plugin-svelte/rules/
		}
	}
);
