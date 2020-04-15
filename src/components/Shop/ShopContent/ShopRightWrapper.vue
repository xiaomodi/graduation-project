<template>
    <div>
        <div class="search-input">
            <input type="text" class='input iconfont' :placeholder='icon'>
        </div>
        <div class='ShopRight-Wrapper' ref='ShopRightWrapper'>
            <div>
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
                <ShopRightContent :pageList='pageList' @show='HandleDetailShow'/>
            </div>
        </div>
         <div class="loadmore" v-show='loadmore'>加载中.......</div>
         <ShopDetail v-show='DetailShow' @close='handleDetailClose' :detail='detail'/>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import ShopIcon from '../ShopIcon'
import ShopRightContent from './ShopRight'
import ShopDetail from './ShopDetail/ShopDetail'
export default {
  name: 'ShopRightWrapper',
  components: {
    ShopIcon,
    ShopDetail,
    ShopRightContent
  },
  data () {
    return {
      icon: '\ue630 搜索',
      IconList: [],
      pageList: [],
      detail: [],
      page: 0,
      DetailShow: false,
      loadmore: false,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  methods: {
    getShopIndex () {
      axios.get('/api/ShopIndex.json').then(res => {
        const IconList = res.data.IconList
        this.IconList = IconList
      }).catch(err => {
        console.log(err)
      })
    },
    getPage () {
      axios.get('/api/page.json').then(res => {
        if (res.status === 200) {
          const pageList = res.data.data
          this.pageList = pageList
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getscroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ShopRightWrapper, {
          click: true,
          probeType: 3,
          pullUpLoad: {
            threshold: -80
          }
        })
      } else {
        this.scroll.refresh()
      }
      this.scroll.on('pullingUp', poy => {
        this.loadmore = true
        this.page++
        axios.get('/api/page.json?=' + this.page).then(res => {
          console.log(res)
          if (res.status === 200) {
            this.loadmore = false
            const pageList = res.data.data
            pageList.forEach(item => {
              this.pageList.push(item)
            })
          }
        }).catch(err => {
          console.log(err)
        })
        setTimeout(() => {
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }, 1000)
      })
    },
    HandleDetailShow (item) {
      console.log(item)
      this.DetailShow = true
      this.detail = item
    },
    handleDetailClose () {
      this.DetailShow = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getShopIndex()
      this.getPage()
      this.getscroll()
    })
  }
}
</script>

<style lang='stylus' scoped>
@import '../../../assets/stylus/bgColor.styl'

.Shop-Swiper >>> .swiper-pagination-bullet-active
    background: #fff
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
      box-sizing: border-box
      border: .1rem solid $bgColor
.ShopRight-Wrapper
    position: absolute
    top: 5.5rem
    left: 0
    right: 0
    bottom: 3.5rem
    overflow: hidden
    padding: 0 .4rem
    box-sizing: border-box
    .swiper-pic
        width: 100%
        height: 10rem
        border-radius: .3rem
.loadmore
  width: 100%
  line-height: 2.2rem
  background: #ccc
  color: #000
  position: absolute
  left: 0
  right: 0
  bottom: 3.3rem
  text-align: center
</style>
