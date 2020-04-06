<template>
    <div class='HomeContent-Wrapper'>
       <div class="HomeHeader">
         <div class="homeheader-item" @click='handleClickHeaderItem(1)'><span class='item' :class='{active: isactive === 1}'>日历</span></div>
         <div class="homeheader-item" @click='handleClickHeaderItem(2)'><span class='item' :class='{active: isactive === 2}'>活动组织</span></div>
         <div class="homeheader-item" @click='handleClickHeaderItem(3)'><span class='item' :class='{active: isactive === 3}'>文章精选</span></div>
       </div>
       <div class="HomeContent">
         <div>
            <HomeDate v-if='isactive === 1'/>
            <HomeOrganuzed v-if='isactive === 2'/>
            <HomeArticale v-if='isactive === 3'/>
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
  data () {
    return {
      isactive: 1
    }
  },
  methods: {
    handleClickHeaderItem (num) {
      this.isactive = num
    }
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
          border-bottom: .1rem solid red
  .HomeContent
    width: 100%
</style>
