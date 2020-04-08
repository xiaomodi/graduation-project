<template>
  <div>
    <div class='HomeArticale-Wrapper' ref='ArticaleWrapper'>
      <ul>
        <li class='articale-item' v-for='item in this.articaleList' :key='item.item_id' @click='handleClickItem(item)'>
          <div class="change-style">
            <!-- 有三张图片的执行下面操作 -->
            <div class="content-wrapper" v-if='item.image_list'>
              <div class="title">{{item.title}}</div>
              <div class="content">
                <img class='content-pic' v-for='(iteminner, index) in item.image_list' :key='index' :src="iteminner.url">
              </div>
              <div class="footer">
                <span class="write-wrapper">
                  <span class="tag" v-if='item.chinese_tag'>{{item.chinese_tag}}</span>
                  <span class="write-name">
                    <img class='head-sculpture' :src="item.media_avatar_url" alt="">
                    {{item.source}}
                  </span>
                </span>
                <span class="time">{{time | getTimes}}</span>
              </div>
            </div>
            <!-- 只有一张图片的执行下面操作 -->
            <div class="content-wrapper-one" v-else-if="item.image_url">
              <div class="content-left">
                <img class='content-left-pic' :src="item.image_url">
              </div>
              <div class="content-right">
                <div class="content-right-title">{{item.title}}</div>
                <div class="right-footer">
                  <div class="right-write-wrapper">
                    <span class="right-tag" v-if='item.chinese_tag'>{{item.chinese_tag}}</span>
                    <span class="write-name">
                      <img class='head-sculpture' :src="item.media_avatar_url" alt="">
                      <span class='right-source'>{{item.source}}</span>
                    </span>
                  </div>
                  <div class="content-right-time">{{time | getTimes}}</div>
                </div>
              </div>
            </div>
            <!-- 没有图片 -->
            <div class='nothing-wrapper' v-else>
              <div class="title">{{item.title}}</div>
              <div class="footer">
                <span class="write-wrapper">
                  <span class="tag" v-if='item.chinese_tag'>{{item.chinese_tag}}</span>
                  <span class="write-name">
                    <img class='head-sculpture' :src="item.media_avatar_url" alt="">
                    {{item.source}}
                  </span>
                </span>
                <span class="time">{{time | getTimes}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="loadmore" v-show='loadmore'>加载中.......</div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { getdates } from '@/assets/js/getDates'

export default {
  name: 'HomeArticale',
  data () {
    return {
      articaleList: [],
      time: 1469271264000,
      pages: 0,
      loadmore: false
    }
  },
  filters: {
    getTimes (time) {
      const date = new Date(time)
      return getdates(date, 'YYYY-MM-DD hh:mm')
    }
  },
  methods: {
    getAxios () {
      axios.get('/api/Articale.json').then(res => {
        if (res.status === 200) {
          const articaleList = res.data.data
          this.articaleList = articaleList
          console.log(this.articaleList)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ArticaleWrapper, {
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
        this.pages++
        console.log(this.pages)
        axios.get('/api/Articale.json?=' + this.pages).then(res => {
          console.log(res)
          if (res.status === 200) {
            const list = res.data.data
            list.forEach(item => {
              this.articaleList.push(item)
            })
            this.loadmore = false
          }
        }).catch(err => {
          console.log(err)
        })
        setTimeout(() => {
          this.scroll.finishPullUp()
          this.scroll.refresh()
        })
      })
    },
    handleClickItem (item) {
      console.log(item)
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
@import '../../../assets/stylus/ellipsis.styl'

.HomeArticale-Wrapper
  width: 100%
  position: absolute
  top: 3rem
  left: 0
  right: 0
  bottom: 3rem
  overflow: hidden
  .articale-item
    border-bottom: .01rem solid #e8e8e8
    box-sizing: border-box
    padding: .9rem 1.2rem
    overflow: hidden
    .change-style
    // 有三张图片的样式
      .title
        margin-bottom: .7rem
        line-height: 1.3rem
        font-weight: bold
        ellipsisline()
      .content
        display: flex
        justify-content: space-between
        .content-pic
          width: 31%
          height: 100%
          border-radius: .3rem
      .footer
        margin-top: .4rem
        font-size: .9rem
        overflow: hidden
        padding: .5rem 0 0.3rem 0
        box-sizing: border-box
        .write-wrapper
          float: left
          display: block
          .tag
            color: #87a5b5!important
            border: .01rem solid #87a5b5
            padding: .1rem .2rem
            margin-right: .4rem
          .write-name
            color: #777
            .head-sculpture
              width: 1rem
              height: 1rem
              border-radius: 100%
              vertical-align: bottom
              margin-left: .2rem
        .time
          float: right
          display: block
          color: #777
          line-height: 1.3rem
    // 只有一张图片的样式
    .content-wrapper-one
      overflow: hidden
      display: flex
      .content-left
        flex: 0 0 7rem
        .content-left-pic
          display: block
          width: 100%
          height: 100%
          border-radius: .3rem
      .content-right
        box-sizing: border-box
        padding: .1rem .5rem
        .content-right-title
          font-weight: bold
          line-height: 1.3rem
        .right-footer
          .right-write-wrapper
            margin: .5rem 0
            .right-tag
              color: #87a5b5
              font-size: .8rem
              border: 0.01rem solid #87a5b5
              padding: .05rem .25rem
              box-sizing: border-box
            .write-name
              .head-sculpture
                width: 1rem
                height: 1rem
                border-radius: 100%
                vertical-align: bottom
                margin-left: .3rem
              .right-source
                margin-left: .2rem
                display: inline-block
                width: 9rem!important
                vertical-align: bottom
                font-size: .9rem
                color: #777
                ellipsis()
          .content-right-time
            font-size: .9rem
            color: #777
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
