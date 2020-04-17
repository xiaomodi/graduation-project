<template>
    <div class='MineContent-Wrapper'>
        <div class="Mine-Header">
            <div class="head">
                <img class='head-img' src="http://p3.pstatp.com/large/6ed70006004c249ae162" alt="">
                <!-- <div class="HeadLogin">点击登录</div> -->
                <router-link class='HeadLogin' tag='div' to='/Login'>点击登录</router-link>
            </div>
        </div>
        <div class="MineNav">
            <div class="favourite">
                <div><span class='iconfont'>&#xe6a4;</span></div>
                <div>收藏夹</div>
            </div>
            <div class="shop">
                <div><span class='iconfont'>&#xe6a4;</span></div>
                <div>商铺</div>
            </div>
            <div class="footprint">
                <div><span class='iconfont'>&#xe6a4;</span></div>
                <div>足迹</div>
            </div>
            <div class="packrt">
                <div><span class='iconfont'>&#xe6a4;</span></div>
                <div>红包</div>
            </div>
        </div>
        <div class="order">
            <div class="order-top">
                <span class='order-top-left'>我的订单</span>
                <span class='order-top-right'>查看全部订单</span>
            </div>
            <div class="order-bottom">
                <div class="pay">
                    <div><span class='iconfont'>&#xe6a4;</span></div>
                    <div>待付款</div>
                </div>
                <div class="dispatched">
                    <div><span class='iconfont'>&#xe6a4;</span></div>
                    <div>待发货</div>
                </div>
                <div class="Waiting">
                    <div><span class='iconfont'>&#xe6a4;</span></div>
                    <div>待收货</div>
                </div>
                <div class="appraise">
                    <div><span class='iconfont'>&#xe6a4;</span></div>
                    <div>评价</div>
                </div>
                <div class="refund">
                    <div><span class='iconfont'>&#xe6a4;</span></div>
                    <div>退款/售后</div>
                </div>
            </div>
        </div>
        <MineList :Mine='Mine'/>
    </div>
</template>

<script>
import axios from 'axios'
import MineList from './MineList'
export default {
  name: 'MineContent',
  components: {
    MineList
  },
  data () {
    return {
      Mine: []
    }
  },
  mounted () {
    axios.get('/api/Mine.json').then(res => {
      if (res.data.ret === true) {
        const Mine = res.data.Mine
        this.Mine = Mine
        console.log(this.Mine)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang='stylus' scoped>
.MineContent-Wrapper
    width: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 3.5rem
    overflow: hidden
    background: #ededed
    box-sizing: border-box
    padding: 0 .6rem
    .Mine-Header
        .head
            width: 100%
            font-size: 0
            overflow: hidden
            padding: 4.5rem 2rem .6rem 2.2rem
            box-sizing: border-box
            .head-img
                width: 18%
                height: 18%
                border-radius: 100%
                float: left
                display: block
                margin-right: .8rem
            .HeadLogin
                float: left
                display: block
                margin-top: .7rem
                font-size: 1.2rem
                font-weight: bold
                letter-spacing: .1rem
    .MineNav
        width: 100%
        display: flex
        justify-content: space-around
        font-size: .9rem
        .favourite
            text-align: center
            .iconfont
                display: block
                font-size: 1.5rem
                margin-bottom: .3rem
        .shop
            text-align: center
            .iconfont
                display: block
                font-size: 1.5rem
                margin-bottom: .3rem
        .footprint
            text-align: center
            .iconfont
                display: block
                font-size: 1.5rem
                margin-bottom: .3rem
        .packrt
            text-align: center
            .iconfont
                display: block
                font-size: 1.5rem
                margin-bottom: .3rem
    .order
        width: 100%
        background: #fff
        border-radius: .6rem
        margin-top: .7rem
        .order-top
            width: 100%
            line-height: 1.8rem
            font-size: .8rem
            padding: 0.1rem .7rem
            box-sizing: border-box
            overflow: hidden
            border-bottom: .01rem solid #ededed
            .order-top-left
                float: left
                display: black
            .order-top-right
                float: right
                display: block
        .order-bottom
            padding: .9rem .6rem .7rem .6rem
            display: flex
            justify-content: space-around
            font-size: .8rem
            .pay
                text-align: center
                .iconfont
                    display: block
                    font-size: 1.5rem
                    margin-bottom: .3rem
            .dispatched
                text-align: center
                .iconfont
                    display: block
                    font-size: 1.5rem
                    margin-bottom: .3rem
            .Waiting
                text-align: center
                .iconfont
                    display: block
                    font-size: 1.5rem
                    margin-bottom: .3rem
            .appraise
                text-align: center
                .iconfont
                    display: block
                    font-size: 1.5rem
                    margin-bottom: .3rem
            .refund
                text-align: center
                .iconfont
                    display: block
                    font-size: 1.5rem
                    margin-bottom: .3rem
</style>
