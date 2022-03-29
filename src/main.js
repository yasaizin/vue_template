import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Buefy from 'buefy'
import Vue from 'vue'
import store from '@/store/index'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

// - Buefy
library.add(fas, fab)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
  customIconPacks: {
    fas: {
      sizes: {
        default: 'lg',
        'is-small': '1x',
        'is-medium': '2x',
        'is-large': '3x'
      },
      iconPrefix: ''
    }
  }
})

// - Mixin
const globalMixIn = {
  created() {
    // Header Data
    let { title, description } = this.$options
    if (title) {
      document.title = title + ' | Yu\'s Portfolio'
    } else {
			document.title = 'Yu\'s Portfolio'
    }
		if (description) {
			document.querySelector("meta[name='description']").setAttribute('content', description)
		}
  }
}

Vue.mixin(globalMixIn)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})

