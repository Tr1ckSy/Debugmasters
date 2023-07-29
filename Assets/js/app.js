
        function consultarAPI() {
            const cpf = document.getElementById('cpfInput').value;

             if (cpf.trim() === '') {
                alert('Digite um CPF válido antes de consultar.');
                return; // Não prosseguir com a consulta
            }

            const api_url = `https://scoot-dev.000webhostapp.com/cpf.php?cpf=${cpf}`;
                const btnConsultar = document.getElementById('btnConsultar');
    const corOriginal = btnConsultar.style.backgroundColor; // Salva a cor original do botão
    btnConsultar.style.backgroundColor = 'mediumpurple'; // Define a cor temporária (pode ser outra cor de sua escolha)

    // Define o tempo (em milissegundos) após o qual a cor do botão será restaurada
    const tempoRestauracao = 3000; // 3 segundos (você pode ajustar o valor conforme necessário)

    // Configura o temporizador para restaurar a cor original após o tempo definido
    setTimeout(() => {
      btnConsultar.style.backgroundColor = corOriginal; // Restaura a cor original do botão
    }, tempoRestauracao);


            fetch(api_url)
                .then(response => response.json()) // Obter a resposta como JSON
                .then(data => {
                    // Atualizar os elementos <span> dentro das tags <p> com as informações retornadas pela API
                    document.getElementById('cpfDisplay').textContent = data.cpf;
                    document.getElementById('cnsDisplay').textContent = data.cns;
                    document.getElementById('nomeDisplay').textContent = data.nome;
                    document.getElementById('nascimentoDisplay').textContent = data.nascimento;
                    document.getElementById('idadeDisplay').textContent = data.idade;
                    document.getElementById('grauDisplay').textContent = data.grau_qualidade;
                    document.getElementById('generoDisplay').textContent = data.genero;
                    document.getElementById('municipionasDisplay').textContent = data.municipio_nascimento;
                    document.getElementById('estadonasDisplay').textContent = data.estado_nascimento;
                    document.getElementById('corDisplay').textContent = data.cor;
                    document.getElementById('obitoDisplay').textContent = data.obito;
                    document.getElementById('maeDisplay').textContent = data.mae;
                    document.getElementById('paiDisplay').textContent = data.pai;
                    document.getElementById('telefonesDisplay').textContent = data.telefones;
                    document.getElementById('logradouroDisplay').textContent = data.logradouro;
                    document.getElementById('numeroDisplay').textContent = data.numero;
                    document.getElementById('bairroDisplay').textContent = data.bairro;
                    document.getElementById('municipioDisplay').textContent = data.municipio;
                    document.getElementById('estadoDisplay').textContent = data.estado;
                    document.getElementById('cepDisplay').textContent = data.cep;
                 

                    
                })

                .catch(error => {
                    console.error('Erro ao consultar API:', error);
                    document.getElementById('resultado').textContent = 'Erro ao fazer a consulta. Contate um admin. ';
                });

                    function exibirAnuncio() {
      // Exibe o anúncio de vídeo quando o botão for clicado
      (adsbygoogle = window.adsbygoogle || []).push({});

    }

        }

         function copiarConteudo() {
            const resultado = document.getElementById('resultado');
            const elementosParaCopiar = resultado.children;

            // Cria um elemento temporário (textarea) para copiar o texto para a área de transferência
            const textareaTemporario = document.createElement('textarea');
            textareaTemporario.style.position = 'fixed'; // Evita que o elemento seja exibido na tela
            textareaTemporario.style.opacity = 0; // Torna o elemento invisível
            document.body.appendChild(textareaTemporario);

            // Concatena o conteúdo de cada elemento filho em uma única string, separando com quebras de linha
            let conteudoParaCopiar = '';
            for (const elemento of elementosParaCopiar) {
                conteudoParaCopiar += elemento.innerText + '\n';
            }

            // Define o conteúdo do textarea temporário com o conteúdo a ser copiado
            textareaTemporario.value = conteudoParaCopiar;

            // Seleciona todo o texto dentro do textarea temporário
            textareaTemporario.select();

            // Copia o texto para a área de transferência
            document.execCommand('copy');

            // Remove o textarea temporário
            document.body.removeChild(textareaTemporario);

            // Exibe uma mensagem para o usuário
            alert('Conteúdo copiado para a área de transferência.');
        }
