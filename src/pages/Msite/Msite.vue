<template>
    <div class="msite">
      <HeaderTop class="header-top" :title="address.name">
        <router-link class="header-search" slot="left" to="/search">
          <i class="iconfont icon-sousuo"/>
        </router-link>
        <router-link class="header-login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
          <span class="header-login-text" v-if="!userInfo._id">
            登录|注册
          </span>
          <span class="header-login-text" v-else>
            <i class="iconfont icon-person"></i>
          </span>
        </router-link>
      </HeaderTop>
      <div class="msite-content">
        <!--首页导航-->
        <nav class="msite-nav">
          <!--轮播-->
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else/>
        </nav>
        <!--商家列表-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList/>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted () {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address', 'categorys', 'userInfo']),

      categorysArr () {
        const {categorys} = this
        const arr = []
        let minArr = []
        categorys.forEach(c => {
          if (minArr.length === 8) {
            minArr = []
          }
          if (minArr.length===0) {
            arr.push(minArr)
          }
          minArr.push(c)
        })
        return arr
      }
    },
    watch: {
      categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
        // 使用setTimeout可以实现效果, 但不是太好
        /*setTimeout(() => {
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }, 100)*/

        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })

        })
      }
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .header-top
      .header-search
        position absolute
        left 15px
        top 50%
        width 20%
        height 50%
        transform translateY(-50%)
        .iconfont
          font-size 25px
          color #fff
      .header-login
        position absolute
        right  15px
        top 50%
        transform translateY(-50%)
        font-size 14px
        color #fff
        .header-login-text
          color #fff
    .msite-content
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
      overflow auto
      .msite-nav
        bottom-border-1px(#e4e4e4)
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              flex-wrap wrap
              justify-content center
              align-items flex-start
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
          padding 10px 10px 0
          .shop_icon
            margin-left 5px
            color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px
</style>
