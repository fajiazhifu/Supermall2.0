<template>
    <swiper><!--轮播图-->
        <swiper-item v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="swiperImageload">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import SwiperItem from "../../../components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      swiperImageload(){
        this.$emit('swiperImageload')
      }
    }
  }
</script>

<style scoped>

</style>