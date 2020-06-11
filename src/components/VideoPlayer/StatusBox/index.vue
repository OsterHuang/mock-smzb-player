<template>
  <div class="status-box" @click="handleToggle">
    <!-- <img v-show="status === 'play'" src="../icons/ico-circle-play.svg">
    <img v-show="status === 'pause'" src="../icons/ico-circle-pause.svg"> -->
    <IcoCirclePlay v-show="status === 'pause'" />
    <IcoCirclePause v-show="status === 'playing'" />
  </div>
</template>

<script>
import IcoCirclePlay from '../icons/IcoCirclePlay'
import IcoCirclePause from '../icons/IcoCirclePause'

export default {
  components: {
    IcoCirclePlay,
    IcoCirclePause
  },
  data() {
    return {
      status: 'pause' // playing, pause, loading
    }
  },
  methods: {
    videoInit(video) {
      this.video = video

      this.video.addEventListener('playing', this.onPlaying)
      this.video.addEventListener('pause', this.onPause)
    },
    handleToggle() {
      if (this.status === 'playing') {
        this.video.pause()
      } else {
        this.video.play()
      }
    },
    onPlaying() {
      this.status = 'playing'
    },
    onPause() {
      this.status = 'pause'
    }
  }
}
</script>

<style lang="stylus" scoped>
.status-box
  width 60px
  height 60px
  > img, svg
    width 100%
    height 100%
    fill white
</style>