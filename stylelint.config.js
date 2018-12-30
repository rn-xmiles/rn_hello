module.exports = {
    // processors: ['stylelint-processor-html'],
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-scss'],
    rules: {
        indentation: 4,
        'max-nesting-depth': 2, // 允许嵌套的深度为2
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['extends', 'include'],
            },
        ],
    },
}
