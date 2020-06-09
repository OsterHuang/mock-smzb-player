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
  </div>
</template>

<script>
// import PlayPauseBarIcon from './components/PlayPauseBarIcon'

import IcoPlay from '../icons/IcoPlay'
import IcoPause from '../icons/IcoPause'
import IcoRefresh from '../icons/IcoRefresh'
import VolumeControlBar from './components/VolumeControlBar'
import ResolutionPicker from './components/ResolutionPicker'

export default {
  components: {
    // PlayPauseBarIcon,
    IcoPlay,
    IcoPause,
    IcoRefresh,
    VolumeControlBar,
    ResolutionPicker
  },
  data() {
    return {
      isPlaying: true
    }
  },
  methods: {
    onTogglePlayPause() {
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>

<style lang="stylus">
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

  > .padding-at-start
    width 12px

  > .control-bar-space
    flex 1
</style>