var audio = document.querySelector(".audio");

if(musik) {
    audio.src = musik;
} 

function mulai(){ 
  audio.play(); 
  document.querySelector(".open").style = "opacity: 0;"; 
  document.querySelector(".body").style = "overflow-y: scroll;"; 
  setTimeout(function () { 
  document.querySelector(".open").style.display = "none"; 
    }, 1000); 
  } 

function wa(isi) { 
window.open("https://wa.me/+6285771263611/?text= terimakasih sudah diisi, jadi harapan ku..." + isi); 
} 

async function tanya() { 
    var { 
      value: kado 
    } = await swal.fire({ 
        title: "tulis harapan pian kedepannya setelah wisuda ingin bagaimana?", input: "text", showCancelButton: false, 
      }); 

  if (kado) {
     await swal.fire("text nya langsung tekirim ke wa ulun"); wa(kado); 
    } else { await swal.fire("kenapa kosong? harus ada harapan pokoknya"); tanya(); } } 
