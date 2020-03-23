<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
        recommends:{
          type:Array,
          default(){
            return []
          }
        }
      }
  }
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 15px 0 30px;
        font-size: 12px;
    }
    .recommend-item{
        flex: 1;
    }

    .recommend-item img {
        height: 80px;
        width: 80px;
    }
</style>