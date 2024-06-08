function ajustarAlturaElementoAbsoluto() {
    var alturaDelBody = document.body.scrollHeight;
    var elemento = document.getElementById('elementoAbsoluto');
    elemento.style.height = alturaDelBody + 'px';
  }

  window.onload = ajustarAlturaElementoAbsoluto;
  window.onresize = ajustarAlturaElementoAbsoluto; // Ajusta la altura cuando la ventana cambia de tamaño
