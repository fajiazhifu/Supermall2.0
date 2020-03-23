<template>
    <h2>购物车</h2>
</template>

<script>
    import {food} from "../../network/test";
  export default {
    name: "Cart",
    data(){
      return{
        b:'9ed966458a1542e3b2e163b4625fa13a',
        c:'泰山'
      }
    },
    created(){
      food(158836,this.b,this.c).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>