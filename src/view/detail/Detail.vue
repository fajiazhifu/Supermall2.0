<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"/>
        <scroll class="content" ref="scroll">
            <detail-swiper :top-images="topImages" class="sw"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
            <detail-param-info :param-info="goodsParam"/>
        </scroll>

    </div>
</template>

<script>
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailNavBar from "./childcpn/DetailNavBar";
    import DetailSwiper from "./childcpn/DetailSwiper";
    import DetailBaseInfo from "./childcpn/DetailBaseInfo";
    import DetailGoodsInfo from "./childcpn/DetailGoodsInfo";
    import DetailParamInfo from "./childcpn/DetailParamInfo";
    import {getDetail,Goods,Shop,GoodsParam} from "../../network/detail";
    import DetailShopInfo from "./childcpn/DetailShopInfo";

    export default {
    name: "detail",
    components:{
      DetailParamInfo,
      DetailGoodsInfo,
      Scroll,
      DetailShopInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
    },
    data() {
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        goodsParam:{}
      }
    },
    created() {
      this.iid = this.$route.query.iid
      // this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data = res.result
        //获得轮播图数据
        this.topImages = data.itemInfo.topImages
        //获得商品数据
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //获得店铺信息
        this.shop = new Shop(data.shopInfo)
        //获得商品详情
        this.detailInfo = data.detailInfo
        //获得商品参数
        this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      })
    },

      methods:{
        imgLoad(){
          console.log("aaaa")
          this.$refs.scroll.scroll.refresh()
        }
      }


    }
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background-color:#ffffff;
        height: 100vh;
    }
    .content{
        height: calc(100% - 44px);
    }

</style>