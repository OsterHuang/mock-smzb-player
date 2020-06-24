<template>
  <VideoPlayer ref="videoPlayer" width="560">
    <StatusBox />
    <MobileControlBar />
    <!-- <ProgressBar />  直播暫時不用ProgressBar -->
  </VideoPlayer>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer'

import StatusBox from '@/components/VideoPlayer/StatusBox'
// import ProgressBar from '@/components/VideoPlayer/ProgressBar'
import MobileControlBar from '@/components/VideoPlayer/MobileControlBar'

import Hls from 'hls.js'

export default {
  components: {
    VideoPlayer,
    StatusBox,
    // ProgressBar,
    MobileControlBar
  },
  mounted() {
    // 判斷是不是ios，是的話可以只能用hls
    const refVideo = this.$refs.videoPlayer.referVideo()
    if (Hls.isSupported()) {
      var hls = new Hls()
      hls.loadSource('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8')
      hls.attachMedia(refVideo)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        refVideo.play()
      })
    }
  }
}
</script>

<style>

</style>