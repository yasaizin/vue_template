<template>
  <div id="navWrap" :class="{ 'open__menu': hoverFlag|openFlag }" v-if="viewable">
    <div id="nav" @mouseenter="menuOpenAction" @mouseleave="menuLeaveAction">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/skill">Skill</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div v-if="!openFlag">
        <span>メ</span>
        <span>ニ</span>
        <span>ュ</span>
        <span>ー</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'viewable'
  ],
	data: function(){
		return {
			hoverFlag: false,
			openFlag: false,
		}
	},
	methods: {
		menuOpenAction() {
			this.openFlag = true
		},
		menuLeaveAction() {
			this.openFlag = false
		},
		mouseOverAction() {
			this.hoverFlag = true
		},
		mouseLeaveAction() {
			this.hoverFlag = false
		},
	}
}

</script>
