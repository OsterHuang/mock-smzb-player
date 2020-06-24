<template>
  <article class="live-mobile-example">
    <LiveMobilePlayer />
  </article>
</template>

<script>
import LiveMobilePlayer from '@/components/VideoPlayer/LiveMobilePlayer'

export default {
  components: {
    LiveMobilePlayer
  }
}
</script>

<style lang="stylus" scoped>
.live-mobile-example
  width 375px
</style>