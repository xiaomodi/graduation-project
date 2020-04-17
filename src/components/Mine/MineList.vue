<template>
    <div class='MineList-Wrapper'>
      <div class="MineListConte">
        <swiper ref="mySwiper">
        <swiper-slide>
          <div class="MineListItem" v-for='(item, index) in 10' :key='index'>
            <div class="Item-Img"><img src="https://gw.alicdn.com/tfs/TB1h1MnVCrqK1RjSZK9XXXyypXa-183-144.png?getAvatar=1" alt=""></div>
            <div class="Item-desc">天猫超市</div>
          </div>
        </swiper-slide>
        <swiper-slide><div class="MineListItem" v-for='(item, index) in 10' :key='index'>1</div></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
      {{list}}
    </div>
</template>

<script>
export default {
  name: 'MineList',
  props: {
    Mine: {
      type: [Array, Object]
    }
  },
  computed: {
    list () {
      console.log(this.Mine.MineIcon)
      // const result = []
      return 1
    }
  }
}
</script>

<style lang='stylus' scoped>
.MineList-Wrapper
  width: 100%
  background: #fff
  border-radius: .6rem
  margin-top: .7rem
  padding: .6rem .7rem
  box-sizing: border-box
  .MineListConte
    width: 100%
    overflow: hidden
    background: yellow
    .MineListItem
      width: 20%
      height: 0
      padding-bottom: 20%
      float: left
      display: block
      text-align: center
      background: green
      margin-bottom: .3rem
      .Item-Img img
        width:  88%
        height: 88%
      .Item-desc
        font-size: .7rem
</style>
