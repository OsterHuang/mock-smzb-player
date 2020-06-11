<template>
  <div class="progress-bar">
    <input
      v-model="barValue"
      class="progress-bar-slider"
      type="range"
      min="0"
      max="2000"
      step="1"
      :style="slideBackground"
      @mousedown="handleTouchStart"
      @mouseup="handleTouchEnd"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      isTouchStart: false,
      barValue: 0
    }
  },
  computed: {
    slideBackground() {
      const showValue = this.barValue / 20
      return `background-image: -webkit-linear-gradient(left, #c30101 0%, #c30101 ${showValue}%, #fff ${showValue}%, #fff 100%);
        -moz-linear-gradient(left, #c30101 0%, #c30101 ${showValue}%, #fff ${showValue}%, #fff 100%);
        -ms-linear-gradient(left, #c30101 0%, #c30101 ${showValue}%, #fff ${showValue}%, #fff 100%);
      `
    }
  },
  watch: {
    barValue(newVal = 0) {
      if (!this.video) return
      if (!this.isTouchStart) return

      this.video.currentTime = newVal * this.video.duration / 2000
    }
  },
  mounted() {
    // Trigger watch barValue
    this.barValue = 40
  },
  methods: {
    videoInit(video) {
      this.video = video

      this.psInterval = setInterval(this.handleEveryTick, 50)
    },
    handleTouchStart() {
      this.isTouchStart = true
      if (!this.video) return
      this.video.pause()
    },
    handleTouchEnd() {
      this.isTouchStart = false
      if (!this.video) return
      this.video.play()
    },
    handleEveryTick() {
      if (this.isTouchStart) return
      this.barValue = Math.floor((this.video.currentTime / this.video.duration) * 2000)
    }
  }
}
</script>

<style lang="stylus" scoped>
no-default-appearance()
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
thumb-class()
  width: 15px;
  height: 15px;
  background: #f4f4f4;
  border: 1px solid #aaa;
  border-radius: 50%;
  // transition: all 0.1s;
  cursor: pointer;
  &:hover
    width: 15px;
    height: 15px;

.progress-bar
  position relative
  width 100%
  height 19px
  .progress-bar-slider
    no-default-appearance()
    outline: none;
    width: 100%;
    height: 3px;
    margin: 0px;
    // transition: all 0.1s;
    position: relative;
    top: 3px;
    &::-webkit-slider-thumb
      -webkit-appearance: none;
    &::-moz-range-thumb
      -moz-appearance: none;
    &::-ms-thumb
      -ms-appearance: none;

    &:hover
      height: 5px;
      &::-webkit-slider-thumb
        thumb-class()
      &::-moz-range-thumb
        thumb-class()
      &::-ms-thumb
        thumb-class()

</style>