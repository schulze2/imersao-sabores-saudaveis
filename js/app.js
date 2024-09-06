function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section)
    let campoPesquisa = document.getElementById("campo-pesquisa").value
  
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhuma Receita foi encontrada. Você precisa digitar o nome da receita ou o ingrediente </p>"
      return;
    }
  
    campoPesquisa = campoPesquisa.toLowerCase();
  
    let resultados = ""
    let nome = "";
    let descricao = "";
  
    for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      descricao = dado.nome.toLowerCase()
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
  
        resultados += `
            <div class="item-resultado">
                  <div class="text">
                    <h2 class="descricao-meta">
                        <a href="${dado.site}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p>
                        ${dado.descricao}
                    </p>
                    <a href="${dado.site}" target="_blank">Mais Informações</a>
                  </div>
                  <img src="${dado.imagem}" alt="">
            </div>
        `;
      }
    }
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    section.innerHTML = resultados
  }
