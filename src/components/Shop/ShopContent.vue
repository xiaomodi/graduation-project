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
      <ShopRightWrapper v-show='isactive === 1' :pageList='pageList'/>
      <ShopClassRoom v-show='isactive === 2' :pageList='pageList'/>
    </div>
</template>

<script>
import axios from 'axios'
import ShopRightWrapper from './ShopContent/ShopRightWrapper'
import ShopClassRoom from './ClassRoom/ClassRoom'
export default {
  name: 'ShopContent',
  components: {
    ShopRightWrapper,
    ShopClassRoom
  },
  data () {
    return {
      isactive: 1,
      pageList: []
    }
  },
  methods: {
    handleCLickTab (num) {
      this.isactive = num
    },
    getPageAxios () {
      axios.get('/api/page.json').then(res => {
        if (res.status === 200) {
          const pageList = res.data.data
          this.pageList = pageList
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getPageAxios()
    })
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
