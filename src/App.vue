<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <StatusBox />
    <ProgressBar />
    <ControlBar />
  </div>
</template>

<script>
import StatusBox from './components/VideoPlayer/StatusBox'
import ProgressBar from './components/VideoPlayer/ProgressBar'
import ControlBar from './components/VideoPlayer/ControlBar'

export default {
  name: 'App',
  components: {
    StatusBox,
    ProgressBar,
    ControlBar
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
</style>
