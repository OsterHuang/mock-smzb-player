<template>
  <div class="resolution-picker">
    <span>高清</span>
    <div class="resolution-picker-modal">
      <div class="resolution-picker-modal-content">
        <div class="title">畫質</div>
        <div class="option">
          <button>高清</button>
          <button>順暢</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResolutionPicker'
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
    z-index 80
    bottom 20px
    right 8px
    padding-bottom 16px

    .resolution-picker-modal-content
      display flex
      min-width 100px
      background-color rgba(0, 0, 0, 0.8)
      border-color #ffffff
      border-radius 10px
      padding 10px
      .title
        margin-top 4px
        flex 1
        color #939393
        font-size 16px
      .option
        flex 1
        button
          margin-bottom 6px
          text-align center
          cursor pointer
          border none
          background 0 0
          color #939393
          &:hover, &:active
            color white
</style>