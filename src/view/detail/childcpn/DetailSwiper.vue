<template>
    <swiper v-if="topImages.length"><!--轮播图-->
        <swiper-item  class="item" v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="" >
        </swiper-item>
    </swiper>
</template>

<script>
 import {Swiper,SwiperItem} from "../../../components/common/swiper"
  export default {
    name: "DetailSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
    .item {
        text-align: center;
        height: 300px;
    }
</style>