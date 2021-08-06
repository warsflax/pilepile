function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    
  }
  function togglePopup2(){
    document.getElementById("popup-1").classList.toggle("active",false);
    
    document.getElementById("popup-2").classList.toggle("active");
  }
  function togglePopup3(){
    document.getElementById("popup-2").classList.toggle("active",false);
    document.getElementById("popup-3").classList.toggle("active");
  }