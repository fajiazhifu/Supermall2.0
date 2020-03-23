<template>
    <div class="tab-control">
        <div class="tab-item"
             v-for="(item,index) in title"
             :class="{active:index === currentIndex}" :key="index" @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #ffffff;
    line-height: 40px;
    height: 40px;
    padding:5px;
    }
    .tab-item{
        flex: 1;
    }
    .active
    {
        color: var(--color-high-text);

    }
    .active span
    {
        padding: 5px;
        border-bottom: 3px solid var(--color-high-text);
    }
</style>