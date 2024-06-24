/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { useAppStore } from '@/stores/dayProducts';

const app = createApp(App)

registerPlugins(app)

const appStore = useAppStore()
appStore.fillAllProductsFromBase()

app.mount('#app')
