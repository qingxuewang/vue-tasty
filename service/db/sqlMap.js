var sqlMap = {
    message:{
      select_message:'select * from t_message',
      insertOne:'insert into t_message (message_name,message_title,message_content)  values (?,?,?)',
    },
    category:{
      select_category:'select * from t_catelog',
    },
    food:{
      select_food:'select * from t_foods',
    },
    member:{
      selectOne:'select * from t_user where user_name =',
      insertOne:'insert into t_user(user_name,user_pw,user_sex,user_birth,user_tel,user_address) value (?,?,?,?,?,null)',
      updateOne:'update t_user set '
    },
  notice:{
    select_notice:'select * from t_notice',
  },
  order:{
    select_order:'select * from t_order where order_user=',
    insertOne:'insert into t_order (order_number,order_name,order_address,order_tel,order_price,order_context,order_user,order_state,order_pay)  values (?,?,?,?,?,?,?,?,?)',
    deleteOne:'delete from t_order where order_id=',
    updateOne:'update t_order set order_pay = "1" where order_number = ',
  }
}

module.exports = sqlMap;

