<template>
    <nav-bar class="detail-nav">
        <img slot="left" src="~assets/img/common/back.svg" @click="backClick" >
        <div slot="center" class="title">
            <span class="title-item"
                  v-for="(item,index) in titleInfo"
                  :class="{'active':index === currentIndex}" :key="index" @click="itemClick(index)">
                {{item}}
            </span>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar},
   data(){
      return {
        titleInfo:["商品", "参数", "评论", "推荐"],
        currentIndex:0}
   },


    methods:{
      backClick() {
        this.$router.back()
      },
      itemClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
    .detail-nav {
        position: relative;
        background-color: #fff;
        font-size: 14px;
        width: 100%;
        z-index: 9;
    }

    .detail-nav img{
        margin-top: 12px;
    }
    .title {
        display: flex;
    }

    .title-item {
        flex: 1;
        padding: 0 10px;

    }

    .title-item.active {
        color: var(--color-high-text);
    }
</style>