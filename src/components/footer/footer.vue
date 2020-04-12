<template>
    <div class='footer-wrapper'>
        <router-link to='/' class='footer-item' :class="{active: isactive === 1}" tag='div' @click.native='handleFooterIcon(1)'>
            <div class='footer-item-content'>
                <div>
                    <svg class="icon" aria-hidden="true"  v-if='isactive != 1'>
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" v-if='isactive === 1'>
                        <use xlink:href="#icon-shouye-copy"></use>
                    </svg>
                </div>
                <div class='footer-text'>首页</div>
            </div>
        </router-link>
        <router-link to='/Friend' class='footer-item' :class="{active: isactive === 2}" tag='div' @click.native='handleFooterIcon(2)'>
            <div class='footer-item-content'>
                <div>
                    <svg class="icon icon2" aria-hidden="true">
                        <use xlink:href="#icon-icon_dw"></use>
                    </svg>
                </div>
                <div class='footer-text'>好友</div>
            </div>
        </router-link>
        <router-link to='/Trends' class='footer-item' :class="{active: isactive === 3}" tag='div' @click.native='handleFooterIcon(3)'>
            <div class='footer-item-content'>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dongtai1"></use>
                    </svg>
                </div>
                <div class='footer-text'>动态</div>
            </div>
        </router-link>
        <router-link to='/Shop' class='footer-item' :class="{active: isactive === 4}" tag='div' @click.native='handleFooterIcon(4)'>
            <div class='footer-item-content'>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dongtai2"></use>
                    </svg>
                </div>
                <div class='footer-text'>圈子</div>
            </div>
        </router-link>
        <router-link to='/Mine' class='footer-item' :class="{active: isactive === 5}" tag='div' @click.native='handleFooterIcon(5)'>
            <div class='footer-item-content'>
                <div>
                    <svg class="icon icon5" aria-hidden="true" v-if='isactive != 5'>
                        <use xlink:href="#icon-renwu"></use>
                    </svg>
                    <svg class="icon icon5" aria-hidden="true" v-if='isactive === 5'>
                        <use xlink:href="#icon-renwu-copy"></use>
                    </svg>
                </div>
                <div class='footer-text'>我的</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      isactive: 1
    }
  },
  methods: {
    handleFooterIcon (num) {
      this.isactive = num
    }
  }
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
        &.active
            color: $bgColor
        .footer-item-content
            height: 3.5rem
            text-align: center
            .icon
                font-size: 1.4rem
                text-align: center
                margin-bottom: .3rem
                &.icon1
                    color: red
                &.icon2
                    font-size: 1.5rem
                    margin-bottom: .2rem!important
                &.icon5
                    color: red
            .footer-text
                text-align: center
                font-size: .8rem
</style>
