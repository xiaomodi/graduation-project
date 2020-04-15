<template>
    <transition name='show'>
        <v-touch class='shopDetail-Wrapper' @swiperight.self='swiperight'>
            <div class="ItemHeader">
                <span class='BackHome' @click='handleBackHome'>
                    返回
                </span>
                <span class='ItemTit'>商品详情</span>
            </div>
            <div class="Item-banner">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide><img class='swiper-pic' :src="detail.pic" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="Detail-desc-wrapper">
                <div class="Detail-desc">{{detail.short_description}}</div>
                <div class="share-wrapper">
                    <span class='share'><span class='iconfont'>&#xe630;</span>分享</span>
                </div>
            </div>
            <div class="line"></div>
            <ShopDetailContent/>
            <div class="line"></div>
            <ShopDetailContentEnsure/>
            <div class="line"></div>
            <div class="ItemFooter-Wrapper">
                <div class="Item-footer">
                    <div class="shoucang">
                        <div class="star"><span class='iconfont'>&#xe630;</span></div>
                        <div class="text">店铺</div>
                    </div>
                    <div class="shoucang">
                        <div class="star"><span class='iconfont'>&#xe630;</span></div>
                        <div class="text">客服</div>
                    </div>
                    <div class="shoucang">
                        <div class="star"><span class='iconfont'>&#xe630;</span></div>
                        <div class="text">收藏</div>
                    </div>
                    <div class="shopping-card">
                        <span>加入购物车</span>
                    </div>
                    <div class="buy">
                        <span>购买</span>
                    </div>
                </div>
            </div>
        </v-touch>
    </transition>
</template>

<script>
import ShopDetailContent from './ShopDetailContent'
import ShopDetailContentEnsure from './ShopDetailContentEnsure'
export default {
  name: 'ShopDetail',
  components: {
    ShopDetailContent,
    ShopDetailContentEnsure
  },
  props: {
    detail: {
      type: [Array, Object]
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
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
    .Item-banner
        width: 100%
        height: 13rem
        .swiper-pic
            width: 100%
            height: 13rem
    .Detail-desc-wrapper
        width: 100%
        padding: 1rem 0 .8rem .6rem
        box-sizing: border-box
        background: #fff
        display: flex
        .Detail-desc
            flex: 1
            line-height: 1.2rem
            text-indent: 1.3rem
            font-weight: bold
            font-size: .95rem
            margin-right: .5rem
        .share-wrapper
            // flex: 0 0 4rem
            font-size: .7rem
            .share
                background: #f4f4f4
                border-top-left-radius: 3rem
                border-bottom-left-radius: 3rem
                padding: .25rem 0 .25rem .4rem
                box-sizing: border-box
    .line
        width: 100%
        height: .6rem
        background: #f7f8fa
        border: .01rem solid #ebebeb
    .ItemFooter-Wrapper
        width: 100%
        height: 5rem
        position: fixed
        left: 0
        right: 0
        bottom: 0
        border: .01rem solid black
        .Item-footer
            width: 100%
            height: 2.5rem
            position: absolute
            left: 0
            right: 0
            bottom: 2rem
            display: flex
            padding: 0 .4rem
            box-sizing: border-box
            // background: yellow
            .shoucang
                flex: 0 0 3rem
                text-align: center
                padding: .2rem 0
                .iconfont
                    font-size: 1.2rem
                    display: block
                    margin-bottom: .3rem
                .text
                    font-size: .6rem
            .shopping-card
                flex: 1
                text-align: center
                line-height: 2.5rem
                border-top-left-radius: 3rem
                border-bottom-left-radius: 3rem
                margin-left: 1rem
                font-size: .9rem
                color: #fff
                background: -webkit-linear-gradient(left, #f7c846, #f29c39)
                padding: 0 .2rem
                box-sizing: border-box
            .buy
                flex: 1
                text-align: center
                line-height: 2.5rem
                border-top-right-radius: 3rem
                border-bottom-right-radius: 3rem
                font-size: .9rem
                color: #ffffff
                background: -webkit-linear-gradient(left, #e96437, #ea3546)
                padding: 0 .2rem
                box-sizing: border-box
</style>
