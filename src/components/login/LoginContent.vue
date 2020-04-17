<template>
    <div class='Login-Wrapper'>
      <div class="Login-Content">
        <div class="Login-Head">
          <img class='Login-Head-Pic' src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt="">
        </div>
        <div class="Input-Content">
          <div class="Input">
            <input class='username' type="text" v-model='username' placeholder='手机号/邮箱/会员名'>
            <input class='password' type="text" v-model='password' placeholder='请输入登录密码'>
          </div>
          <div class="Login-type">
            <span>忘记密码</span>
            <span>免费注册</span>
          </div>
          <div class="btn-wrapper" @click='HandleClickBtn'>
            登录
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginContent',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    HandleClickBtn () {
      const data = {
        username: this.username,
        password: this.password
      }
      axios({
        method: 'post',
        url: '/api/login.json',
        data: data
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

// <style lang='stylus' scoped>
@import '../../assets/stylus/bgColor.styl'

.Login-Wrapper
  width: 100%
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  z-index: 50000
  background: #fff
  .Login-Content
    width: 100%
    padding: .3rem 1.2rem
    box-sizing: border-box
    text-align: center
    margin-top: 30%
    .Login-Head
      margin-bottom: 2.5rem
      .Login-Head-Pic
        width: 22%
        height: 22%
    .Input-Content
      width: 100%
      padding: .2rem .7rem
      box-sizing: border-box
      .Input
        .username
          width: 100%
          height: 3rem
          outline: none
          margin-bottom: .8rem
          font-size: 1rem
          color: #333
          border: 0
          border-bottom: .1rem solid $bgColor
        .password
          width: 100%
          height: 3rem
          outline: none
          border: 0
          border-bottom: .1rem solid $bgColor
          margin-bottom: 1rem
    .Login-type
      width: 100%
      display: flex
      justify-content: space-between
      line-height: 1.2rem
      margin-bottom: 1.4rem
      padding: 0 .2rem
      box-sizing: border-box
    .btn-wrapper
      width: 100%
      line-height: 2.5rem
      color: #fff
      border-radius: 1.2rem
      background: linear-gradient(left, #ff9000, #ff5000) no-repeat
      background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat
</style>
