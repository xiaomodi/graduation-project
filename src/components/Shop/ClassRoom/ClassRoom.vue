<template>
    <div class='Shop-Wrapper'>
      <div class="ClassroomHeader">
        <div class="HeaderNav">
          <span class='active'>全部</span>
          <span>实战课</span>
          <span>金职位</span>
          <span>微课</span>
        </div>
      </div>
      <div class="ClassRoomContentWrapper" ref='ClassRoomContentWrapper'>
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
      <CLassRoomItem/>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import CLassRoomItem from './ClossRoomItem/ClossRoomItem'
export default {
  name: 'ShopClassRoom',
  props: {
    pageList: {
      type: Array
    }
  },
  components: {
    CLassRoomItem
  },
  mounted () {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.ClassRoomContentWrapper)
    } else {
      this.scroll.refresh()
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../../assets/stylus/ellipsis.styl'
@import '../../../assets/stylus/bgColor.styl'

.Shop-Wrapper
  width: 100%
  background: #fff
  margin-top: .6rem
  overflow: hidden
  .ClassroomHeader
    position: absolute
    top: 3rem
    left: 0
    right: 0
    background: #ffffff
    line-height: 2.2rem
    box-shadow: 1px 6px 6px -1px #efedee
    padding: 0 .9rem
    box-sizing: border-box
    font-size: .8rem
    font-weight: bold
    .HeaderNav
      width: 66%
      display: flex
      justify-content: space-between
      .active
        color: $bgColor
  .ClassRoomContentWrapper
    width: 100%
    position: absolute
    top: 5.5rem
    left: 0
    right: 0
    bottom: 3.5rem
    padding: .1rem .8rem
    box-sizing: border-box
    overflow: hidden
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
