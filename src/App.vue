<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <StatusBox />
    <ProgressBar />
  </div>
</template>

<script>
import StatusBox from './components/VideoPlayer/StatusBox'
import ProgressBar from './components/VideoPlayer/ProgressBar'

export default {
  name: 'App',
  components: {
    StatusBox,
    ProgressBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 24px;
  height: 24px;
}
</style>
