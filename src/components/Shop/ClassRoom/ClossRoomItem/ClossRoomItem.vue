<template>
    <div class='CLassRoomItem-Wrapper'>
        <div class="Item-Head">
            <img class='item-pic' src="http://img1.sycdn.imooc.com/szimg/5d78c03b08bac0da06000338-358-201.jpg" alt="">
        </div>
        <div class="Item-Content" ref='ItemContent'>
            <ul>
                <li class='Item-list' v-for='(item, index) of 10' :key='index'>
                    <div class="title">title</div>
                    <ul>
                        <li class='item' v-for='iteminner in 3' :key='iteminner.id'>
                            1111111
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="Item-footer">
            footer
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CLassRoomItem',
  mounted () {
    this.$nextTick(() => {
      if (!this.ItemScroll) {
        this.ItemScroll = new BScroll(this.$refs.ItemContent)
      }
    })
  }
}
</script>

<style lang='stylus' scoped>
.CLassRoomItem-Wrapper
    width: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #fff
    z-index: 5000
    .Item-Head
        .item-pic
            width: 100%
            height: 13rem
    .Item-Content
        width:100%
        position: absolute
        top: 13rem
        left: 0
        right: 0
        bottom: 3.6rem
        overflow: hidden
        .title
          width: 100%
          line-height: 1.7rem
          background: #e8e8e8
          color: #000
          text-indent: 1.2rem
          font-weight: bold
        .item
          display: block
          width: 100%
          height: 1.5rem
          box-sizing: border-box
          padding: .35rem 0 .35rem 1rem
          display: flex
          color: #7b7b7d
    .Item-footer
        wodth: 100%
        height: 3.5rem
        border: .01rem solid #dadada
        position: absolute
        left: 0
        right: 0
        bottom: 0
        background: yellow
</style>
