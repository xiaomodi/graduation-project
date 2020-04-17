<template>
    <div class='register-wrapper'>
        <div class="Register-Header">
            <div class="title-top">手机号注册</div>
            <div class="title-footer">亲，欢迎注册淘宝账号</div>
        </div>
        <div class="Input-Content">
            <input class='phone' type="text" v-model='phone' placeholder="请输入手机号码">
            <input class='number' type="text" v-model='number' placeholder="请输入验证码">
            <router-link to='/Mine' tag='div' class="btn" @click='handleCLickBtn'>立即注册</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      phone: '',
      number: ''
    }
  },
  methods: {
    handleCLickBtn () {
      const data = {
        phone: this.phone,
        number: this.number
      }
      axios.post('/api/Mine.json', data).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/stylus/bgColor.styl'

.register-wrapper
    width: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    z-index: 5000
    background: #fff
    .Register-Header
        width: 100%
        padding:  .4rem 1.9rem
        box-sizing: border-box
        margin-top: 3rem
        margin-bottom: 3rem
        .title-top
            font-size: 2rem
            margin-bottom: .6rem
        .title-footer
            color #999
    .Input-Content
        width: 100%
        padding: .4rem 1.9rem
        box-sizing: border-box
        text-align: center
        .phone
            width: 100%
            height: 3rem
            border: 0
            outline: none
            border-bottom: .1rem solid #e1251b
            margin-bottom: .5rem
            color: #333
        .number
            width: 100%
            height: 3rem
            border: 0
            outline: none
            border-bottom: .1rem solid #e1251b
            margin-bottom: 1.5rem
            color: #333
    .btn
        width: 100%
        line-height: 2.2rem
        color: #fff
        border-radius: 1.2rem
        background: linear-gradient(left, #ff9000, #ff5000) no-repeat
        background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat
</style>
