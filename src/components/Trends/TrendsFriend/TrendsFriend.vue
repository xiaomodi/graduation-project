<template>
    <transition name='show'>
        <v-touch class="TrendsFriends-Wrapper" @swiperight='swiperight'>
            <div class="TrendsFriend-Head">
                <div class="backHome" @click='handleClickBackTrends'><span class="iconfont">&#xe60a;</span></div>
                <div class="My-Head">
                    <span class='My-Name'>name</span>
                    <img src="https://cdn2.jianshu.io/assets/default_avatar/6-fd30f34c8641f6f32f5494df5d6b8f3c.jpg" alt="" class="My-Head-img">
                </div>
            </div>
            <div class="header" v-show='true' @click='handleClickBackTrends' :style="{opacity: isopacity}">
                <span class="iconfont">&#xe60a;</span>
                <span class='header-title'>朋友圈</span>
            </div>
            <div class="TrnedsFriends-Content">
                <ul>
                    <li class='Content-Item' v-for='(item, index) in 30' :key='index'>
                        <div class="Item-Left">
                            <img class='Item-Left-pic' src="http://p9.pstatp.com/large/pgc-image/03f6307ae99745119fa95747f9d9e525" alt="">
                        </div>
                        <div class="Item-Right">
                            <div class="Item-Name">name</div>
                            <div class="Item-Info">今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好</div>
                            <div class="Item-img">
                                <img class="Item-img-pic" src="https://img2.sumeihome.cn/sumeiV2/images/manualmodule/19/11/06/150848/cK5lRSljVLepdaS43UE4.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </v-touch>
    </transition>
</template>

<script>
export default {
  name: 'TrendsFriends',
  data () {
    return {
      isopacity: 0
    }
  },
  methods: {
    swiperight () {
      this.$emit('close')
    },
    handleClickBackTrends () {
      this.$emit('close')
    },
    handleScroll () {
      const totop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      const opacity = totop / 195
      this.isopacity = opacity
      if (this.isopacity > 0.9) {
        this.isopacity = 0.9
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.show-enter, .show-leave-to
    transform: translate3d(100%, 0, 0)
.show-enter-active, .show-leave-active
    transition: all .5s linear
.TrendsFriends-Wrapper
    width: 100%
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 50000
    background: #fff
    .TrendsFriend-Head
        width: 100%
        height: 25%
        background: url('../img/head2.jpg') no-repeat
        background-size: 100%
        background-position: center
        position: relative
        .backHome
            position: absolute
            top: 1.2rem
            left: 1.2rem
            .iconfont
                font-size: 1.1rem
                color: #fff
        .My-Head
            position: absolute
            right: 1rem
            bottom: -1.2rem
            overflow: hidden
            .My-Name
                color: #fff
                font-size: 1.1rem
                font-weight: bold
                margin-top: .4rem
                margin-right: .5rem
                float: left
                display: block
            .My-Head-img
                width: 3.5rem
                height: 3.5rem
                border-radius: .4rem
                float: left
                display: block
    .header
        position: fixed
        top: 0
        left: 0
        right: 0
        width: 100%
        height: 3rem
        line-height: 3rem
        font-size: 1.1rem
        background: #fff
        text-align: center
        font-size: 0
        .iconfont
            position: absolute
            left: 1.2rem
            color: #000
        .header-title
            font-size: .99rem
            font-weight: bold
            text-align: center
            letter-spacing: .1rem
    .TrnedsFriends-Content
        padding-top: 4rem
        .Content-Item
            background: #fff
            border-bottom: .01rem solid #f7f7f7
            display: flex
            padding: .6rem 1rem
            box-sizing: border-box
            .Item-Left
                flex: 0 0 3rem
                .Item-Left-pic
                    width: 3rem
                    height: 3rem
                    border-radius: .5rem
            .Item-Right
                flex: 1
                padding-left: .5rem
                .Item-Name
                    color: #677194
                    margin-bottom: .4rem
                    font-weight: bold
                .Item-Info
                    font-size: .9rem
                    font-weight: bold
                    line-height: 1rem
                    margin-bottom: .3rem
                .Item-img
                    display: flex
                    padding: .2rem 0
                    .Item-img-pic
                        width: 8rem
                        height: 8rem
</style>
