<template>
    <div class='Letter-Wrapper'>
        <ul>
            <li class='letterlist'
                :class='{active: item === letter}'
                v-for='item in letters'
                :key='item'
                :ref='item'
                @click='handleClickLetter(item)'
                @touchstart='handleTouchStart'
                @touchmove.prevent='handleTouchMove'
                @touchend='handleTouchEnd'
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'FriendLetter',
  props: {
    friendlist: {
      type: Object
    }
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      letter: '',
      index: '',
      timmer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
    // console.log('startY:' + this.startY)
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.friendlist) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClickLetter (key) {
      this.letter = key
      this.$emit('change', key)
    },
    handleTouchStart (e) {
      this.touchstatus = true
    },
    handleTouchMove (e) { // 加入定时器 做一个函数节流  提高性能
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - this.startY) / 20)
          this.index = index
          this.letter = this.letters[index]
          //   console.log(this.letter)
          if (this.index < 0) {
            this.index = 0
            this.letter = this.letters[0]
          }
          if (this.index > this.letters.length) {
            this.index = this.letters.length
            this.letter = this.letters[this.letters.length - 1]
          }
          if (index > 0 || index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchstatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/stylus/bgColor.styl'
.Letter-Wrapper
    position: fixed
    top: 0
    right: 0.4rem
    bottom: 0
    z-index: 2000
    width: 1rem
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    .letterlist
        line-height: 1.3rem
        font-size: .9rem
        text-align: cneter
        &.active
            color: $bgColor
            font-weight: bold
</style>
