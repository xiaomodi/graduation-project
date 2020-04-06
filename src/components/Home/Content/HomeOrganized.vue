<template>
  <div class='HomeOrganuzed-Wrapper' ref='ContentWrapper'>
    <ul>
      <li>homecontent</li>
      <li>homecontent</li>
      <li>homecontent</li>
      <li>homecontent</li>
      <li>homecontent</li>
      <li>homecontent</li>
      <li>homecontent</li>
      <li>homecontent</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'HomeOrganuzed',
  methods: {
    getScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ContentWrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.getScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
.HomeOrganuzed-Wrapper
  padding: 0 .6rem
  box-sizing: border-box
  position: absolute
  top: 3rem
  left: 0
  right: 0
  bottom: 3rem
  background: yellow
  overflow: hidden
</style>
