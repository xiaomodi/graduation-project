<template>
    <div class='TrendsContent-Wrapper'>
        <div class="TrendsHeader">
            <span class='TrendsTit'>动态</span>
        </div>
        <div class="TrendsContent">
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>朋友圈</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>扫一扫</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>看一看</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>摇一摇</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>附近的人</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>购物</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
            <div class='TrendsItem'>
                <span class='iconfont icon1'>&#xe6a4;</span>
                <span class='desc'>小程序</span>
                <span class='iconfont icon2'>&#xe600;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TrendsContent'
}
</script>

<style lang='stylus' scoped>
.TrendsContent-Wrapper
    width: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 3.5rem
    background: #ededed
    .TrendsHeader
        width: 100%
        height: 4rem
        text-align: center
        padding-top: 1rem
        box-sizing: border-box
        .TrendsTit
            color: #000
            text-align: center
            line-height: 3rem
            font-weight: bold
            letter-spacing: 0.1rem
    .TrendsContent
        .TrendsItem
            width: 100%
            height: 3rem
            background: #ffffff
            padding: 1rem 1.2rem
            box-sizing: border-box
            margin-bottom: .5rem
            display: flex
            .icon1
                flex: 0 0 2.5rem
            .icon2
                flex: 0 0 4rem
                text-align: right
                padding-right: .5rem
                box-sizing: border-box
            .desc
                flex: 1
</style>
