<template>
  <div id="app">
		<Header />
		<Breadcrumb :breadcrumbs="breadcrumbs" />
    <transition>
      <router-view />
    </transition>
		<Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import BreadcrumbList from '@/config/breadcrumbs'
export default {
	components: {
		Breadcrumb,
		Header,
		Footer,
	},
	computed: {
		breadcrumbs: function() {
			return {
				data: BreadcrumbList[this.$route.path]
			}
		}
	}
}

</script>

<style lang=scss>
html {
  background: $site-background-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: $header-height-pc;
  @include sp {
    margin-top: $header-height-sp;
  }
}
</style>
