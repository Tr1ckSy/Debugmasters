function consultarAPI() {
    const cpf = document.getElementById('cpfInput').value;

    if (cpf.trim() === '') {
        alert('Digite um CPF válido antes de consultar.');
        return;
    }

    const api_url = `https://scoot-dev.000webhostapp.com/cpf.php?cpf=${cpf}`;
    const btnConsultar = document.getElementById('btnConsultar');
    const corOriginal = btnConsultar.style.backgroundColor;
    btnConsultar.style.backgroundColor = 'mediumpurple';

    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            // Função para decodificar entidades HTML
            function decodeEntities(encodedString) {
                const div = document.createElement('div');
                div.innerHTML = encodedString;
                return div.textContent;
            }

            // Atualizar o conteúdo na página
            document.getElementById('cpfDisplay').textContent = data.cpf;
            document.getElementById('cnsDisplay').textContent = data.cns;
            document.getElementById('nomeDisplay').textContent = decodeEntities(data.nome);
            document.getElementById('nascimentoDisplay').textContent = decodeEntities(data.nascimento);
            document.getElementById('idadeDisplay').textContent = data.idade;
            document.getElementById('grauDisplay').textContent = decodeEntities(data.grau_qualidade);
            document.getElementById('generoDisplay').textContent = decodeEntities(data.genero);
            document.getElementById('municipionasDisplay').textContent = decodeEntities(data.municipio_nascimento);
            document.getElementById('estadonasDisplay').textContent = decodeEntities(data.estado_nascimento);
            document.getElementById('corDisplay').textContent = decodeEntities(data.cor);
            document.getElementById('obitoDisplay').textContent = decodeEntities(data.obito);
            document.getElementById('maeDisplay').textContent = decodeEntities(data.mae);
            document.getElementById('paiDisplay').textContent = decodeEntities(data.pai);
            document.getElementById('telefonesDisplay').textContent = decodeEntities(data.telefones);
            document.getElementById('logradouroDisplay').textContent = decodeEntities(data.logradouro);
            document.getElementById('numeroDisplay').textContent = decodeEntities(data.numero);
            document.getElementById('bairroDisplay').textContent = decodeEntities(data.bairro);
            document.getElementById('municipioDisplay').textContent = decodeEntities(data.municipio);
            document.getElementById('estadoDisplay').textContent = decodeEntities(data.estado);
            document.getElementById('cepDisplay').textContent = data.cep;
            document.getElementById('tempo_respostaDisplay').textContent = data.tempo_resposta;

            btnConsultar.style.backgroundColor = corOriginal;
        })
        .catch(error => {
            console.error('Erro ao consultar API:', error);
            document.getElementById('resultado').textContent = 'Erro ao fazer a consulta. Contate um admin.';
            btnConsultar.style.backgroundColor = corOriginal;

            // Mostrar um alerta com a mensagem de erro
            alert('Ocorreu um erro ao consultar a API. Por favor, tente novamente ou entre em contato com o suporte.');
        });
}

function copiarConteudo() {
            const resultado = document.getElementById('resultado');
            const elementosParaCopiar = resultado.children;

            
            const textareaTemporario = document.createElement('textarea');
            textareaTemporario.style.position = 'fixed'; 
            textareaTemporario.style.opacity = 0; 
            document.body.appendChild(textareaTemporario);

           
            let conteudoParaCopiar = '';
            for (const elemento of elementosParaCopiar) {
                conteudoParaCopiar += elemento.innerText + '\n';
            }

        
            textareaTemporario.value = conteudoParaCopiar;

            
            textareaTemporario.select();

            document.execCommand('copy');

        
            document.body.removeChild(textareaTemporario);

        
            alert('Conteúdo copiado para a área de transferência.');
        }
 