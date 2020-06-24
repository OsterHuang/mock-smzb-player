<template>
  <div id="app">
    <div class="linkages">
      <button @click="page='basic'">Basic Exmaple</button>
      <button @click="page='live-mobile'">Live Mobile Exmaple</button>
    </div>

    <hr>

    <div class="content">
      <BasicExample v-if="page === 'basic'" />
      <LiveMobileExample v-if="page === 'live-mobile'" />
    </div>
  </div>
</template>

<script>
import BasicExample from '@/views/BasicExample'
import LiveMobileExample from '@/views/LiveMobileExample'

export default {
  name: 'App',
  components: {
    BasicExample,
    LiveMobileExample
  },
  data() {
    return {
      page: 'basic'
    }
  },
  methods: {
    exam1() {

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

  display: flex;
  flex-direction: column;
}

.logo {
  width: 36px;
  height: 36px;
}

h3 {
  margin-top: 6px;
  margin-bottom:2px;
}

</style>
