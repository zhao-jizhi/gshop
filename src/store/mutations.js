/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS,
  CLEAR_SEARCH_SHOPS
}from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  },
  [RECEIVE_SHOP_GOODS](state, {goods}){
    state.goods = goods
  },
  [RECEIVE_SHOP_RATINGS](state, {ratings}){
    state.ratings = ratings
  },
  [RECEIVE_SHOP_INFO](state, {info}){
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state, {food}){
    if(!food.count){
      // food.count = 1 //新增属性没有数据绑定
      Vue.set(food, 'count', 1)
      state.shopCart.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}){
    if(food.count){
      food.count--
      if(food.count === 0) {
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    state.shopCart.forEach(food => food.count = 0)
    state.shopCart = []
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}) {
    state.searchShops = searchShops
  }
}
