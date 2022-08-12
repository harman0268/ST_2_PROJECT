window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {
      document.getElementById("topBtn").style.display = "block";
  } else {
      document.getElementById("topBtn").style.display = "none";
  }
}


function goToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




function fetch(){
$.ajax({
  url:"https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11",
  type:"GET",
  dataType:"JSON",
  data:JSON.stringify({   }),
  success:function(data){
      $('.message').append("<li>"+JSON.stringify(data)+"</li>")
  }
});
}
  