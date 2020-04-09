<template>
    <transition name='move'>
        <v-touch class='HomeDateDetail-Wrapper' v-on:swiperight="swiperight">
            <div class="ItemHeader">
                <span class='BackHome' @click='handleBackHome'>
                    返回
                </span>
                <span class='ItemTit'>活动详情</span>
            </div>
            <div class="line"></div>
        </v-touch>
    </transition>
</template>

<script>
export default {
  name: 'HomeDateDetail',
  methods: {
    swiperight () {
      this.$emit('close')
    },
    handleBackHome () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.move-enter
    transform: translate3d(100%, 0, 0)
.move-enter-active
    transition: all .2s linear
.move-leave-to
    transform: translate3d(100%, 0, 0)
.move-leave-active
    transition: all .2s linear
.HomeDateDetail-Wrapper
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #ffffff
    z-index: 1000
    // &.move-transition
    //     transition: all 1s linear
    //     transform: translate3d(0,0,0)
    // &.move-enter, &.move-leave
    //     transform: translate3d(100%, 0, 0)
    .ItemHeader
        width: 100%
        height: 3rem
        background: #fff
        box-shadow: 1px 1px 4px 3px #efedee
        margin-bottom: .3rem
        .BackHome
            position: absolute
            top: 1rem
            left: 1rem
        .ItemTit
            display: block
            line-height: 3rem
            text-align: center
            font-weight: bold
</style>
