<template>
  <div class="control-bar">
    <div class="padding-at-start" />
    <div class="pc-video-control-bar-icon" @click="onTogglePlayPause">
      <IcoPlay v-if="isPlaying" />
      <IcoPause v-else />
    </div>
    <div class="pc-video-control-bar-icon">
      <IcoRefresh />
    </div>
    <div class="control-bar-space" />
    <VolumeControlBar />
    <ResolutionPicker />
    <div class="pc-video-control-bar-icon" @click="onToggleScreen">
      <IcoMaxScreen v-if="isFullScreen" />
      <IcoMinScreen v-else />
    </div>
  </div>
</template>

<script>
// import PlayPauseBarIcon from './components/PlayPauseBarIcon'

import IcoPlay from '../icons/IcoPlay'
import IcoPause from '../icons/IcoPause'
import IcoRefresh from '../icons/IcoRefresh'
import VolumeControlBar from './components/VolumeControlBar'
import ResolutionPicker from './components/ResolutionPicker'
import IcoMaxScreen from '../icons/IcoMaxScreen'
import IcoMinScreen from '../icons/IcoMinScreen'

export default {
  components: {
    // PlayPauseBarIcon,
    IcoPlay,
    IcoPause,
    IcoRefresh,
    VolumeControlBar,
    ResolutionPicker,
    IcoMaxScreen,
    IcoMinScreen
  },
  data() {
    return {
      isPlaying: true,
      isFullScreen: false
    }
  },
  methods: {
    onTogglePlayPause() {
      this.isPlaying = !this.isPlaying
    },
    onToggleScreen() {
      this.isFullScreen = !this.isFullScreen
    }
  }
}
</script>

<style lang="stylus">
// 共用css 最好是拉個mixins
.pc-video-control-bar-icon
  display flex
  align-items center
  justify-content center
  width 24px
  height 24px

  margin-right 6px
  svg
    height 100%
    width 100%
    fill #999999
    &:hover
      fill #ffffff
</style>

<style lang="stylus" scoped>
.control-bar
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.8);

  display: inline-flex;
  justify-content: space-around;
  align-items: center;

  > .padding-at-start, .padding-at-end
    width 12px

  > .control-bar-space
    flex 1
</style>