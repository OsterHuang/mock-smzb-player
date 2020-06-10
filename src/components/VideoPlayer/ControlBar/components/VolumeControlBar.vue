<template>
  <div class="volume-control-bar">
    <div class="volume-control-bar-icon pc-video-control-bar-icon" @click="onToggleVolume">
      <IcoVolumeMax v-if="isMax" />
      <IcoVolumeMed v-if="isMed" />
      <IcoVolumeLow v-if="isLow" />
      <IcoVolumeMin v-if="isMin" />
    </div>
    <input
      v-model="barValue"
      class="volume-control-bar-slider"
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
import IcoVolumeMax from '../../icons/IcoVolumeMax'
import IcoVolumeMed from '../../icons/IcoVolumeMed'
import IcoVolumeLow from '../../icons/IcoVolumeLow'
import IcoVolumeMin from '../../icons/IcoVolumeMin'

/**
 * 大網比較適用放這個元件，空間比較大
 */
export default {
  name: 'VolumeControlBar',
  components: {
    IcoVolumeMax,
    IcoVolumeMed,
    IcoVolumeLow,
    IcoVolumeMin
  },
  props: {
    volume: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      barValue: this.volume,
      previousBarValue: this.volume
    }
  },
  computed: {
    slideBackground() {
      return `background-image: -webkit-linear-gradient(left, #c30101 0%, #c30101 ${this.barValue}%, #fff ${this.barValue}%, #fff 100%);
        -moz-linear-gradient(left, #c30101 0%, #c30101 ${this.barValue}%, #fff ${this.barValue}%, #fff 100%);
        -ms-linear-gradient(left, #c30101 0%, #c30101 ${this.barValue}%, #fff ${this.barValue}%, #fff 100%);
      `
    },
    isMax() {
      return this.barValue >= 100
    },
    isMed() {
      return this.barValue < 100 && this.barValue >= 55
    },
    isLow() {
      return this.barValue < 55 && this.barValue >= 2
    },
    isMin() {
      return this.barValue < 2
    }
  },
  methods: {
    onTouchStart() {},
    onTouchEnd() {},
    onToggleVolume() {
      if (this.barValue >= 2) {
        this.previousBarValue = this.barValue
        this.barValue = 0
      } else {
        this.barValue = this.previousBarValue
      }
    }
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
  &:hover
    width: 15px;
    height: 15px;

.volume-control-bar
  display flex
  align-items center
  width 140px

  .volume-control-bar-icon
    width 24px
    svg
      width 24px

  .volume-control-bar-slider
    -webkit-appearance: none;
    outline: none;
    border-radius: 5px;
    width: 100px;
    height: 7px;
    outline: 0;
    margin-right: 10px;
    transition: .1s;
    top: 3px;
    &::-webkit-slider-thumb
      thumb-class()
    &::-moz-range-thumb
      thumb-class()
    &::-ms-thumb
      thumb-class()

</style>