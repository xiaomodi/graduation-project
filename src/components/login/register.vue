<template>
    <div class='register-wrapper'>
        <div class="Register-Header">
            <div class="title-top">手机号注册侧</div>
            <div class="title-footer">亲，欢迎注册淘宝账号</div>
        </div>
        <div class="Input-Content">
            <input type="text">
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang='stylus' scoped>
.register-wrapper
    width: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background: yellow
    z-index: 5000
    .Register-Header
        width: 100%
        border: .01rem solid black
        padding:  .4rem 1.9rem
        box-sizing: border-box
        margin-top: 3rem
        .title-top
            font-size: 1.6rem
            margin-bottom: .6rem
        .title-footer
            color #999
    .Input-Content
        width: 100%
        padding: .4rem 1.9rem
        box-sizing: border-box
        text-align: center
</style>
