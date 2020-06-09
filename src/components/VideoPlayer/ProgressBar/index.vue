<template>
  <div class="progress-bar">
    <input
      ref="videoProgress"
      v-model="barValue"
      class="progress-bar-slider"
      type="range"
      min="0"
      max="100"
      step="1"
      :style="slideBackground"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      barValue: 0,
    }
  },
  computed: {
    slideBackground() {
      return `background-image: -webkit-linear-gradient(left, #c30101 0%, #c30101 ${this.barValue}%, #fff ${this.barValue}%, #fff 100%);
        -moz-linear-gradient(left, #c30101 0%, #c30101 ${this.barValue}%, #fff ${this.barValue}%, #fff 100%);
        -ms-linear-gradient(left, #c30101 0%, #c30101 ${this.barValue}%, #fff ${this.barValue}%, #fff 100%);
      `
    }
  },
  mounted() {
    // Trigger watch barValue
    this.barValue = 40
  },
  methods: {
    onTouchStart() {},
    onTouchEnd() {}
  }
}
</script>

<style lang="stylus" scoped>
thumb-class()
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  background: #f4f4f4;
  border: 1px solid #aaa;
  border-radius: 50%;
  transition: 0.1s;
  cursor: pointer;

.progress-bar
  position relative
  width 100%
  height 19px
  .progress-bar-slider
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    height: 3px;
    margin: 0px;
    transition: 0.1s;
    position: relative;
    top: 3px;
    &::-webkit-slider-thumb
      thumb-class()
    &::-moz-range-thumb
      thumb-class()
    &::-ms-thumb
      thumb-class()

  .progress-bar-slider::-webkit-slider-thumb:hover
    /* -webkit-appearance: none; */
    width: 15px;
    height: 15px;
    /* background: #f4f4f4;
    border: 1px solid #aaa;
    border-radius: 50%;
    transition: 0.1s;
    cursor: pointer; */

  .progress-bar-slider:hover
    height: 5px;

</style>