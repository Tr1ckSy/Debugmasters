  const btnConsultar = document.getElementById('btnConsultar');
  const btnCopy = document.getElementById('btnCopy');
        const resultContainer = document.getElementById('resultContainer');

        btnConsultar.addEventListener('click', () => {
            const cpf = document.getElementById('cpfInput').value;

            if (cpf.trim() === '') {
                alert('Digite um CPF válido antes de consultar.');
                return;
            }

            const api_url = `https://phonetic-controls.000webhostapp.com/consul.php?cpf=${cpf}`;
            const btnConsultar = document.getElementById('btnConsultar');
    const corOriginal = btnConsultar.style.backgroundColor;
    btnConsultar.style.backgroundColor = 'mediumpurple';

            fetch(api_url)
                .then(response => response.json())
                .then(data => {
                    // Format and display the data in the result container
                    const formattedData = `
               
                     <strong>🔎 | CPF ENCONTRADO!</strong> <br>
                     <strong>• 𝐂𝐏𝐅:</strong> ${data.cpf}<br>
                     <br>
                        <strong>• 𝐍𝐎𝐌𝐄: </strong> ${data.nome}<br>
                         <br>

                        <strong>• 𝐒𝐄𝐗𝐎:</strong> ${data.sexo}
                         <br>
                         <br>

                        <strong>• 𝐍𝐀𝐒𝐂𝐈𝐌𝐄𝐍𝐓𝐎:</strong> ${data.nascimento}<br>
                         <br>
                        <strong>• 𝐌Ã𝐄:</strong> ${data.mae}<br>
                         <br>
                        <strong>• 𝐄𝐌𝐀𝐈𝐋:</strong> ${data.email}<br>
                         <br>
                        <strong>• 𝐄𝐒𝐓𝐀𝐃𝐎 𝐂𝐈𝐕𝐈𝐋: </strong> ${data.estadoCivil}<br>
                         <br>
                        <strong>• 𝐓𝐄𝐋𝐄𝐅𝐎𝐍𝐄: </strong> ${data.telefone}<br>
                         <br>
                        <strong>• 𝐂𝐄𝐋𝐔𝐋𝐀𝐑: </strong> ${data.celular}<br>
                         <br>
                        <strong>• 𝐂𝐄𝐏: </strong> ${data.cep}<br>
                         <br>
                        <strong>• 𝐑𝐔𝐀:</strong> ${data.logradouro}<br>
                         <br>
                        <strong>• 𝐍𝐔𝐌𝐄𝐑𝐎:</strong> ${data.numero}<br>
                         <br>
                        <strong>• 𝐂𝐎𝐌𝐏𝐋𝐄𝐌𝐄𝐍𝐓𝐎:</strong> ${data.complemento}
                        <br>
                         <br>
                        <strong>• 𝐁𝐀𝐈𝐑𝐑𝐎: </strong> ${data.bairro}
                        <br>
                         <br>
                        <strong>• 𝐂𝐈𝐃𝐀𝐃𝐄: </strong> ${data.cidade}
                        <br>
                        <br>
                        <strong>• 𝐄𝐒𝐓𝐀𝐃𝐎:</strong> ${data.estado}<br>
                        <p>By: https://debugmasters.vercel.app/</p>
                    `;
                    resultContainer.innerHTML = formattedData;
                     const result = document.getElementById('resultContainer');
    const contentToCopy = result.innerText;

    const textareaTemporario = document.createElement('textarea');
    textareaTemporario.style.position = 'fixed';
    textareaTemporario.style.opacity = 0;
    document.body.appendChild(textareaTemporario);

    textareaTemporario.value = contentToCopy;

    textareaTemporario.select();
    document.execCommand('copy');

    document.body.removeChild(textareaTemporario);

    alert('Conteúdo copiado para a área de transferência.');

                     btnConsultar.style.backgroundColor = corOriginal;
                })
                .catch(error => {
                    console.error('Erro ao consultar API:', error);
                    resultContainer.innerHTML = 'Erro ao fazer a consulta, Digite um cpf valido.';
                });
        });

