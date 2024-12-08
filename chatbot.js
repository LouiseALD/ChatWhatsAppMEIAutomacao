const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');

const client = new Client();

// Serviço de leitura do QR code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Mensagem inicial quando o bot está pronto
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Inicializa o cliente
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função para criar delay entre ações

// Funil do chatbot
client.on('message', async msg => {
    // Mensagem inicial de saudação e menu
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(2000); // Delay de 2 segundos
        await chat.sendStateTyping(); // Simulando digitação
        await delay(2000);
        const contact = await msg.getContact();
        const name = contact.pushname || 'Usuário'; // Nome do contato
        await client.sendMessage(
            msg.from,
            `Olá, ${name.split(" ")[0]}! Sou o assistente virtual para MEIs. Como posso ajudar você hoje? Por favor, escolha uma das opções abaixo:\n\n1 - Emitir DAS de pagamento\n2 - Emitir nota fiscal`
        );
    }

    // Opção 1 - Emitir DAS de pagamento
    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(
            msg.from,
            'Para emitir o DAS de pagamento, acesse o site do Simples Nacional: https://www8.receita.fazenda.gov.br/SimplesNacional/ e siga as instruções.\n\nSe precisar de ajuda, estou aqui para orientar!'
        );
    }

    // Opção 2 - Emitir nota fiscal
    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(
            msg.from,
            'Para emitir sua nota fiscal como MEI, acesse o sistema de notas fiscais da sua prefeitura.\n\nSe precisar de instruções específicas, digite "Preciso de ajuda para emitir nota fiscal".'
        );
    }

    // Resposta genérica para entradas não reconhecidas
    if (!['1', '2'].includes(msg.body) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(
            msg.from,
            'Desculpe, não entendi sua solicitação. Por favor, escolha uma das opções enviando o número correspondente:\n\n1 - Emitir DAS de pagamento\n2 - Emitir nota fiscal'
        );
    }
});
