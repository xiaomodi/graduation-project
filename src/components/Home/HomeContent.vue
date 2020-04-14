<template>
    <div class='HomeContent-Wrapper'>
       <div class="HomeHeader">
         <div class="homeheader-item" @click='handleClickHeaderItem(1)'><span class='item' :class='{active: 1 === $store.state.isactive}'>日历</span></div>
         <div class="homeheader-item" @click='handleClickHeaderItem(2)'><span class='item' :class='{active: 2 === $store.state.isactive}'>活动组织</span></div>
         <div class="homeheader-item" @click='handleClickHeaderItem(3)'><span class='item' :class='{active: 3 === $store.state.isactive}'>文章精选</span></div>
       </div>
       <div class="HomeContent">
         <div>
            <HomeDate v-if='1 === $store.state.isactive'/>
            <HomeOrganuzed v-if='2 === $store.state.isactive'/>
            <HomeArticale v-if='3 === $store.state.isactive'/>
         </div>
       </div>
    </div>
</template>

<script>
import HomeDate from './Content/HomeDate'
import HomeArticale from './Content/HomeArticle'
import HomeOrganuzed from './Content/HomeOrganized'

export default {
  name: 'HomeContent',
  components: {
    HomeDate,
    HomeArticale,
    HomeOrganuzed
  },
  methods: {
    handleClickHeaderItem (num) {
      this.$store.dispatch('changNumber', num)
    }
  },
  mounted () {
    console.log(this.$store.state.isactive)
  }
}
</script>

<style lang='stylus' scoped>

.HomeContent-Wrapper
  wodth: 100%
  box-sizing: border-box
  padding: .4rem .6rem
  .HomeHeader
    width: 100%
    line-height: 2rem
    display: flex
    margin-bottom: .4rem
    .homeheader-item
      flex: 1
      text-align: center
      .item
        padding-bottom: .4rem
        &.active
          border-bottom: .25rem solid #e1251b
  .HomeContent
    width: 100%
</style>
