import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    boot: [],
    css: ['app.scss'],
    extras: ['material-icons'],
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },
      vueRouterMode: 'hash'
    },
    devServer: {
      open: true
    },
    framework: {
      config: {
        dark: true
      },
      plugins: ['Notify']
    },
    animations: []
  }
})
