const materias = document.querySelectorAll('.materia');
const infoBox = document.getElementById('infoBox');

materias.forEach(materia => {
  materia.addEventListener('click', () => {
    const info = materia.getAttribute('data-info');
    infoBox.textContent = info;
    infoBox.classList.remove('hidden');
  });
});
