module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  // to overcome error message 'Not implemented: window.scrollTo'
  setupFiles: ['./test-setup.js'],
}
