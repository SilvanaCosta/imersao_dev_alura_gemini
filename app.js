function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem de erro
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum destino foi encontrado. Realize nova pesquisa.</p>"
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Converte o título e o país para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let pais = dado.pais.toLowerCase();
  
      // Verifica se o título ou o país contém a palavra pesquisada
      if (titulo.includes(campoPesquisa) || pais.includes(campoPesquisa)) {
        // Cria um novo elemento div para cada resultado encontrado e adiciona as informações relevantes
        resultados += `
          <div class="resultados">
            <h3>${dado.titulo}</h3>
            <h4>${dado.pais}</h4>
            <p class="descricao-dados">${dado.descricao}</p>
            <h4>Alguns Roteiros:</h4>
            <ul class="lista-roteiros">
              <li>${dado.roteiro1}</li>
              </ul>
            <button class="wiki-button"><a href="${dado.link}" target="_blank">Wikipédia</a></button>
          </div>
        `;
      }
    }
  
    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nenhum roteiro foi encontrado.</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }