$('#userForm').on('submit',function(){
  // alert('123');
  // 获取表单数据并将内容格式转化为参数字符串
  var formData = $(this).serialize();
  // serialize  第一点  保证form 表单每一个 input 都有一个name  属性

  $.ajax({
    type:'post',//get或post
    url:'/users',//请求的地址
    data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    success:function(result){//成功的回调函数
      location.reload();//刷新页面
    },
    error:function(err){
      alert('用户创建失败')
    }
  })
  // 阻止表单的默认提交行为
  return false;
})

// 上传头像
$('#avatar').on('change',function(){
    // 选择用户选择 的文件
    // this.file[0]
    var formData = new FormData();
    formData.append('avatar', this.files[0])
    $.ajax({
      type:'post',//get或post
      url:'/upload',//请求的地址
      data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
      processData:false,//告诉 ajax 不要解析formData
      contentType:false,//
      success:function(result){//成功的回调函数
        $('#preview').attr('src',result[0].avatar)
        $('#hiddenImg').val(result[0].avatar)
      }
    })
})