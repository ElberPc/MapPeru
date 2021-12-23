let map = document.getElementById("PER");

map.addEventListener("click",(e)=>{
  var name = e.target.getAttribute("name")
  if(name != null){
  document.getElementById("titleCard").innerText=name
  }
})

