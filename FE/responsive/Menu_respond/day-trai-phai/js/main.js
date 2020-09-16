
$(document).ready(function(){
  $("#icon").click(function(){  // khi click vào #icon thì no sẽ xổ cái menu ra kiểu toggle 
    $("#site").toggleClass('open-respon-menu');
    return false;
  });
  $(window).resize(function(){    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if($(document).width() >= 600){  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
       $("#respon_menu").css("display","none");  // thì cái menu kia nó sẽ hidenn nếu ko thì 
                                       // chúng ta xoay điện thoại thì cái menu kia ko mất mà lại mất cái nút :))
  
       $("#wrapper").css("left","0"); 
      }
 });
});
  