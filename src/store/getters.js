/*
包含多个基于state的getter计算属性对象
 */
export default {
  totalPrice (state) {
    return state.shopCart.reduce((pretotal, food) => pretotal + food.price*food.count, 0)
  },
  positiveRatings (state) {
    return state.ratings.reduce ((pretotal, rating) => pretotal + (rating.rateType===0 ? 1 : 0), 0)
  }
}
