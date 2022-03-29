<template>
  <div id="app">
		<Header :viewable="headerMode" />
		<Breadcrumb :breadcrumbs="breadcrumbs" />
    <transition>
      <router-view ref="viewer" />
    </transition>
		<Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import BreadcrumbList from '@/config/breadcrumbs'
import HeaderMode from '@/config/header'
import Modules from '@/module'
export default {
	components: {
		Breadcrumb,
		Header,
		Footer,
	},
  computed: {
		breadcrumbs: function() {
			return { data: BreadcrumbList[this.$route.path] }
		},
    headerMode: function() {
      Modules._sleep(3000)
      return !HeaderMode[this.$route.name]
    },
	},
}

</script>

