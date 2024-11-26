function toggleInfo(button) {
  // Buscar el cuadro que contiene el botón clicado
  const box = button.closest('.box');
  
  // Buscar todos los cuadros (para cerrar los demás)
  const allBoxes = document.querySelectorAll('.box');

  // Verificar si el cuadro ya está expandido
  if (box.classList.contains('activo')) {
      // Si está activo, se cierra
      box.classList.remove('activo');
  } else {
      // Cerrar todos los cuadros activos
      allBoxes.forEach(item => item.classList.remove('activo'));

      // Abrir solo el cuadro clicado
      box.classList.add('activo');
  }
}