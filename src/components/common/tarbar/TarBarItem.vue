<template>
    <div id="tab-bar-item" @click="itemClick" >
        <div v-show="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
        <div v-show="isActive" class="item-active-icon"><slot name="item-icon-active"></slot></div>
        <div :style="isfontColor" class="item-text"><slot name="item-name"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TarBarItem",
    props:{
      path:String
    },
    computed:
      {
        isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        },
        isfontColor() {
          return this.isActive ? {color: 'red'} : {}
        }
      },

    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

    #tab-bar-item {
        flex: 1;

    }


    .item-icon img, .item-active-icon img {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }

    .item-text {
        font-size: 12px;
        margin-top: 3px;
        color: #333;
    }
</style>