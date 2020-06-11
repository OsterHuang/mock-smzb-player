<template>
  <div class="video-wrapper">
    <video ref="video" :src="src" />
    <div class="video-wrapper_overlap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoWrapper',
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 360
    }
  },
  mounted() {
    console.log(this.$slots)
    this.$slots.default.forEach(x => {
      // console.log(x, x.context, x.context.videoInit, this.$refs.video)
      if (!x.componentInstance.videoInit) return
      x.componentInstance.videoInit(this.$refs.video)
    })
  }
}
</script>

<style lang="stylus" scoped>
.video-wrapper
  position relative
  width 90%
  video
    position relative
    top 0px
    left 0px
    right 0px
    bottom 0px
    width 100%
  .status-box
    position absolute
    top calc(50% - 30px - 20px)
    left calc(50% - 30px)
  .progress-bar
    position absolute
    bottom 44px
  .control-bar
    position absolute
    left 0px
    right 0px
    bottom 4px

  .video-wrapper_overlap
    height 100%
    width 100%
    display none

  &:hover
    .video-wrapper_overlap
      display block

</style>
