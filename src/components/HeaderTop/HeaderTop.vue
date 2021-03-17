<template>
    <div class="header">
      <slot name="left"></slot>
      <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #02a774
    width 100%
    height 45px
    position fixed
    top 0
    left 0
    z-index 100
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      font-size 20px
      color #fff
      text-align center
      .header_title_text
        display block
</style>
