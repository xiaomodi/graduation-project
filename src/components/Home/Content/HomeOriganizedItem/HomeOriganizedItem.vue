<template>
    <transition name='move'>
        <v-touch class='Item-Wrapper' v-on:swiperight="swiperight">
            <div class="ItemHeader">
                <span class='BackHome' @click='handleBackHome'>
                    返回
                </span>
                <span class='ItemTit'>活动详情</span>
            </div>
            <div class="ItemImg">
                <img :src="selectItem.imgUrl" alt="">
            </div>
            <div class="line"></div>
            <div class="ItemDetail">
                <ul>
                    <li class='Item-Date'>
                        <span class='icon'>图标</span>
                        <span class='content'>{{this.selectItem.time | getAllDate}}</span>
                    </li>
                    <li class='Item-Address'>
                        <span class='icon'>图标</span>
                        <span class='content city' v-for="(iteminner, index) in selectItem.address.split('|')" :key='index'>{{iteminner}}</span>
                    </li>
                    <li class='Item-tel'>
                        <span class='icon'>图标</span>
                        <span class='content'>{{this.selectItem.tel}}</span>
                    </li>
                </ul>
            </div>
        </v-touch>
    </transition>
</template>

<script>
import { getdates } from '@/assets/js/getDates'

export default {
  name: 'HomeOriganizedItem',
  props: {
    selectItem: {
      type: [Array, Object]
    }
  },
  filters: {
    getAllDate (time) {
      const date = new Date(time)
      return getdates(date, 'YYYY年MM月DD日 hh:mm')
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

<style lang="stylus" scoped>
.move-enter, .move-leave-to
    transform: translate3d(100%, 0, 0)
.move-enter-active, .move-leave-active
    transition: all .2s linear
.Item-Wrapper
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #fff
    z-index: 100
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
    .ItemImg img
        width: 100%
    .line
        width: 100%
        height: .6rem
        background: #f7f8fa
        border: .01rem solid #ebebeb
        margin-top: -.1rem
    .ItemDetail
        width: 100%
        .Item-Date,.Item-Address,.Item-tel
            height: 2.5rem
            border-bottom: .01rem solid #f7f8fa
            padding: .2rem 1rem
            box-sizing: border-box
            .icon
                line-height: 2.5rem
                margin-right: .5rem
                vertical-align: top
            .content
                line-height: 2.5rem
                &.city
                    margin-right: .3rem
</style>
