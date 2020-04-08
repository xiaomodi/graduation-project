<template>
  <div>
    <div class='HomeOrganuzed-Wrapper' ref='ContentWrapper'>
      <div>
        <div class="HomeOrganzed-Swiper">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img class='swiper-pic' src="https://image1.suning.cn/uimg/cms/img/158590537953305112.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
            <swiper-slide><img class='swiper-pic' src="https://image.suning.cn/uimg/aps/material/158592019157922389.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
            <swiper-slide><img class='swiper-pic' src="https://image.suning.cn/uimg/aps/material/157346145382344556.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
            <swiper-slide><img class='swiper-pic' src="https://oss.suning.com/aps/aps_learning/iwogh/2020/04/06/16/iwoghBannerPicture/1a38504f903348e4855282940121aad7.png?format=_is_1242w_610h" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="content-tit">
          <span class='activity'>线下活动</span>
          <span class='read-more'>更多>></span>
        </div>
        <div class="Content-Wrapper">
          <div class="Content-Item" v-for='(item, index) in this.HomeList' :key='index' @click='handleClickItem(item)'>
            <img class='Content-Item-Pic' :src="item.imgUrl" alt="">
            <div class="title">
              {{item.title}}
            </div>
            <div class="item-footer">
              <span class='time'>{{item.time | getDate}}</span>
              <span class='address'>{{item.address}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loadmore" v-show='loadmore'>加载中.......</div>
    <HomeOriganizedItem v-show='DetailShow' @close='handleCloseItemDetail' :selectItem='selectItem'/>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { formatDate } from '@/assets/js/formatDate'
import HomeOriganizedItem from './HomeOriganizedItem/HomeOriganizedItem'

export default {
  name: 'HomeOrganuzed',
  components: {
    HomeOriganizedItem
  },
  data () {
    return {
      HomeList: [],
      selectItem: [],
      getfullyear: '',
      pages: 1,
      loadmore: false,
      DetailShow: false,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true,
        speed: 1000
      }
    }
  },
  filters: {
    getDate (time) {
      const date = new Date(time) // 这一步拿到通过ajax拿到的时间戳
      // console.log(date)
      return formatDate(date, 'MM/dd')
    }
  },
  methods: {
    getAxios () {
      axios.get('/api/Home.json').then(res => {
        const HomeList = res.data.data.Home
        this.HomeList = HomeList
      }).catch(err => {
        console.log(err)
      })
    },
    getScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ContentWrapper, {
          click: true,
          probeType: 3,
          pullUpLoad: {
            threshold: -80
          }
        })
      } else {
        this.scroll.refresh()
      } // pullingUp
      this.scroll.on('pullingUp', poy => {
        this.loadmore = true
        this.pages++
        axios.get('/api/Home.json?=' + this.pages).then(res => {
          if (res.status === 200) {
            this.loadmore = false
            const HomeList = res.data.data.Home
            HomeList.forEach(item => {
              this.HomeList.push(item)
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
    handleClickItem (item) {
      this.DetailShow = true
      this.selectItem = item
    },
    handleCloseItemDetail () {
      this.DetailShow = false
    }
  },
  created () {
    this.$nextTick(() => {
      this.getAxios()
      this.getScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
.HomeOrganzed-Swiper>>>.swiper-pagination-bullet-active
  background: #fff
.HomeOrganuzed-Wrapper
  padding: 0 .4rem
  box-sizing: border-box
  position: absolute
  top: 3rem
  left: 0
  right: 0
  bottom: 3rem
  overflow: hidden
  .HomeOrganzed-Swiper
    width: 100%
    height: 0
    padding-bottom: 10rem
    .swiper-pic
      width: 100%
      height: 10rem
      border-radius: .3rem
  .content-tit
    overflow: hidden
    margin: .8rem 0
    font-weight: bold
    padding: 0 .7rem
    box-sizing: border-box
    .activity
      float: left
      display: block
    .read-more
      float: right
      display: block
  .Content-Wrapper
    wodth: 100%
    padding: .3rem .2rem
    box-sizing: border-box
    overflow: hidden
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .Content-Item
      width: 49%
      margin-bottom: .6rem
      border-radius: .2rem
      box-sizing: border-box
      padding: .3rem .3rem
      background: #ffffff
      box-shadow: 1px 3px 4px 3px #efedee
      .Content-Item-Pic
        width: 100%
        border-radius: .3rem
        margin-bottom: .4rem
      .title
        font-size: .8rem
        font-weight: bold
        width: 100%
        height: 2rem
        line-height: 1rem
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
      .item-footer
        margin-top: .2rem
        overflow: hidden
        padding: .1rem .1rem
        .time
          float: left
          display: block
          font-size: .9rem
        .address
          font-size: .9rem
          float: right
          display: blick
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
