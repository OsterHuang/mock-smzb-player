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
      <VideoPlayer width="560" src="https://www.w3schools.com/html/mov_bbb.mp4">
        <StatusBox />
        <ControlBar />
        <ProgressBar />
      </VideoPlayer>
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
