<template>
    <div class='ClassRoomActualCombat-Wrapper' ref='ClassRoomActualCombatWrapper'>
        <div>
          <div class="ClassRoomContent" v-for='(item, index) in this.pageList' :key='index'>
            <div class="Left-pictures">
              <img class='Item-Pic' :src="item.pic" alt="">
            </div>
            <div class="content-right">
              <div class="title">{{item.short_description}}</div>
              <div class="desc-wrapper">
                <span class='desc-left'>已学30%</span>
                <span class='desc-right'>
                  <span class='course'>加入课程</span>
                  <span class='notes'>笔记 0</span>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'ClassRoomSmell',
  data () {
    return {
      pageList: []
    }
  },
  methods: {
    getScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ClassRoomActualCombatWrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    getAxios () {
      axios.get('/api/Smell.json').then(res => {
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
      this.getScroll()
      this.getAxios()
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/ellipsis.styl'
@import '../../../../assets/stylus/bgColor.styl'

.ClassRoomActualCombat-Wrapper
    width: 100%
    position: absolute
    top: 5.5rem
    left: 0
    right: 0
    bottom: 3.5rem
    padding: .1rem .8rem
    box-sizing: border-box
    overflow: hidden
    background: #fff
    .ClassRoomContent
      width: 100%
      height: 5rem
      display: flex
      z-index: -1
      margin-bottom: .5rem
      .Left-pictures
        flex: 0 0 5rem
        width: 4rem
        height: 4rem
        .Item-Pic
          width: 5rem
          height: 5rem
          border-radius: .3rem
      .content-right
        padding: 0 .6rem
        letter-spacing: .1rem
        font-size: .95rem
        font-weight: bold
        position: relative
        .title
          line-height: 1.3rem
          ellipsisline()
        .desc-wrapper
          font-size: .6rem
          .desc-left
            position: absolute
            left: 1rem
            bottom: .2rem
            color: #959595
          .desc-right
            position: absolute
            right: 1rem
            bottom: .2rem
            color: $bgColor
            .notes
              margin-left: .6rem
</style>
