// Obtém todos os elementos com a classe "titulo"
const titulos = document.getElementsByClassName('titulo');

// Percorre os elementos e adiciona um ouvinte de evento a cada um
for (let i = 0; i < titulos.length; i++) {
  titulos[i].addEventListener('click', function() {
    // Obtém o próximo elemento irmão
    const conteudo = this.nextElementSibling;
    
    // Altera a visibilidade do conteúdo
    if (conteudo.style.display === 'block') {
      conteudo.style.display = 'none';
    } else {
      conteudo.style.display = 'block';
    }
  });
}
