let getters = {
  count:(state)=>state.cartList.reduce((prev,next)=>prev+next.foodCount,0),
  totalPrice:(state)=>state.cartList.reduce((prev,next)=>prev+next.foodCount*next.foods_price,0),
};
export default getters;
