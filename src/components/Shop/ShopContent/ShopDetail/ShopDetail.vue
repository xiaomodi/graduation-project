<template>
    <transition name='show'>
        <v-touch class='shopDetail-Wrapper' @swiperight='swiperight'>
            <div class="ItemHeader">
                <span class='BackHome' @click='handleBackHome'>
                    返回
                </span>
                <span class='ItemTit'>活动详情</span>
            </div>
        </v-touch>
    </transition>
</template>

<script>
export default {
  name: 'ShopDetail',
  methods: {
    handleBackHome () {
      this.$emit('close')
    },
    swiperight () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
.show-enter, .show-leave-to
    transform: translate3d(100%, 0, 0)
.show-enter-active, .show-leave-active
    transition: all .4s linear
.shopDetail-Wrapper
    width: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #fff
    z-index: 4000
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
