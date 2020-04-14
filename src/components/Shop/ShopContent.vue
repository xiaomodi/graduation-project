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
      <div class="Shop-Swiper">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img class='swiper-pic' src="https://image1.suning.cn/uimg/cms/img/158590537953305112.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
            <swiper-slide><img class='swiper-pic' src="https://image.suning.cn/uimg/aps/material/158592019157922389.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
            <swiper-slide><img class='swiper-pic' src="https://image.suning.cn/uimg/aps/material/157346145382344556.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
            <swiper-slide><img class='swiper-pic' src="https://oss.suning.com/aps/aps_learning/iwogh/2020/04/06/16/iwoghBannerPicture/1a38504f903348e4855282940121aad7.png?format=_is_1242w_610h" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
      <ShopIcon :IconList='IconList'/>
    </div>
</template>

<script>
import axios from 'axios'
import ShopIcon from './ShopIcon'
export default {
  name: 'ShopContent',
  components: {
    ShopIcon
  },
  data () {
    return {
      isactive: 1,
      icon: '\ue630 搜索',
      IconList: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  methods: {
    handleCLickTab (num) {
      this.isactive = num
    },
    getAxios () {
      axios.get('/api/ShopIndex.json').then(res => {
        const IconList = res.data.IconList
        this.IconList = IconList
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getAxios()
    })
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/stylus/bgColor.styl'

.Shop-Swiper >>> .swiper-pagination-bullet-active
    background: #fff
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
    .Shop-Swiper
        .swiper-pic
            width: 100%
            height: 10rem
            border-radius: .3rem
</style>
