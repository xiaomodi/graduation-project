<template>
    <div class='Shop-Wrapper'>
      <div class="Content-Wrapper">
          <div class="Content-Item" v-for='item in this.pageList' :key='item.id' @click='handleClickItem(item)'>
            <img class='Content-Item-Pic' :src="item.pic" alt="">
            <div class="title">
              {{item.name}}
            </div>
            <div class="item-footer">
              <span class='time'>{{item.online_time}}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShopRightContent',
  props: {
    pageList: {
      type: Array
    }
  }
}
</script>

<style lang='stylus' scoped>
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
</style>
