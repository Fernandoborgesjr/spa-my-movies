# Projeto React - Aula Prática de Arquitetura de Software Frontend - PUC Minas

Este projeto foi desenvolvido durante a aula prática da disciplina de **Arquitetura de Software Frontend** da [PUC Minas](https://www.pucminas.br). O objetivo principal foi demonstrar o uso de **Single Page Application (SPA)** utilizando o React.

## Funcionalidades

O projeto demonstra uma SPA funcional, utilizando práticas recomendadas para otimização e boas práticas de desenvolvimento em frontend, incluindo:

- Rotas dinâmicas e personalizadas.
- Integração com APIs externas.
- Otimização de performance e estruturação de componentes.

## Scripts

Os seguintes scripts podem ser executados com **Yarn** para rodar, testar e construir o projeto:

```json
"scripts": {
  "start": "react-scripts start",       // Inicia o servidor de desenvolvimento
  "build": "react-scripts build",       // Gera o build otimizado para produção
  "test": "react-scripts test",         // Executa os testes
  "eject": "react-scripts eject"        // Ejeção da configuração padrão do React
}
```

### Para executar o projeto localmente:

1. Instale as dependências:

   ```bash
   yarn install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   yarn start
   ```

## Melhorias Implementadas

Durante o desenvolvimento do projeto, realizei os seguintes pontos de melhoria:

1. **Utilização de variáveis de ambiente para a API do TMDB**  
   Agora, as chaves de API e as URLs base são armazenadas em variáveis de ambiente, o que facilita a troca de ambientes (desenvolvimento/produção) e melhora a segurança do projeto. Exemplo no arquivo `.env`:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   REACT_APP_TMDB_API_URL=https://api.themoviedb.org/3
   ```

2. **Otimização de queries com React Query**  
   As chamadas à API foram otimizadas utilizando o **React Query** para melhorar o gerenciamento de cache e o carregamento eficiente de dados. Isso reduz a quantidade de requisições desnecessárias e melhora a experiência do usuário ao lidar com dados assíncronos.

3. **Uso de rota de layout com Outlet**  
   A estrutura de rotas foi aprimorada com o uso do componente `Outlet`, que permite a definição de layouts comuns para diversas páginas. Isso simplifica a manutenção e melhora a organização da aplicação.

4. **Definição de rota padrão**  
   Foi configurada uma rota padrão (fallback) para redirecionar os usuários para uma página específica quando acessam rotas inválidas ou inexistentes, melhorando a navegação e a experiência do usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca principal utilizada para construção da interface e lógica da aplicação.
- **React Router**: Utilizado para gerenciamento de rotas.
- **React Query**: Utilizado para otimização e cache de requisições à API.
- **TMDB API**: Integração com a API pública de filmes e séries.
- **Yarn**: Gerenciador de pacotes.
