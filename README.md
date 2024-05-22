# Exercício: API de Produtos CRUD

Você foi contratado para desenvolver uma API para gerenciar produtos. Sua tarefa é criar os endpoints necessários para permitir a criação, leitura, atualização e exclusão (CRUD) de produtos. Utilize as tecnologias Express e JSON Server para implementar esta API.

## Requisitos:

### Crie os seguintes endpoints para manipular os dados mocados da api fake

1. **GET /produtos**: Retorna uma lista de todos os produtos.
2. **GET /produtos/:id**: Retorna os detalhes de um produto específico com o ID fornecido.
3. **POST /produtos**: Cria um novo produto com os dados fornecidos no corpo da requisição. O ID deve ser gerado automaticamente.
4. **PUT /produtos/:id**: Atualiza os detalhes de um produto existente com o ID fornecido, utilizando os dados fornecidos no corpo da requisição.
5. **DELETE /produtos/:id**: Remove o produto com o ID fornecido.

## Aqui está o banco de dados fake:

```json
{ 
    "produtos": [
    { "id": 1, "nome": "Geladeira", "descricao": "Geladeira Frost Free com capacidade para 380 litros, ideal para famílias grandes. Possui prateleiras ajustáveis, dispenser de água na porta e compartimentos especiais para frutas e legumes." },
    { "id": 2, "nome": "Televisão", "descricao": "Televisão LED Smart de 55 polegadas, com resolução 4K e tecnologia HDR para imagens mais nítidas e cores vibrantes. Possui acesso a aplicativos de streaming, como Netflix e Amazon Prime Video, e controle remoto com reconhecimento de voz." },
    { "id": 3, "nome": "Notebook", "descricao": "Notebook ultrafino com processador Intel Core i7 de última geração, 16GB de RAM e SSD de 512GB para inicialização rápida e desempenho excepcional. Tela Full HD de 15,6 polegadas e bateria de longa duração, perfeito para produtividade e entretenimento." },
    { "id": 4, "nome": "Cafeteira", "descricao": "Cafeteira elétrica programável com capacidade para 12 xícaras. Possui sistema de gotejamento rápido, jarra de vidro resistente ao calor e função de programação para preparar café fresco automaticamente todas as manhãs." },
    { "id": 5, "nome": "Forno Elétrico", "descricao": "Forno elétrico de bancada com capacidade de 50 litros e diversas funções pré-programadas, como assar, grelhar e gratinar. Possui controle de temperatura ajustável e timer com desligamento automático para maior praticidade no cozimento de diversos pratos." },
    { "id": 6, "nome": "Sofá", "descricao": "Sofá de três lugares com estrutura em madeira maciça e estofamento em tecido suede. Design moderno e confortável, com almofadas removíveis e encosto reclinável, perfeito para relaxar e receber visitas." },
    { "id": 7, "nome": "Máquina de Lavar Roupa", "descricao": "Máquina de lavar roupa automática com capacidade para 10kg de carga. Possui múltiplos programas de lavagem, incluindo ciclo rápido e delicado, além de função de centrifugação eficiente para roupas quase secas após a lavagem." },
    { "id": 8, "nome": "Bicicleta", "descricao": "Bicicleta urbana com quadro de alumínio leve e resistente. Possui câmbio de 21 velocidades, freios a disco hidráulicos e pneus largos para maior estabilidade e conforto durante o pedal. Ideal para deslocamentos diários e passeios pelo parque." },
    { "id": 9, "nome": "Mesa de Jantar", "descricao": "Mesa de jantar retangular com tampo de vidro temperado e base em aço cromado. Acompanha seis cadeiras estofadas em couro sintético, proporcionando elegância e conforto para refeições em família ou jantares com amigos." },
    { "id": 10, "nome": "Câmera Fotográfica", "descricao": "Câmera DSLR profissional com sensor de 24 megapixels e sistema de foco automático avançado. Grava vídeos em resolução 4K e possui conectividade Wi-Fi para transferência de imagens sem fio. Ideal para fotógrafos amadores e profissionais que buscam qualidade excepcional." }
  ]
  }

```

# instruções:
1. Inicie criando uma estrutura básica de um servidor Express.
2. Utilize o JSON Server para criar um banco de dados fake contendo os produtos fornecidos.
3. Implemente os endpoints conforme descrito nos requisitos.
4. Teste cada endpoint utilizando ferramentas como Postman ou curl.
5. Certifique-se de que a API responde corretamente a diferentes tipos de requisições, como GET, POST, PUT e DELETE.
6. Lembre-se de tratar possíveis erros, como produtos não encontrados ou dados inválido.
7. Utilize o comando 'npm run dev' para inicializar o servidor express.
8. Utilize o comando 'npm run json' para inicializar um servidor do banco de dados fake

Obs: os dois comandos devem ser executados em dois terminais diferentes ao mesmo tempo.

# Dicas:
- Utilize o módulo express para criar o servidor e definir os endpoints.
- Utilize o módulo json-server para criar um banco de dados fake a partir de um arquivo JSON.
- Utilize o axios para requisitar o banco de dados fake e manipula-lo.
- Mantenha o código organizado e com boas práticas de programação.

## Materiais de apoio

- Express: https://expressjs.com/pt-br/
- Json Server: https://www.npmjs.com/package/json-server, https://medium.com/@andrewchanm/criando-uma-api-rest-fake-com-json-server-9a312127f6d6
- Axios: https://npmjs.com/package/axios