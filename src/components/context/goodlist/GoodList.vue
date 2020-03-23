<template>
    <div class="good-item">
        <good-list-item v-for="item in goods" :goods-item="item"/>
    </div>


</template>

<script>
    import GoodListItem from "./GoodListItem";
  export default {
    name: "GoodList",
    components:{
      GoodListItem
    },
    props:{
      goods:{
      type:Array,
      default(){
        return []
      }
      }
    }
  }
</script>

<style scoped>
.good-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>