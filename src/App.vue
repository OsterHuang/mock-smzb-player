<template>
  <div id="app">
    <section class="demo">
      <h3>播放或是暫停</h3>
      <StatusBox />
      <h3>進度條</h3>
      <ProgressBar />
      <h3>控制條</h3>
      <ControlBar />
    </section>
    <hr>

    <section class="demo">
      <VideoPlayer ref="videoPlayer" width="560" src="https://www.w3schools.com/html/mov_bbb.mp4">
        <StatusBox />
        <ControlBar />
        <ProgressBar />
      </VideoPlayer>

      <div class="external-control-panel">
        <button @click="handlePlay">播放</button>
        <button @click="handlePause">暫停</button>
        <button @click="handleVolumeMax">音量全開</button>
        <button @click="handleVolumeMin">靜音</button>
      </div>
    </section>
  </div>
</template>

<script>
import StatusBox from './components/VideoPlayer/StatusBox'
import ProgressBar from './components/VideoPlayer/ProgressBar'
import ControlBar from './components/VideoPlayer/ControlBar'

import VideoPlayer from './components/VideoPlayer'

export default {
  name: 'App',
  components: {
    StatusBox,
    ProgressBar,
    ControlBar,
    VideoPlayer
  },
  methods: {
    handlePlay() {
      console.log(this.$refs.videoPlayer)
      this.$refs.videoPlayer.referVideo().play()
    },
    handlePause() {
      this.$refs.videoPlayer.referVideo().pause()
    },
    handleVolumeMax() {
      this.$refs.videoPlayer.referVideo().volume = 1
    },
    handleVolumeMin() {
      this.$refs.videoPlayer.referVideo().volume = 0
    }
  }
}
</script>

<style>
body {
  background: #eee;
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;
}

.logo {
  width: 36px;
  height: 36px;
}

h3 {
  margin-top: 6px;
  margin-bottom:2px;
}
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
