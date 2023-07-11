
window.onload=function(){alert('Bienvenido a esta pagina');}
window.onunload=function(){alert('Vuelva en otro momento');}

document.addEventListener('DOMContentLoaded', function() {
    var botonImprimir = document.getElementById('botonImprimir');
    
    botonImprimir.addEventListener('click', function() {
      window.print();
    });
  });
  
