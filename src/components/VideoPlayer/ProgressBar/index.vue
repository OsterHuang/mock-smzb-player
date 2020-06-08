<template>
  <div class="progress-bar">
    <input
      ref="videoProgress"
      v-model="videoProgressRange"
      class="live-control-bar-video-progress-range-bar"
      type="range"
      min="0"
      max="100"
      step="1"
      @touchstart="onMouseDownProgress"
      @touchend="onMouseUpProgress"
    >
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.progress-bar
  position relative
  height 6px

  background-color white
  border 1px #ccc solid
  width 100%

  .progress-bar-value
    position absolute
    height 100%
    width 30%
    top 0px
    left 0px
    background-color #c30101
  .progress-bar-circle
    position absolute
    top -5px
    width: 15px;
    height: 15px;
    background: #f4f4f4;
    border: 1px solid #aaa;
    border-radius: 50%;
    transition: 0.1s;
    cursor: pointer;

</style>