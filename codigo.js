var countdown = new Date()
countdown.setFullYear(2023, 05, 13);
countdown.setHours(00);
countdown.setMinutes(00);

function compararFechas(){
   var now = new Date();

   var distance = countdown - now;
   var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
   var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var segundos = Math.floor((distance % (1000 * 60)) / 1000);
  
   document.getElementById('day').innerText = dias;
   document.getElementById('hour').innerText = horas;
  document.getElementById('minute').innerText = minutos;
  document.getElementById('second').innerText = segundos;
}

setInterval(
   function() { compararFechas(); } , 1000
)

window.onload = function () {
   compararFechas();
};