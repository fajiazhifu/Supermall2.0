<template>
    <div id="Home">
        <nar-bar class="navbar"><div slot="center">购物街</div></nar-bar>
        <tab-control class="tab-control-top" :title="['流行','新款','精选']" @tabClick="tabClick" v-show="isShowTabControl"/>
        <scroll class="content" ref="scroll"
                :probe-type="3"
                @scroll="getPosition"
                :pull-up-load="true"
                @pullingUp="landMore">
            <home-swiper :banner="banner" @swiperImageload="swiperImageload"/>
            <home-recommend :recommends="recommends"/>
            <feture-recommend-view/>
            <tab-control :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
            <GoodList :goods="good[currentType].list"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import NarBar from "../../components/common/navbar/NavBar";
    import HomeSwiper from "./childcpn/HomeSwiper";
    import HomeRecommend from "./childcpn/HomeRecommend";
    import FetureRecommendView from "./childcpn/FetureRecommendView";
    import TabControl from "../../components/context/tabcontrol/TabControl";
    import GoodList from "../../components/context/goodlist/GoodList";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/common/BackTop/BackTop"
    import {getHomeMultidata,getHomeData} from "../../network/home";

    export default {
      name: "Home",
      components: {
        HomeSwiper,
        HomeRecommend,
        NarBar,
        FetureRecommendView,
        TabControl,
        GoodList,
        BackTop,
        Scroll}
        ,
      data(){
        return{
            banner:[],
            recommends:[],
            good:{
              'pop':{page:0 , list:[]},
              'new':{page:0 , list:[]},
              'sell':{page:0 , list:[]}
          },
          currentType:'pop',
          isShowBackTop:false,
          tabOffsetTop:0,
          isShowTabControl:false,
          saveY:0
        }
      },
      created() {
        this.getHomeMultidata();  //请求轮播图推荐数据
        this.getHomeData('pop')   //请求货物数据
        this.getHomeData('new')
        this.getHomeData('sell')
      },

      mounted(){
        //防抖函数
        const refresh = this.debounce(this.$refs.scroll.refresh,300)
        this.$bus.$on('itemImgLoad',() => {
            //加载图片资源确定BScroll高度
            refresh()
        })

      },
     methods:{
       swiperImageload()
       {
         this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
       },

        //防抖函数
       debounce(func,delay){
          let timer = null;
          return function (...args) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=> {
            func.apply(this,args)
            },delay)
          }
        },
       tabClick(index){
         switch (index) {
           case 0: this.currentType = 'pop'
             break;
           case 1: this.currentType = 'new'
             break;
           case 2: this.currentType = 'sell'
             break;
         }
        },
       //回到顶部按钮
       backClick(){
         this.$refs.scroll.scrollTo(0, -1500, 300);
       },
       getPosition(positon) {
         //判断显示返回按钮
         if (-(positon.y) > 1000) {
           this.isShowBackTop = true;
         }
         if (-(positon.y) < 1000) {
           this.isShowBackTop = false;
         }

         //判断tabControl是否吸顶
         this.isShowTabControl = (-positon.y) > this.tabOffsetTop
       },
       // 下拉加载更多
       landMore(){
         this.getHomeData(this.currentType)
         this.$refs.scroll.scroll.refresh()
       },

       getHomeMultidata(){
         getHomeMultidata().then(res =>{
         // console.log(res);
         this.banner = res.data.banner.list;
         this.recommends = res.data.recommend.list;
       })
       },
       getHomeData(type){
         const page = this.good[type].page + 1;
         getHomeData(type,page).then(res =>{
           this.good[type].list.push(...res.data.list);
           this.good[type].page += 1;
           this.$refs.scroll.scroll.finishPullUp();
         })
       }
     }
    }
</script>

<style scoped>
    #Home{

        height: 100vh;
        position: relative;
    }
    .navbar
    {
        position: fixed;
        right: 0px;
        left: 0px;
        top: 0px;
        z-index: 10;
        background-color: var(--color-tint);
        color: white;
    }
    .tab-control-top{
        position: relative;
        top:44px;
        z-index:9
    }

    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0px;
        left: 0px;
    }
</style>