function mialerta() {  
            alert("Esta es una web ilustrativa para mostrar el diseño, creada con WordPress por Andres Caballero. Vea la seccion de contacto o visite www.linkedin.com/in/andres-caballero-67829b24a para mas informacion ");
        } 

      function abrirNuevoTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
      }
      $('#open').click(function(){
        abrirNuevoTab('https://www.linkedin.com/in/andres-caballero-67829b24a/')
      })