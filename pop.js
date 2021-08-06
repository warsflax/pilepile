// var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
var overlay1 = document.getElementById('overlayo');
// btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}
function openMoadlo() {
    overlay1.style.display='block';
    }
var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
    overlay1.style.display='none';
    }
