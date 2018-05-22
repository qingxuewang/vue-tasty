var $dbConfig = require('../db/DBConfig.js');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap.js');

//使用连接池链接数据库

var pool = mysql.createPool($dbConfig.mysql);

/**
 * 对query执行的结果自定义返回JSON结果
 */
function doReturn(res, results) {
  if(typeof results === 'undefined') {
    res.send('err');
  } else {
    res.send(results);
  }
};
//会员登陆接口
router.post('/login', (req, res) => {
  var sql = $sql.member.selectOne;
  var params = req.body;
  sql+="'"+params.user_name+"'";
  pool.query(sql, function(error, results) {
    if (error) {
      console.log(error);
    }
    if (results[0] === undefined) {
      res.send('-1');  //查询不出username，data 返回-1
      console.log('用户名不存在');
    }else{
      if(results[0].user_pw === params.user_pw){
        doReturn(res, results);
      }else{
        res.send('0');
        console.log('用户名存在，密码错误');
      }
    }
  });
});
//会员注册接口
router.post('/register',(req,res)=>{
  pool.query($sql.member.insertOne,[req.body.user_name,req.body.user_pw,req.body.user_sex,req.body.user_birth,req.body.user_tel],function(error,results){
    if(error){
      res.send("注册失败：", error);
    }else{
      res.send('1');
    }
  })
});

//菜品查询接口
router.get('/foods',(req,res)=>{
  pool.query($sql.food.select_food,function (error,results) {
    if(error){
      res.send("查询失败：", error);
    }else {
      doReturn(res,results);
    }
  })
});

//留言板接口
router.get('/messages',(req,res)=>{
  var sql = $sql.message.select_message;
  pool.query(sql,function(error,results){
    if(error){
      res.send("查询失败：", error)
    }else{
      doReturn(res,results);
    }
  });
});
//留言增加接口
router.post('/messages',(req,res)=>{
  var sql = $sql.message.insertOne;
  var params = req.body;
  console.log(sql);
  console.log(params);
  pool.query(sql, [params.message_name,params.message_title,params.message_content],function (error,results) {
    if(error){
      res.send("插入失败：", error)
    }else{
      doReturn(res,results);
    }
  })
});
//个人信息修改接口
router.post('/personal',(req,res)=>{
  var sql = $sql.member.updateOne;
  var params = req.body;
  sql +=`user_sex = '${params.sex}',user_birth='${params.birth}',user_tel='${params.phone}',user_address='${params.address}' where user_name = '${params.name}'`;
  pool.query(sql,function (error,results) {
    if(error){
      res.send("更新失败：", error)
    }else{
      res.send('1')
    }
  })
});
//个人信息查询接口
router.post('/initdata',(req,res)=>{
  var sql = $sql.member.selectOne;
  var params = req.body;
  sql +=`'${params.name}'`;
  pool.query(sql,function (error,results) {
    if(error){
      res.send("查询失败：", error)
    }else{
      doReturn(res,results);
    }
  })
});
// 修改密码接口
router.post('/modifyPassword',(req,res)=>{
  let name =req.body.name;
  let pass =req.body.pass;
  var sql = $sql.member.member;
  sql += `user_pw = '${pass}' where user_name = '${name}'`;
  pool.query(sql,function(error,results){
    if(error){
      res.send("查询失败：", error);
    }else{
      res.send('1');
    }
  })
});
//公告查询接口
router.get('/notice',(req,res)=>{
  pool.query($sql.notice.select_notice,function (error,results) {
    if(error){
      res.send("查询失败：", error);
    }else {
      doReturn(res,results);
    }
  })
});
//订单查询接口
router.get('/order',(req,res)=>{
  var sql = $sql.order.select_order;
  sql += `'${req.query.order_user}'`;
  pool.query(sql,function (error,results) {
    if(error){
      res.send("查询失败：", error);
    }else {
      doReturn(res,results);
    }
  })
});
//添加订单
router.post('/order',(req,res)=>{
  var params = req.body;
  pool.query($sql.order.insertOne,[params.order_number,params.order_name,params.order_address,params.order_tel,params.order_price,params.order_context,params.order_user,params.order_state,params.order_pay],function (error,results) {
    if(error){
      res.send("添加失败：", error);
    }else {
      res.send('1');
    }
  })
});
//订单删除接口
router.get('/deleteorder',(req,res)=>{
  var sql = $sql.order.deleteOne;
  sql += `'${req.query.order_id}'`;
  pool.query(sql,function(error,results){
    if(error){
      res.send("删除失败：", error);
    }else{
      res.send('1');
    }
  })
});
//订单支付接口
router.get('/pay',(req,res)=>{
  var sql = $sql.order.updateOne;
  sql += `'${req.query.order_number}'`;
  pool.query(sql,function(error,results){
    if(error){
      res.send("支付失败：", error);
    }else{
      res.send('1');
    }
  })
});
module.exports = router;
