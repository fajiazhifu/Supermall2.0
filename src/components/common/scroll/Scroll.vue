<template>
    <div ref="wrapper" >
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null}
    },
    mounted() {
      //初始化BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
      })

      //监听位置滚动
      this.scroll.on('scroll',(position) =>{
        this.$emit('scroll',position)
        })

        //下拉加载更多
      if(this.pullUpLoad){
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
      }
    },
    methods:{
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>