
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
                    document.getElementById('tempo_respostaDisplay').textContent = data.tempo_resposta;

                 
                    btnConsultar.style.backgroundColor = corOriginal;
                     
                })

                .catch(error => {
                    console.error('Erro ao consultar API:', error);
                    document.getElementById('resultado').textContent = 'Erro ao fazer a consulta. Contate um admin. ';
                    btnConsultar.style.backgroundColor = corOriginal;
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
 