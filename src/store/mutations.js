import * as Types from './mutations-type.js';
const mutations = {
  //添加购物车(添加的商品)
  [Types.ADD_CART](state,food){
    let product = state.cartList.find(item=> item.foods_id === food.foods_id);
    if (product){
      product.foodCount += 1;
      state.cartList = [...state.cartList]
    }else {
      food.foodCount = 1;
      state.cartList = [...state.cartList,food]
    }
  },
  //删除购物车(要求传入id)
  [Types.REMOVE_CART](state,id){
    state.cartList = state.cartList.filter(item=>item.foods_id!=id);
  },
  //更改商品数量({id，1/-1})
  [Types.CHANGE_COUNT](state,{id,count}){
    let cartList = [...state.cartList]
    let car= cartList.find(item=>item.foods_id ==id);
    if(car.foodCount+count>0){
      car.foodCount += count;
      state.cartList = cartList;
    }
  },
  //清空购物车()
  [Types.CLEAR_CART](state,id){
    state.cartList = []
  },
};

export default mutations;
