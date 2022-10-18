module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        '@vue/prettier'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        ecmaVersion: 2020,
        extraFileExtensions: ['.vue']
    },
    plugins: ['@typescript-eslint', 'prettier'],
    ignorePatterns: ['vue.config.js', 'node_modules/', 'public/', 'tests/', 'src/lib/', 'src/custom.d.ts'],
    rules: {
        quotes: ['warn', 'single'],
        'max-len': [
            'warn',
            {
                code: 150,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
                ignoreUrls: true,
                ignoreTrailingComments: true,
                ignoreComments: true
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? ['error', {allow: ['warn', 'error']}] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-useless-escape': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic'
            }
        ],
        '@typescript-eslint/member-ordering': [
            'warn',
            {
                default: [
                    // Index signature
                    'signature',

                    // Fields
                    'public-field', // = ['public-static-field', 'public-instance-field'])
                    'protected-field', // = ['protected-static-field', 'protected-instance-field'])
                    'private-field', // = ['private-static-field', 'private-instance-field'])

                    // Constructors
                    'constructor',

                    // Methods
                    'public-method', // = ['public-static-method', 'public-instance-method'])
                    'protected-method', // = ['protected-static-method', 'protected-instance-method'])
                    'private-method' // = ['private-static-method', 'private-instance-method'])
                ]
            }
        ],
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-use-before-define': ['error', {functions: false}],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'vue/no-parsing-error': [
            'error',
            {
                'invalid-first-character-of-tag-name': true
            }
        ]
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ]
};
