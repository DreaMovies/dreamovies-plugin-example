const onLoad = (data) => {
  var btn = document.createElement("button");
  btn.innerHTML = "Click Me";
  btn.addEventListener('click', function(){
    alert('Plugin button was clicked');
  });
  document.body.appendChild(btn);  
}
module.exports = { onLoad }
