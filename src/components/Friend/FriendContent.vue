<template>
    <div class='FriendContent-Wrapper'>
        <div class="FriendHeader">
            <div class="title">通讯录</div>
            <div class="search-input">
                <input type="text" class='iconfont input' :placeholder='icon' v-model="keyword">
            </div>
        </div>
        <div class="Friend-Content" ref='FriendContent'>
            <ul>
                <li class='letter-list' v-for='(item, key) of friendlist' :key='key' :ref='key'>
                    <div class="letter">{{key}}</div>
                    <ul>
                        <li class='item' v-for='iteminner in item' :key='iteminner.id'>
                            <span class='head'>头像</span>
                            <span class="name">{{iteminner.name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="search-content" ref='SearchWrapper' v-show='keyword'>
          <ul>
              <li class='item' v-for='(inner, index) in this.result' :key='index'>
                  <span class='head'>头像</span>
                  <span class="name">{{inner.name}}</span>
              </li>
          </ul>
          <div class="nothing" v-show='hasNoDate'>什么都没有找到</div>
        </div>
        <FriendLetter :friendlist='friendlist' @change='handleLetterChange' />
    </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import FriendLetter from './FriendLetter'
export default {
  name: 'FriendContent',
  components: {
    FriendLetter
  },
  data () {
    return {
      icon: '\ue601 搜索',
      friendlist: {},
      letter: '',
      keyword: '',
      result: []
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const Element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(Element, 500)
      }
    },
    keyword () {
      if (this.keyword) {
        this.SearchScroll()
        const result = []
        for (const i in this.friendlist) {
          this.friendlist[i].forEach(item => {
            // console.log(item)
            if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
              result.push(item)
              this.result = result
              // console.log(this.result)
            }
          })
        }
      }
    }
  },
  computed: {
    hasNoDate () {
      return !this.result.length
    }
  },
  methods: {
    getAxios () {
      axios.get('/api/friend.json').then(res => {
        if (res.status === 200) {
          const friendlist = res.data.data.cities
          this.friendlist = friendlist
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleLetterChange (key) {
      this.letter = key
    },
    SearchScroll () {
      this.searchScroll = new BScroll(this.$refs.SearchWrapper, {
        click: true
      })
    }
  },
  mounted () {
    this.getAxios()
    this.scroll = new BScroll(this.$refs.FriendContent)
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/stylus/bgColor.styl'

.FriendContent-Wrapper
    width: 100%
    .FriendHeader
        width: 100%
        height: 6rem
        background: $bgColor
        .title
            color: #fff
            text-align: center
            line-height: 3rem
            font-weight: bold
            letter-spacing: .1rem
        .search-input
            width: 100%
            padding: 0 .6rem
            box-sizing: border-box
            .input
                width: 100%
                height: 2rem
                border: none
                border-radius: 1rem
                outline: none
                text-align: center
                box-sizing: border-box
    .Friend-Content
        width:100%
        position: absolute
        top: 6rem
        left: 0
        right: 0
        bottom: 3.6rem
        overflow: hidden
        .letter
          width: 100%
          line-height: 1.7rem
          background: #e8e8e8
          color: #000
          text-indent: 1.2rem
          font-weight: bold
        .item
          display: block
          width: 100%
          height: 3.7rem
          box-sizing: border-box
          padding: .35rem 0 .35rem 1rem
          display: flex
          .head
            flex: 0 0 3rem
            width: 25%
            height: 3rem
            line-height: 3rem
            text-align: center
            background: green
            border-radius: .3rem
            margin-right: .5rem
          .name
            flex: 1
            width: 75%
            line-height: 3rem
            border-bottom: .01rem solid #e8e8e8
            padding-bottom: 3.4rem
    .search-content
      width: 100%
      position: absolute
      top: 6rem
      left: 0
      right: 0
      bottom: 3.5rem
      background: #fff
      z-index: 3000
      overflow: hidden
      .item
          display: block
          width: 100%
          height: 3.7rem
          box-sizing: border-box
          padding: .35rem 0 .35rem 1rem
          display: flex
          .head
            flex: 0 0 3rem
            width: 25%
            height: 3rem
            line-height: 3rem
            text-align: center
            background: green
            border-radius: .3rem
            margin-right: .5rem
          .name
            flex: 1
            width: 75%
            line-height: 3rem
            border-bottom: .01rem solid #e8e8e8
            padding-bottom: 3.4rem
      .nothing
        text-align: center
        margin-top: 5rem
        color: #ccc
</style>
