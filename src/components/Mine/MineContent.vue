<template>
    <div class='MineContent-Wrapper'>
        <div class="Mine-Header">
            <div class="head">
                <img class='head-img' src="http://p1.pstatp.com/large/bc20000b91968707dab" alt="">
                <div class="HeadLogin">点击登录</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MineContent'
}
</script>

<style lang='stylus' scoped>
.MineContent-Wrapper
    width: 100%
    height: 0
    padding-bottom: 45%
    background: yellow
    .Mine-Header
        .head
            width: 100%
            height: 4rem
            overflow: hidden
            border: .01rem solid black
            .head-img
                width: 4rem
                height: 4rem
                border-radius: 100%
                float: left
                display: block
            .HeadLogin
                float: left
                display: block
                margin-top: 1rem
                border: .01rem solid black
</style>
