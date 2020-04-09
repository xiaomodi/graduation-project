<template>
    <transition name='move'>
        <v-touch class='HomeDateDetail-Wrapper' v-on:swiperight="swiperight">
            <div class="ItemHeader">
                <span class='BackHome' @click='handleBackHome'>
                    返回
                </span>
                <span class='ItemTit'>添加日程</span>
            </div>
            <div class="input-wrapper">
                <textarea name="text" wrap='hard' cols='100%' class='input-content' placeholder="输入内容" v-model='text'></textarea>
            </div>
             <div class="line"></div>
             <div class="btn">完成</div>
             <div>{{this.text}}</div>
        </v-touch>
    </transition>
</template>

<script>
export default {
  name: 'HomeDateDetail',
  data () {
    return {
      text: ''
    }
  },
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
@import '../../../../assets/stylus/bgColor.styl'

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
    .input-wrapper
        width: 100%
        // height: 10%
        .input-content
            display: block
            width: 98%
            height: 11rem
            font-size: 1.1rem
            padding-left: 0.4rem
            box-sizing: border-box
    .line
        width: 100%
        height: .6rem
        background: #f7f8fa
        border: 0.01rem solid #ebebeb
    .btn
        width: 100%
        line-height: 2rem
        text-align: center
        background: red
        color: #fff
</style>
