
$(document).ready(function(){
  $("#icon_header").click(function(){  // khi click vào #icon thì no sẽ xổ cái menu ra kiểu toggle 
    $("#site").toggleClass('open-respon-menu');
    $("#icon_header").toggleClass('fa-navicon fa-times');
    return false;
  });
  $(window).resize(function(){    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if($(document).width() >= 768){  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
       $("#site #respon_menu").removeClass('open-respon-menu');
       $('#icon_header').removeClass('fa-times').addClass('fa-navicon')
      } 
 });
});
  