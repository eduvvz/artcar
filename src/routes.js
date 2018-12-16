import Home from './components/pages/Home.vue'
import Veiculos from './components/pages/Veiculos.vue'
import Contato from './components/pages/Contato.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/veiculos', name: 'veiculos', component: Veiculos },
    { path: '/contato', name: 'contato', component: Contato }
]

export default routes