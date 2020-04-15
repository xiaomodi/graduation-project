<template>
    <div class='ShopDetailContent-Wrapper'>
        <div class="active-wrapper">
            <div class="active-top">
                <div class="active">保障</div>
                <div class="active-content">100%正品，更快送达，免费取退</div>
                <div class="icons-wrapper"><span class='iconfont'>&#xe600;</span></div>
            </div>
            <div class='active-bottom'>
                <div class="active-bottom-content">假一赔四，免费取退，一键售后</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShopDetailContentEnsure'
}
</script>

<style lang='stylus' scoped>
@import '../../../../assets/stylus/ellipsis.styl'
.ShopDetailContent-Wrapper
    width: 100%
    background: #fff
    padding: .6rem .6rem
    box-sizing: border-box
    .address
        display: flex
        color: #959595
        .send
            flex: 0 0 4rem
            text-align: center
            font-size: .9rem
            line-height: 1.5rem
        .city-wrapper
            flex: 1
            line-height: 1.5rem
            text-align: center
            color: #262626
            font-size: .9rem
            font-weight: bold
            ellipsis()
            .iconfont
            .city
                margin-right: .6rem
        .sales
            line-height: 1.5rem
            flex: 0 0 5rem
            text-align: center
            font-size: .9rem
    .active-wrapper
        width: 100%
        .active-top
            display: flex
            font-size: .9rem
            .active
                font-size: .9rem
                flex: 0 0 4rem
                line-height: 1.5rem
                text-align: center
                color: #959595
            .active-content
                flex: 1
                color: #959595
                font-weight: bold
                line-height: 1.5rem
                padding-left: 1.1rem
                ellipsis()
            .icons-wrapper
                flex: 0 0 5rem
                padding: .3rem 1.2rem .3rem 0
                text-align: right
                box-sizing: border-box
        .active-bottom
            width: 100%
            display: flex
            font-size: .6rem
            .active-bottom-content
                flex: 1
                font-weight: bold
                line-height: 1.5rem
                padding-left: 5rem
                box-sizing: border-box
                ellipsis()
    .line
        width: 100%
        height: .6rem
        background: #f7f8fa
        border: .01rem solid #ebebeb
</style>
