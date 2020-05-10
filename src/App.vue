<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/footer/footer'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
</style>
