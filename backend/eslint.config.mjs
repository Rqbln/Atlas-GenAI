import tseslint from 'typescript-eslint';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

export default [
    { ignores: ['node_modules', 'prisma', 'docker', 'jest.config.js'] },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: {
            import: importPlugin,
            'unused-imports': unusedImportsPlugin,
        },
        rules: {

            // Import plugin rules
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    alphabetize: {
                        order: 'desc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always',
                },
            ],

            'import/no-namespace': ['error'],
            'import/no-unresolved': 'off',
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',

            // Unused imports plugin rules
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            // Styling preferences
            'operator-linebreak': 'off',
            'implicit-arrow-linebreak': 'off',
            'default-param-last': 'off',
            'no-console': ['warn', { allow: ['error'] }],
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            'prefer-const': [
                'error',
                {
                    destructuring: 'all',
                    ignoreReadBeforeAssign: false,
                },
            ],

            // Code formatting
            'object-curly-newline': [
                'error',
                {
                    ObjectExpression: { multiline: true },
                    ObjectPattern: { multiline: true },
                    ImportDeclaration: { multiline: true },
                    ExportDeclaration: { multiline: true },
                },
            ],

            'max-len': [
                'error',
                {
                    code: 120,
                    ignoreComments: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true,
                    ignoreUrls: true,
                },
            ],
        },
    },
    // TypeScript-specific rules
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': ['error'],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
];
