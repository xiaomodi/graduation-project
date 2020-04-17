<template>
    <div class='MineList-Wrapper'>
      <div class="MineListConte">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for='(item, index) in list' :key='index'>
            <div class="MineListItem" v-for='(iteminner, index) in item' :key='index'>
              <div class="Item-Img"><img :src="iteminner.imgUrl" alt=""></div>
              <div class="Item-desc">{{iteminner.name}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MineList',
  props: {
    Mine: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    list () {
      const pages = []
      this.Mine.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
.MineList-Wrapper >>> .swiper-container
  overflow: visible
.MineList-Wrapper >>> .swiper-pagination-bullets
  position: absolute
  bottom: -1rem
.MineList-Wrapper
  width: 100%
  background: #fff
  border-radius: .6rem
  margin-top: .7rem
  padding: .6rem .7rem
  box-sizing: border-box
  .MineListConte
    width: 100%
    padding: 0 0 1rem 0
    overflow: hidden
    .MineListItem
      width: 20%
      height: 0
      padding-bottom: 20%
      float: left
      display: block
      text-align: center
      margin-bottom: .3rem
      .Item-Img img
        width:  88%
        height: 88%
      .Item-desc
        font-size: .7rem
</style>
