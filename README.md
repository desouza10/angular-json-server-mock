# Angular + JSON Server Mock

Este projeto demonstra como utilizar o `JSON Server` para mockar APIs RESTful em aplicações Angular, permitindo o desenvolvimento frontend independente do backend real.

## 🚀 Motivação

Durante o desenvolvimento frontend, é comum enfrentar situações onde o backend ainda não está disponível ou está instável. Para manter a produtividade e permitir o trabalho em paralelo, utilizamos o `JSON Server` para simular as respostas da API.

Uma documentação de backend clara e detalhada é essencial nesse processo, pois permite que os desenvolvedores frontend criem mocks precisos e alinhados com as especificações reais da API.

## ✅ Solução aplicada

Esta aplicação lista os 100 primeiros Pokémons, permitindo visualizar os detalhes de cada um ao clicar na imagem correspondente. A API pública [PokeAPI](https://pokeapi.co/) foi utilizada como fonte de dados para simular a integração com um backend real.

## 🔧 Configuração

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Inicie a aplicação juntamente com o servidor de mock:**

   ```bash
   npm run start:dev
   ```
   Isso fará com que a aplicação seja iniciada juntamente com o ``JSON Server`` usando o arquivo ``db.json`` como fonte de dados. 

   A aplicação será servida no endereço ``http://localhost:4200`` e o mock no ``http://localhost:3000``.   


3. **Iniciar a aplicação com em produção:**

   ```bash
   npm run start:prod
   ```
   A aplicação será servida no endereço ``http://localhost:4200`` apontando para a API real.   

## 📁  Estrutura do Projeto
   - ``db.json``: Contém os dados mockados da API.
   - ``routes.json``: Mapeia as rotas da API para os dados correspondentes em db.json.
   - ``proxy.conf.json``: Configura o proxy para redirecionar as chamadas da API para o JSON Server.

## 📌 Considerações
   - **Documentação de Backend**: Uma documentação bem elaborada facilita a criação de mocks precisos, garantindo que o frontend esteja alinhado com as expectativas do backend.

   - **Autonomia no Desenvolvimento:** Com o uso de mocks, os desenvolvedores frontend podem continuar seu trabalho sem depender do backend, aumentando a eficiência e reduzindo bloqueios.

## 📌 Documentações úteis
   - **Angular**:  https://angular.dev/installation
   - **JSON Server**: https://www.npmjs.com/package/json-server
   - **PokeAPI**:  https://pokeapi.co/

## 📄 Licença
   Projeto de livre uso com finalidade de estudo.
   Este projeto está licenciado sob a [MIT License](https://opensource.org/license/mit).