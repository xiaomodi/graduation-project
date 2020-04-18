<template>
    <div class='footer-wrapper'>
        <router-link to='/' class='footer-item' tag='div'>
            <div class='footer-item-content'>
                <div>
                    <span class='iconfont icon1'>&#xe60c;</span>
                </div>
                <div class='footer-text'>首页</div>
            </div>
        </router-link>
        <router-link to='/Friend' class='footer-item' tag='div'>
            <div class='footer-item-content'>
                <div>
                    <span class="iconfont">&#xe60b;</span>
                </div>
                <div class='footer-text'>好友</div>
            </div>
        </router-link>
        <router-link to='/Trends' class='footer-item' tag='div'>
            <div class='footer-item-content'>
                <div>
                    <span class="iconfont">&#xe630;</span>
                </div>
                <div class='footer-text'>动态</div>
            </div>
        </router-link>
        <router-link to='/Shop' class='footer-item' tag='div'>
            <div class='footer-item-content'>
                <div>
                    <span class="iconfont">&#xe6a4;</span>
                </div>
                <div class='footer-text'>圈子</div>
            </div>
        </router-link>
        <router-link to='/Mine' class='footer-item' tag='div'>
            <div class='footer-item-content'>
                <div>
                    <span class="iconfont">&#xe60e;</span>
                </div>
                <div class='footer-text'>我的</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/bgColor.styl'
.footer-wrapper
    width: 100%
    height: 3.5rem
    position: fixed
    left: 0
    right: 0
    bottom: 0
    display: flex
    text-align: center
    background: #fff
    box-shadow: 0 -1px 1px 1px #f7f7f7
    z-index: 10
    .footer-item
        flex: 1
        padding: .55rem 0
        box-sizing: border-box
        text-align: center
        color: #000
        &.router-link-exact-active
            color: $bgColor
        .footer-item-content
            height: 3.5rem
            text-align: center
            .iconfont
                font-size: 1.5rem
                text-align: center
                margin-bottom: .4rem
                &.icon1
                    display: block
                    font-size: 1.4rem
                    margin-bottom: .13rem
                &.icon2
                    font-size: 1.5rem
                    margin-bottom: .2rem!important
            .footer-text
                text-align: center
                font-size: .8rem
                line-height: 1.2rem
</style>
