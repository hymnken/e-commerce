module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['vue'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 使用 === 替代 == allow-null允许null和undefined== [2, "allow-null"]
    eqeqeq: 0,
    // 双峰驼命名格式
    camelcase: 0,
    // 要求或者禁止Yoda条件
    yoda: 2,
    // 行尾不使用分号
    semi: 0,
    // 强制一致地使用反引号、双引号或单引号。
    quotes: 2
  }
}
