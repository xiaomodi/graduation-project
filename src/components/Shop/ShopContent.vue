<template>
    <div class='Shop-Wrapper'>
      <div class="Shop-Header">
          <div class="Header-Left" @click='handleCLickTab(1)'>
              <span :class="{active: isactive === 1}">商城</span>
          </div>
          <div class="Header-Right" @click='handleCLickTab(2)'>
              <span :class="{active: isactive === 2}">课堂</span>
          </div>
      </div>
      <div class="search-input">
          <input type="text" class='input iconfont' :placeholder='icon'>
      </div>
      <ShopRightWrapper v-show='isactive === 1'/>
    </div>
</template>

<script>
import ShopRightWrapper from './ShopContent/ShopRightWrapper'
export default {
  name: 'ShopContent',
  components: {
    ShopRightWrapper
  },
  data () {
    return {
      isactive: 1,
      icon: '\ue630 搜索'
    }
  },
  methods: {
    handleCLickTab (num) {
      this.isactive = num
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/stylus/bgColor.styl'

.Shop-Wrapper
    width: 100%
    box-sizing: border-box
    padding: .4rem .6rem
    .Shop-Header
        width: 100%
        line-height: 2rem
        display: flex
        .Header-Left
            flex: 1
            font-weight: bold
            text-align: center
            .active
                padding-bottom: .3rem
                border-bottom: .2rem solid $bgColor
        .Header-Right
            flex: 1
            font-weight: bold
            text-align: center
            .active
                padding-bottom: .3rem
                border-bottom: .2rem solid $bgColor
    .search-input
        width: 100%
        height: 3rem
        padding: 0.5rem .6rem
        box-sizing: border-box
        margin-bottom: .3rem
        .input
            width: 100%
            height: 2rem
            outline: none
            text-align: center
            border-radius: 2.2rem
            border: .1rem solid $bgColor
    .Content-Wrapper
      position: absolute
      top: 5.7rem
      left: 0
      right: 0
      botttom: 3.5rem
      background: yellow
      overflow: hidden
      padding: 0 .4rem
      box-sizing: border-box
</style>
