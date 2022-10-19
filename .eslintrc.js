module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        '@vue/prettier'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        extraFileExtensions: ['.vue']
    },
    plugins: ['@typescript-eslint', 'prettier'],
    ignorePatterns: [
        'vue.config.js',
        'node_modules/',
        'public/',
        'tests/',
        'src/lib/',
        'src/custom.d.ts',
        '.eslintrc.js',
        'src/shims-tsx.d.ts',
        'src/shims-vue.d.ts',
        '.eslintrc.js',
        'babel.config.js'
    ],
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
        'vue/no-parsing-error': [
            'error',
            {
                'invalid-first-character-of-tag-name': true
            }
        ],
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
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-use-before-define': ['error', {functions: false}],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn'
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
