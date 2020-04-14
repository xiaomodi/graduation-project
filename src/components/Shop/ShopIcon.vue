<template>
    <div class="shop-Icon-wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for='(item, index) in pages' :key='index'>
                <div class='icon-item' v-for='(iteminner, index) in item' :key='index'>
                    <div class='icon-img'>
                        <img class="Icon-Img-content" :src="iteminner.imgUrl" alt="">
                    </div>
                    <div class="Icon-desc">{{iteminner.desc}}</div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
</template>

<script>
export default {
  name: 'ShopIcon',
  props: {
    IconList: {
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
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
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
.shop-Icon-wrapper >>> .swiper-container
    overflow: visible
.shop-Icon-wrapper >>> .swiper-pagination
    position: absolute
    bottom: -.7rem
.shop-Icon-wrapper
        width: 100%
        height: 0
        padding-bottom: 50%
        overflow: hidden
        position: relative
        .icon-item
            float: left
            display: block
            width: 25%
            height: 25%
            text-align: center
            box-sizing: border-box
            padding-bottom: .5rem
            margin-bottom: .3rem
            .icon-img
                .Icon-Img-content
                    width: 50%
                    height: 50%
                    text-align: center
            .Icon-desc
                font-size: .8rem
                line-height: 1.1rem
</style>
