import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/globalStore'
import components from '@/components/componentList.js'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount('#app')
