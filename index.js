
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const run = async (prompt) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens: 2,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\n"],
    });
    // console.log(response.data);
    // extrair o número da resposta
    const resposta = response.data.choices[0].text;
    console.log(resposta);
    // converter pra inteiro
    const respostaInteiro = parseInt(resposta);
    if (respostaInteiro == 1) {
        console.log('O cliente deseja acessar o setor de RH');
    }
    else if (respostaInteiro == 2) {
        console.log('O cliente deseja acessar o setor financeiro');
    }
    else if (respostaInteiro == 3) {
        console.log('O cliente deseja acessar o setor jurídico');
    }
    else if (respostaInteiro == 4) {
        console.log('O cliente deseja acessar o setor de TI');
    }
    else if (respostaInteiro == 5) {
        console.log('O cliente deseja acessar o setor de marketing');
    }
    else {
        console.log('O cliente deseja acessar um setor que não existe');
    }

};
texts = [
    "Você deve responder com o númerodo setor: \n1. Setor de Recursos Humanos;2. Setor Financeiro;3. Setor Jurídico;4. Setor de Tecnologia da Informação;5. Setor de Marketing;6. Não categorizado;\na resposta não deve conter pontos, zeros à esquerda nem nenhum dígito não numérico (switch case).\nMensagem do cliente: Quero me inscrever pra vaga de serviço gerais.\nResposta:",
    "Você deve responder com o númerodo setor: \n1. Setor de Recursos Humanos;2. Setor Financeiro;3. Setor Jurídico;4. Setor de Tecnologia da Informação;5. Setor de Marketing;6. Não categorizado;\na resposta não deve conter pontos, zeros à esquerda nem nenhum dígito não numérico (switch case).\nMensagem do cliente: Preciso emitir uma segunda via de boleto.\nResposta:",
    "Você deve responder com o númerodo setor: \n1. Setor de Recursos Humanos;2. Setor Financeiro;3. Setor Jurídico;4. Setor de Tecnologia da Informação;5. Setor de Marketing;6. Não categorizado;\na resposta não deve conter pontos, zeros à esquerda nem nenhum dígito não numérico (switch case).\nMensagem do cliente: Preciso de uma procuração.\nResposta:",
    "Você deve responder com o númerodo setor: \n1. Setor de Recursos Humanos;2. Setor Financeiro;3. Setor Jurídico;4. Setor de Tecnologia da Informação;5. Setor de Marketing;6. Não categorizado;\na resposta não deve conter pontos, zeros à esquerda nem nenhum dígito não numérico (switch case).\nMensagem do cliente: Pensei numa nova tecnologia.\nResposta:",
]

const main = async () => {
    for (x = 0; x < texts.length; x++) {
        console.log('Mensagem: ' + texts[x]);
        await run(texts[x]);
    }
}

main();
