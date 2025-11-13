// Substitua pela sua chave REAL da OMDB API
const OMDB_API_KEY = '72dcf75a';
const listaFilmesContainer = document.querySelector('.lista-filmes');
const searchInput = document.querySelector('.search-input');

// --- A. Função para Criar o HTML do Card ---
/**
 * Cria o elemento HTML de um Card de Filme com os dados do OMDB.
 * @param {Object} filme - Objeto de filme retornado pela API.
 */
function criarCardFilme(filme) {
    const card = document.createElement('div');
    card.classList.add('card-filme');
    // Adiciona o IMDB ID como um data-attribute para buscar detalhes/trailer depois
    card.dataset.imdbID = filme.imdbID;
}
    // Garante que o rating seja um valor presente
    const rating = filme.imdbRating ? `⭐ ${filme.imdbRating}` : '⭐ N/A';


    /**
 * Função Principal de Busca 🔎
 * Busca o filme na OMDB e atualiza o container.
 * @param {string} termo - Termo de busca digitado pelo usuário.
 */
async function buscarFilmes(termo) {
    // 1. Não busca se o termo estiver vazio ou indefinido.
    if (!termo) {
        // Opcional: Limpar o container se o termo for removido após uma busca anterior.
        // listaFilmesContainer.innerHTML = '';
        return;
    }

    // 2. Limpa a lista anterior e mostra um indicador de carregamento.
    const listaFilmesContainer = document.getElementById('lista-filmes'); // Assumindo este ID
    if (!listaFilmesContainer) {
        console.error("Container de filmes não encontrado.");
        return;
    }
    
    listaFilmesContainer.innerHTML = '<p style="text-align: center; color: gray;">Carregando...</p>';

    // --- Configurações da API OMDB ---
    const API_KEY = 'SUA_CHAVE_AQUI'; // **MUDE PARA SUA CHAVE DE API REAL DA OMDB**
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${API_KEY}`;

    try {
        // 3. Faz a requisição à API.
        const response = await fetch(url);
        
        // Verifica se a resposta HTTP foi bem-sucedida.
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();

        // 4. Processa e exibe os resultados.
        if (data.Response === "True") {
            // Se houver resultados, limpa e preenche o container.
            listaFilmesContainer.innerHTML = '';
            
            data.Search.forEach(filme => {
                const filmeElement = criarElementoFilme(filme); // Função auxiliar necessária
                listaFilmesContainer.appendChild(filmeElement);
            });
            
        } else {
            // Se a API retornar sucesso, mas sem filmes (Response: "False").
            const mensagemErro = data.Error || `Nenhum filme encontrado para "${termo}".`;
            listaFilmesContainer.innerHTML = `<p style="text-align: center; color: red;">${mensagemErro}</p>`;
        }

    } catch (error) {
        // 5. Trata erros de requisição (ex: falha de rede, chave de API inválida).
        console.error("Erro ao buscar filmes:", error);
        listaFilmesContainer.innerHTML = `<p style="text-align: center; color: red;">Houve um erro: ${error.message}. Tente novamente mais tarde.</p>`;
    }
}

// ----------------------------------------------------------------------
// Exemplo de Função Auxiliar (Criar o elemento HTML de cada filme)
// Esta função precisa ser implementada separadamente no seu código.
// ----------------------------------------------------------------------

/**
 * Cria e retorna o elemento HTML para um filme.
 * @param {Object} filme - Objeto de filme retornado pela OMDB.
 * @returns {HTMLElement} O elemento <div> contendo as informações do filme.
 */
function criarElementoFilme(filme) {
    const div = document.createElement('div');
    div.className = 'filme-card'; // Use uma classe CSS para estilização
    div.innerHTML = `
        <img src="${filme.Poster !== 'N/A' ? filme.Poster : 'placeholder.png'}" alt="${filme.Title} Poster">
        <h3>${filme.Title}</h3>
        <p>Ano: ${filme.Year}</p>
        <p>Tipo: ${filme.Type}</p>
    `;
    return div;
}

/**
 * Função Principal de Busca 🔎
 * Busca o filme na OMDB e atualiza o container.
 * @param {string} termo - Termo de busca digitado pelo usuário.
 */
async function buscarFilmes(termo) {
    // 1. Não busca se o termo estiver vazio ou indefinido.
    if (!termo) {
        // Opcional: Limpar o container se o termo for removido após uma busca anterior.
        // listaFilmesContainer.innerHTML = '';
        return;
    }

    // 2. Limpa a lista anterior e mostra um indicador de carregamento.
    const listaFilmesContainer = document.getElementById('lista-filmes'); // Assumindo este ID
    if (!listaFilmesContainer) {
        console.error("Container de filmes não encontrado.");
        return;
    }
    
    listaFilmesContainer.innerHTML = '<p style="text-align: center; color: gray;">Carregando...</p>';

    // --- Configurações da API OMDB ---
    const API_KEY = 'SUA_CHAVE_AQUI'; // **MUDE PARA SUA CHAVE DE API REAL DA OMDB**
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${API_KEY}`;

    try {
        // 3. Faz a requisição à API.
        const response = await fetch(url);
 * Função Principal de Busca 🔎
 * Busca o filme na OMDB e atualiza o container.
 * @param {string} termo - Termo de busca digitado
        
        // Verifica se a resposta HTTP foi bem-sucedida.
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();

        // 4. Processa e exibe os resultados.
        if (data.Response === "True") {
            // Se houver resultados, limpa e preenche o container.
            listaFilmesContainer.innerHTML = '';
            
            data.Search.forEach(filme => {
                const filmeElement = criarElementoFilme(filme); // Função auxiliar necessária
                listaFilmesContainer.appendChild(filmeElement);
            });
            
        } else {
            // Se a API retornar sucesso, mas sem filmes (Response: "False").
            const mensagemErro = data.Error || `Nenhum filme encontrado para "${termo}".`;
            listaFilmesContainer.innerHTML = `<p style="text-align: center; color: red;">${mensagemErro}</p>`;
        }

    } catch (error) {
        // 5. Trata erros de requisição (ex: falha de rede, chave de API inválida).
        console.error("Erro ao buscar filmes:", error);
        listaFilmesContainer.innerHTML = `<p style="text-align: center; color: red;">Houve um erro: ${error.message}. Tente novamente mais tarde.</p>`;
    }
}

// ----------------------------------------------------------------------
// Exemplo de Função Auxiliar (Criar o elemento HTML de cada filme)
// Esta função precisa ser implementada separadamente no seu código.
// ----------------------------------------------------------------------

/**
 * Cria e retorna o elemento HTML para um filme.
 * @param {Object} filme - Objeto de filme retornado pela OMDB.
 * @returns {HTMLElement} O elemento <div> contendo as informações do filme.
 */
function criarElementoFilme(filme) {
    const div = document.createElement('div');
    div.className = 'filme-card'; // Use uma classe CSS para estilização
    div.innerHTML = `
        <img src="${filme.Poster !== 'N/A' ? filme.Poster : 'placeholder.png'}" alt="${filme.Title} Poster">
        <h3>${filme.Title}</h3>
        <p>Ano: ${filme.Year}</p>
        <p>Tipo: ${filme.Type}</p>
    `;
    return div;
}

async function buscarFilmes(termo) {
    // 1. Não busca se o termo estiver vazio ou indefinido.
    if (!termo) {
        if (listaFilmesContainer) listaFilmesContainer.innerHTML = '';
        return;
    }

    // 2. Limpa a lista anterior e mostra um indicador de carregamento
    if (listaFilmesContainer) {
        listaFilmesContainer.innerHTML = '<p style="text-align: center; color: gray;">Carregando...</p>';
    } else {
        console.error("Container de filmes não encontrado.");
        return;
    }

    try {
        // Busca na OMDB (O parâmetro 's' para busca por termo)
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${OMDB_API_KEY}`);
        
        if (!response.ok) {ara busca por termo)
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${OMDB_API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();

        // Limpa o container novamente (para começar a preencher com resultados)
        listaFilmesContainer.innerHTML = "";

        if (data.Response === 'True' && data.Search) {
            
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();

        // Limpa o container novamente (para começar a preencher com resultados)
        listaFilmesContainer.innerHTML = "";

        if (data.Response === 'True' && data.Search) {
            
            // Itera sobre os resultados básicos
            data.Search.forEach(async (filmeBase) => {
                
                // A OMDB retorna apenas dados básicos na busca (s=).
                // Precisamos de uma segunda busca (i) para pegar o Rating.
                const filmeDetalhado = await buscarDetalhesFilme(filmeBase.imdbID);

                // **ADICIONAR: Lógica paraara busca por termo)
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${OMDB_API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();

        // Limpa o container novamente (para começar a preencher com resultados)
        listaFilmesContainer.innerHTML = "";

        if (data.Response === 'True' && data.Search) {
             renderizar o filmeDetalhado na listaFilmesContainer**
                if (filmeDetalhado) {
                    // Exemplo de como usar uma função de renderização:
                    const elemento = criarElementoFilme(filmeDetalhado);
                    listaFilmesContainer.appendChild(elemento);
                }
            });

        } else {ara busca por termo)
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${OMDB_API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();

        // Limpa o container novamente (para começar a preencher com resultados)
        listaFilmesContainer.innerHTML = "";

        if (data.Response === 'True' && data.Search) {
            
            // Se a busca não retornar resultados
            const mensagem = data.Error || `Nenhum filme encontrado para "${termo}".`;
            listaFilmesContainer.innerHTML = `<p style="text-align: center; color: red;">${mensagem}</p>`;
        }
        
    } catch (error) {
        // Trata erros de rede ou de API
        console.error("Erro ao buscar filmes:", error);
        listaFilmesContainer.innerHTML = `<p style="text-align: center; color: red;">Houve um erro: ${error.message}</p>`;
    }
}


// --- c. Função para Buscar Detalhes e Trailer (Chamada Adicional) ---
// NECESSARIA pois a OMDB não retorna o Rating na busca por 's'
async function buscarDetalhes(imdbID) {
  try {
    // Busca na OMDB (O parametro 'i' é para busca por ID)
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${OMDB_API_KEY}`);
    const data = await response.json();
    return data.Response === 'True' ? data : null;
  } catch (error) {
    console.error("Erro ao buscar detalhes:", error);
    return null;ara busca por termo)
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(termo)}&apikey=${OMDB_API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();

        // Limpa o container novamente (para começar a preencher com resultados)
        listaFilmesContainer.innerHTML = "";

        if (data.Response === 'True' && data.Search) {
            
  }
}