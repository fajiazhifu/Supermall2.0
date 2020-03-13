<template>
    <div>
    <nar-bar class="navbar"><div slot="center">购物街</div></nar-bar>
    <swiper>
       <swiper-item v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
       </swiper-item>
    </swiper>
    </div>
</template>

<script>
    import NarBar from "../../components/common/navbar/NavBar";
    import Swiper from "../../components/common/swiper/Swiper";
    import SwiperItem from "../../components/common/swiper/SwiperItem";

    import {getHomeMultidata} from "../../network/home";


    export default {
      name: "Home",
      components: {Swiper, NarBar,SwiperItem},
      data(){
        return{
            banner:[],
            recommends:[]
        }
      },
      created() {
        getHomeMultidata().then(res =>{
           console.log(res);
          this.banner = res.data.banner.list;
          console.log(this.banner);
          this.recommends = res.data.recommend.list;            //请求轮播图推荐数据
      })
     }
    }
</script>

<style scoped>
    .navbar
    {
        background-color: var(--color-tint);
        color: white;
    }
</style>