
<template>
  <div class="play-pause-icon">
    <IcoPlay v-if="isPlaying" />
    <IcoPause v-else />
  </div>
</template>

<script>
import IcoPlay from '../../icons/IcoPlay'
import IcoPause from '../../icons/IcoPause'

export default {
  name: 'PlayPauseBarIcon',
  components: {
    IcoPlay,
    IcoPause
  },
  props: {
    isPlaying: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.play-pause-icon
  width 24px
  height 24px
  svg
    fill #999999
</style>