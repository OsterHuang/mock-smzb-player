<template>
  <div class="resolution-picker">
    <span>高清</span>
    <div class="resolution-picker-modal">
      彈出來
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.resolution-picker
  position relative
  background-color #454545
  padding 4px 16px
  border-radius 10px
  margin-right 10px
  font-size 12px
  line-height 12px
  color #939393
  cursor pointer
  &:hover
    color #d9d9d9
    background-color #6c6c6c
    .resolution-picker-modal
      display block

  .resolution-picker-modal
    display none
    position absolute

</style>