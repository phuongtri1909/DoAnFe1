window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarr").style.top = "0";
document.getElementById("navbarr").style.padding = "15px 0"
  } else {
    document.getElementById("navbarr").style.top = "-100px";
    
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if($(this).scrollTop()){
      $('#backtop').fadeIn();
    }
    else{
      $('#backtop').fadeOut();
    }
  });
$("#backtop").click(function () {
  $('html,body').animate({
    scrollTop: 0
  },500);
});
});

document.querySelectorAll('.img-main5 img').forEach(Image =>{
  Image.onclick = () =>{
document.querySelector('.full-img').style.display = 'block';
document.querySelector('.full-img img').src = Image.getAttribute('src');
  }
});
document.querySelector('.full-img span').onclick = () =>{
  document.querySelector('.full-img').style.display = 'none';
}