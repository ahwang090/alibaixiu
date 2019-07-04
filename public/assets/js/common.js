$('#logout').on('click',function(){
    var isConfirm = confirm('您真的要退出吗？');
    if(isConfirm){
    // 用户点击了确定
    $.ajax({
      type:'post',//get或post
      url:'/logout',//请求的地址
      success:function(result){//成功的回调函数
        location.href = 'login.html'
      },
      error:function(err){
        alert('网页出问题了')
      }
    })
  }
})  