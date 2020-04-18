<template>
    <div>
      <div class='HomeDate-Wrapper' ref='DateWrapper'>
        <div>
          <div class="HomeDate-Swiper">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide><img class='swiper-pic' src="https://image1.suning.cn/uimg/cms/img/158625033970349769.jpg?format=_is_1242w_610h" alt=""></swiper-slide>
              <swiper-slide><img class='swiper-pic' src="https://oss.suning.com/aps/aps_learning/iwogh/2020/04/08/10/iwoghBannerPicture/906973fbb3854555963ffa3d4a83d8f5.png?format=_is_1242w_610h" alt=""></swiper-slide>
              <swiper-slide><img class='swiper-pic' src="https://oss.suning.com/aps/aps_learning/iwogh/2020/04/07/18/iwoghBannerPicture/ed22509f49fe43eabaca39348ffb2742.png?format=_is_1242w_610h" alt=""></swiper-slide>
              <swiper-slide><img class='swiper-pic' src="https://oss.suning.com/aps/aps_learning/iwogh/2020/04/07/18/iwoghBannerPicture/ed72da64f65848a7b87172715fdad942.png?format=_is_1242w_610h" alt=""></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="Date-Content-wrapper">
              <div class="content-tit">
                <span class='lastmonth' @click="prevMonth">
                  <span class="iconfont">&#xe61b;</span>
                </span>
                <span class='title-year'>{{time.year}} 年</span>
                <span class='title-month'>{{time.month+1}} 月</span>
                <span class='nextmonth' @click="nextMonth">
                  <span class="iconfont">&#xe617;</span>
                </span>
              </div>
              <div class="date-content">
                <div class="days-head">
                  <span class="days-item" v-for='(day, index) in this.days' :key='index'>{{day}}</span>
                </div>
                <!-- 列出一个六行七列的表格 -->
                <div class="date-calendar">
                  <div class="hang" v-for='(h, index) in 6' :key='index'>
                    <span class="lie"
                      v-for='(l, index) in 7'
                      :key='index'
                      @click="chooseDate(visibleDays[(h-1)*7+(l-1)])"
                      :class="[
                        {notCurrentMonth:!isCurrentMonth(visibleDays[(h-1)*7+(l-1)])},
                        {today:isToday(visibleDays[(h-1)*7+(l-1)])},
                        {select:isSelect(visibleDays[(h-1)*7+(l-1)])}
                      ]"
                    >
                      {{visibleDays[(h-1)*7+(l-1)].getDate()}}
                    </span>
                  </div>
                </div>
              </div>
          </div>
          <div class="line"></div>
          <div class="node-content" @click='handleshow'>
            <div class="today-wrapper">
              <span class='today'>今天</span>
              <span class='today-date'>{{this.currentDate | getToday}}</span>
              <span class="add" @click='hanleClickAdd'>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-bianji"></use>
                </svg>
              </span>
            </div>
            <ul>
              <li class='node-item' v-for='item in 10' :key='item'>
                <span class='time'>时间</span>
                <span class='content'>内容</span>
                <span class='rewrite'>
                  <span class="edit" @click='handleClickEdit'>
                    <span class="iconfont">&#xe61d;</span>
                  </span>
                  <span class="cancel">
                    <span class="iconfont">&#xe618;</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <HomeDateDetail v-show='DetailShow' @close='SwiperRightClose'/>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { getYearMonthDay, getDate } from '@/assets/js/utils'
import { getdates } from '@/assets/js/getDates'
import HomeDateDetail from './HomeDateDetail/HomeDateDetail'

export default {
  name: 'HomeDate',
  props: {
    value: {
      type: Date,
      default: () => new Date() // 返回默认值必须是一个函数类型{} []
    }
  },
  components: {
    HomeDateDetail
  },
  data () {
    const { year, month } = getYearMonthDay(this.value)
    return {
      DetailShow: false,
      days: ['日', '一', '二', '三', '四', '五', '六'],
      currentDate: new Date(),
      time: { year, month },
      choseDate: '',
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
    getToday (time) {
      const today = new Date(time)
      console.log(today)
      return getdates(today, 'MM月DD日')
    }
  },
  computed: {
    // 日期格式转换
    formatDate () {
      // this.value  //getFullYesr getMonth getDate
      const { year, month, day } = getYearMonthDay(this.value)
      return `${year}-${month + 1}-${day}`
    },
    // 获取当前周几
    visibleDays () {
      // const year = this.currentTime.getFullYear()
      // const month = this.currentTime.getMonth()
      const { year, month } = getYearMonthDay(getDate(this.time.year, this.time.month, 1))
      const currentFirstDay = getDate(year, month, 1) // 获取当前月份的第一天
      console.log('获取当前月份的第一天:' + currentFirstDay)
      // 先生成一个当前日期 2020 4 8
      // 获取当前是周几，把天数往前移动几天 --> 周3
      const week = currentFirstDay.getDay()
      // console.log(week)
      const startDay = currentFirstDay - week * 60 * 60 * 1000 * 24 // 分钟（60*1000）小时（60*60*1000） 天（24*60*60*1000）
      console.log('startday:' + startDay)
      // 把天数往前移动几天 循环遍历42天
      const arr = []
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
      }
      console.log(arr)
      return arr
    }
  },
  methods: {
    // 日期逻辑
    isCurrentMonth (Date) {
      const { year, month } = getYearMonthDay(getDate(this.time.year, this.time.month, 1))
      const { year: y, month: m } = getYearMonthDay(Date)
      return year === y && month === m
    },
    // 判断是否是今天
    isToday (date) {
      const { year, month, day } = getYearMonthDay(new Date())
      const { year: y, month: m, day: d } = getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    isSelect (date) {
      // 获取当前的年月日
      const { year, month, day } = getYearMonthDay(this.value)
      const { year: y, month: m, day: d } = getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    chooseDate (date) {
      this.chooseDate = getYearMonthDay(date) // 更新头部年月
      console.log(this.chooseDate)
      // this.$emit('input', date)
      // this.blur() // 关闭弹层
    },
    prevMonth () {
      // this.time.month--;
      // let { year, month, day } = getYearMonthDay(this.time.year, this.time.month, 1); //当前年月
      // 获取当前年月的一个日期
      const d = getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() - 1)
      this.time = getYearMonthDay(d)
    },
    nextMonth () {
      // 获取当前年月的一个日期
      const d = getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() + 1)
      this.time = getYearMonthDay(d)
    },
    getScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.DateWrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    handleshow () {
      this.DetailShow = true
    },
    SwiperRightClose () {
      this.DetailShow = false
    },
    hanleClickAdd () {
      this.DetailShow = true
    },
    handleClickEdit () {
      this.DetailShow = true
    }
  },
  created () {
    // console.log(this.currentTime)
    // console.log(this.visibleDays)
    // console.log(this.visibleDays[(6 - 1) * 7 + (7 - 1)].getDate())
    this.$nextTick(() => {
      this.getScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/ellipsis.styl'

.HomeDate-Swiper>>>.swiper-pagination-bullet-active
  background: #fff
.HomeDate-Wrapper
  width: 100%
  position: absolute
  top: 3rem
  left: 0
  right: 0
  bottom: 3.3rem
  overflow: hidden
  // padding: 0 .4rem
  // box-sizing: border-box
  .HomeDate-Swiper
    width: 100%
    height: 0
    padding: 0 .4rem 10rem .4rem
    box-sizing: border-box
    .swiper-pic
      width: 100%
      height: 10rem
      border-radius: .3rem
  .Date-Content-wrapper
    width: 100%
    height: 100%
    margin-top: .3rem
    padding: .3rem 0.4rem
    box-sizing: border-box
    .content-tit
      width: 100%
      line-height: 1.5rem
      background: #fff
      font-size: 1.1rem
      font-weight: bold
      color: #333
      text-align: center
      .lastmonth
        margin-right: 1rem
      .nextmonth
        margin-left: 1rem
      .title-year
        margin-right: .3rem
    .date-content
      width: 100%
      padding: .2rem 0
      box-sizing: border-box
      .days-head
        display: flex
        // border: .01rem solid black
        margin-bottom: .5rem
        padding: .3rem 0
        box-sizing: border-box
        .days-item
          flex: 1
          text-align: center
      .date-calendar
        width: 100%
        .hang
          display: flex
          .lie
            flex: 1
            text-align: center
            // border: .01rem solid red
            padding: .5rem 0
            &.notCurrentMonth
              color: #dfe1e3;
            &.today
              background: red;
              color: #ffffff;
              border-radius: .3rem
          .lie:hover
            background: red
            color: #fff
   .line
    width: 100%
    height: .3rem
    background: #efedee
  .node-content
    width: 100%
    padding: .5rem 1.2rem
    box-sizing: border-box
    .today-wrapper
      margin-bottom: .5rem
      overflow: hidden
      .today
        line-height: 1.5rem
        font-weight: bold
        margin-right: .5rem
      .today-date
        font-size: .9rem
      .add
        line-height: 1.5rem
        float: right
        display: block
        margin-right: .7rem
    .node-item
      width: 100%
      height: 2.2rem
      line-height: 2.2rem
      border-bottom: 0.01rem solid #e8e8e8
      padding: 0 .5rem
      box-sizing: border-box
      display: flex
      .time
        flex: 0 0 3.7rem
      .content
        flex: 1
        ellipsis()
      .rewrite
        flex: 0 0 3rem
        font-size: .8rem
        overflow: hidden
        .edit
          float: left
          display: block
          color: #999
          font-size: .7rem
        .cancel
          float: right
          display: block
          color: #999
          font-size: .7rem
</style>
