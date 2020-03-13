<template>
  <div id="app">
    <tar-bar>
        <tar-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-name">首页</div>
    </tar-bar-item>
        <tar-bar-item path="/cart">
            <img slot="item-icon" src="./assets/img/tabbar/cart.svg">
            <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.svg">
            <div slot="item-name">购物车</div>
        </tar-bar-item>
        <tar-bar-item path="/category">
            <img slot="item-icon" src="./assets/img/tabbar/category.svg">
            <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
            <div slot="item-name">分类</div>
        </tar-bar-item>
        <tar-bar-item path="/profile">
            <img slot="item-icon" src="./assets/img/tabbar/profile.svg">
            <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
            <div slot="item-name">我的</div>
        </tar-bar-item>
    </tar-bar>
      <router-view></router-view>
  </div>
</template>

<script>
    import TarBar from "./components/common/tarbar/TarBar";
    import TarBarItem from "./components/common/tarbar/TarBarItem";
    export default {
      name: 'App',
      components: {
        TarBarItem,
        TarBar
      }
    }
</script>

<style>
    @import "./assets/css/body.css";
</style>
