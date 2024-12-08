
# **Chatbot para MEIs: Automação de Emissão de DAS e Notas Fiscais**

Este projeto consiste em um chatbot desenvolvido para atender às necessidades de Microempreendedores Individuais (MEIs), oferecendo automação de tarefas administrativas, como emissão de DAS (Documento de Arrecadação do Simples Nacional) e notas fiscais. O objetivo principal é proporcionar mais autonomia, reduzir a dependência de contadores e simplificar processos burocráticos.


### **Atividade Extensionista da Gran Faculdade**
Este projeto foi desenvolvido como parte de uma atividade extensionista da Gran Faculdade, que busca unir teoria e prática para promover a interação entre o ambiente acadêmico e a sociedade. A proposta é aplicar o conhecimento adquirido no curso para solucionar problemas reais, contribuindo para o desenvolvimento pessoal, acadêmico e social.

### **Objetivo de uma Atividade Extensionista**

As atividades extensionistas têm como objetivo principal conectar o conhecimento acadêmico com as demandas da sociedade, promovendo:

Desenvolvimento Social: Atender às necessidades da comunidade, oferecendo soluções práticas e inovadoras.
Integração de Saberes: Aplicar o aprendizado teórico em situações práticas, permitindo aos estudantes vivenciar os desafios do mundo real.
Formação Cidadã: Estimular o senso de responsabilidade social e ética, promovendo o impacto positivo na sociedade.
Desenvolvimento Profissional: Proporcionar aos estudantes a oportunidade de desenvolver competências técnicas, como programação e automação, além de habilidades interpessoais, como trabalho em equipe e empatia.
Este projeto de automação para MEIs é um exemplo claro de como a tecnologia pode ser utilizada para beneficiar pequenos empreendedores, promovendo autonomia e simplificação de processos burocráticos, alinhando-se aos objetivos extensionistas da Gran Faculdade.

---

## **Funcionalidades**
1. **Menu Inicial**:  
   O chatbot oferece as seguintes opções:
   - **1 - Emitir DAS de pagamento**  
   - **2 - Emitir Nota Fiscal**

2. **Emissão de DAS**:  
   - O chatbot solicita o **CNPJ** do usuário.
   - Utilizando Selenium, preenche automaticamente o campo de CNPJ no site oficial do Simples Nacional, realiza a busca pela guia de pagamento e retorna o status ao usuário.

3. **Emissão de Nota Fiscal**:  
   - O chatbot coleta os dados necessários:
     - CNPJ ou CPF do cliente.
     - Descrição do serviço prestado.
     - Valor do serviço.
     - Data de emissão (opcional, com padrão na data atual).
   - O Selenium preenche os campos no sistema da prefeitura, gera a nota fiscal e baixa o PDF.
   - O PDF gerado é enviado diretamente ao usuário via WhatsApp.

**Exemplo de Interação:**

![Menu Inicial](https://github.com/LouiseALD/ChatWhatsAppMEIAutomacao/blob/main/Imagens/menu_inicial.jpg)
![Emissão de DAS](https://github.com/LouiseALD/ChatWhatsAppMEIAutomacao/blob/main/Imagens/emissao_das.jpg)
![Emissão de Nota Fiscal](https://github.com/LouiseALD/ChatWhatsAppMEIAutomacao/blob/main/Imagens/emissao_nf.jpg)



---

4. **Respostas Personalizadas**:  
   O chatbot utiliza o nome do usuário e delays simulados para criar uma interação mais humanizada.

---

## **Tecnologias Utilizadas**
- **Node.js**: Back-end para gerenciar o fluxo do chatbot e automação.
- **whatsapp-web.js**: Biblioteca para integração com o WhatsApp.
- **Selenium WebDriver**: Automação de navegador para acessar e preencher sistemas externos.
- **ChromeDriver**: Driver do navegador para o Selenium.
- **JavaScript**: Linguagem de programação principal do projeto.

---

## **Fluxo do Projeto**

### **1. Menu Inicial**
- O usuário inicia a conversa no WhatsApp com uma saudação.
- O chatbot responde com o menu de opções disponíveis.

### **2. Emissão de DAS**
- O chatbot solicita o CNPJ do usuário.
- Após validação, o Selenium:
  1. Acessa o site do Simples Nacional.
  2. Insere o CNPJ no campo apropriado.
  3. Busca a guia de pagamento.
- O chatbot informa o status ao usuário.

### **3. Emissão de Nota Fiscal**
- O chatbot coleta os seguintes dados:
  - CNPJ/CPF do cliente.
  - Descrição do serviço.
  - Valor do serviço.
  - Data de emissão (opcional).
- Após validação, o Selenium:
  1. Acessa o sistema de emissão de notas fiscais da prefeitura.
  2. Realiza login (se necessário).
  3. Preenche os campos com as informações coletadas.
  4. Gera e baixa o PDF da nota fiscal.
- O chatbot envia o PDF ao usuário pelo WhatsApp.

---

## **Resultados Alcançados**
1. **Redução da Dependência de Contadores**:  
   MEIs agora têm autonomia para realizar tarefas administrativas sem suporte profissional.
   
2. **Otimização de Tempo**:  
   Processos antes manuais foram automatizados, reduzindo o tempo necessário para emissão de DAS e notas fiscais para menos de 5 minutos.

3. **Acessibilidade e Inovação**:  
   O uso do WhatsApp garantiu uma interface familiar e acessível, enquanto a automação via Selenium trouxe inovação ao simplificar processos burocráticos.

4. **Feedback Positivo**:  
   Usuários relataram maior praticidade, economia de custos e eficiência com a solução proposta.

---

## **Como Executar o Projeto**

### **Pré-requisitos**
- **Node.js** (versão 16 ou superior).
- **Google Chrome** e **ChromeDriver** instalados.
- Bibliotecas necessárias:
  ```bash
  npm install whatsapp-web.js selenium-webdriver qrcode-terminal
  ```
### **Instalação**
1. **Inicie o chatbot**:
   ```bash
   npm install
   ```
---

### **Execução**
1. **Inicie o chatbot**:
   ```bash
   node chatbot.js
   ```
2. **Escaneie o QR Code**:
   - Abra o WhatsApp e conecte ao chatbot.
3. **Interaja com o chatbot**:
   - Escolha uma das opções e forneça os dados solicitados.
4. **Receba os resultados**:
   - DAS ou nota fiscal gerada será entregue diretamente no WhatsApp.

---

## **Contribuições**
Sinta-se à vontade para contribuir com o projeto! Sugestões, melhorias e novas funcionalidades são sempre bem-vindas.

1. **Fork este repositório.**
2. **Crie uma branch para sua funcionalidade:**
   ```bash
   git checkout -b nova-funcionalidade
   ```
3. **Faça o commit das alterações:**
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. **Envie sua branch:**
   ```bash
   git push origin nova-funcionalidade
   ```
5. **Abra um Pull Request.**

---

## **Licença**
Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## **Referências**
1. **Documentação do Selenium WebDriver**  
   - https://www.selenium.dev/documentation/  

2. **Portal do Simples Nacional**  
   - https://www8.receita.fazenda.gov.br/SimplesNacional/  

3. **Sistema de Nota Fiscal Eletrônica das Prefeituras**  
   - https://nfe.prefeitura.sp.gov.br/  

4. **Biblioteca whatsapp-web.js**  
   - https://github.com/pedroslopez/whatsapp-web.js  

5. **Vídeo Tutorial no YouTube**  
   - https://www.youtube.com/watch?v=MdZFR2op_mg  

6. **Normas e Requisitos para MEIs**  
   - https://www.gov.br/empresas-e-negocios/pt-br/empreendedor  

---

Esse projeto representa uma solução prática e inovadora para facilitar a vida dos MEIs, unindo tecnologia e automação para resolver problemas reais de maneira acessível e eficiente. 🚀
