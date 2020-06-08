<template>
  <div class="status-box" @click="handleToggle">
    <img v-show="status === 'play'" src="./ico-play.svg">
    <img v-show="status === 'pause'" src="./ico-pause.svg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'play' // play, pause, loading
    }
  },
  methods: {
    handleToggle() {
      this.status = this.status === 'play' ? 'pause' : 'play'
    }
  }
}
</script>

<style lang="stylus" scoped>
.status-box 
  width 60px
  height 60px
  > img
    width 48px
    height 48px
</style>