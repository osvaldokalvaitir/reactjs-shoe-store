# React Front

This project was created in React by running CRUD in the Node Express API.

Este projeto foi criado em React executando um CRUD na Node Express API.

## Resumo

Este projeto foi desenvolvido em React executando um CRUD na Node Express API, ou seja:

- Busca todos os produtos
- Busca somente dados de um produto selecionado
- Adiciona novos produtos
- Edita dados de produtos existentes
- Exclui produtos existentes

## Instalação e execução

Depois de instalado o Node.js, abra o prompt de comando e dentro da pasta do projeto execute os comandos abaixo.

Para instalar as dependências do projeto:

```
npm install | yarn install
```

Executar o projeto localmente:

```
npm start | yarn start
```

Construir e executar o projeto:

```
npm run build | yarn run build
```

## Índice

- [Telas](#telas)

  - [Principal](#principal)
  - [Produto](#produto)

- [Componentes](#componentes)

  - [Cabeçalho](#cabeçalho)
  - [Listagem](#listagem)
  - [Formulário](#formulario)

- [Tecnologias](#tecnologias)

  - [Visual Studio Code](#visual-studio-code)

    - [Fonte](#fonte)

      - [Fira Code](#fira-code)

    - [Extensões](#extensões)

      - [Color Highlight](#color-highlight)
      - [DotEnv](#dotenv)
      - [Dracula Official](#dracula-official)
      - [EditorConfig for VS Code](#editorconfig-for-vs-code)
      - [ESLint](#eslint-for-vs-code)
      - [Markdown All in One](#markdown-all-in-one)
      - [Material Icon Theme](#material-icon-theme)
      - [Nunjucks](#nunjucks-for-vs-code)
      - [Prettier - Code formatter](#prettier---code-formatter)

    - [Configurações](#configurações)

  - [Node.js](#nodejs)

- [Bibliotecas](#bibliotecas)

  - [Create React App](#create-react-app)
  - [ESLint](#eslint)
  - [React Router](#react-router)
  - [Axios](#axios)

- [APIs](#apis)
  - [Node Express API](#node-express-api)

## Telas

### Principal

É a tela onde estão todos os dados vindos da API, podendo adicionar novos dados.
Composto por: Cabeçalho e Listagem

### Produto

É a tela onde encontram-se os detalhes do produto selecionado, podendo editar ou excluir o produto.
Composto por: Cabeçalho e Formulário

## Componentes

### Cabeçalho

É a barra superior onde está o título do site.

### Listagem

É a lista onde encontram-se os dados vindos da API.

### Formulário

É um formulário onde é possível editar ou excluir o produto selecionado.

## Tecnologias

### [Visual Studio Code](https://code.visualstudio.com)

Editor de código-fonte que inclui suporte para depuração, realce de sintaxe, complementação inteligente de código, snippets, entre outros.

#### Fonte

##### [Fira Code](https://github.com/tonsky/FiraCode)

Fonte monoespaçada com ligaduras de programação. É necessário adicionar a fonte no sistema operacional.

#### Extensões

##### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Exibe a cor exata de todos RGB’s ou HEX em seu código, muito útil para trabalhar com CSS ou SASS.

##### [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

Utilizado para ter suporte à sintaxe .env, muito útil para quem trabalha com NodeJS, ReactJS ou qualquer outro tipo de projeto web.

##### [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

Tema para o VSCode.

##### [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Utilizado para padronizar quebra de linha, indentação, espaços e tabs entre desenvolvedores de um mesmo projeto.

##### [ESLint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Utilizado para padronizar código entre desenvolvedores como utilização de pontos e vírgulas, tamanho máximo de caracteres em linhas e todo outro tipo de padronização.

##### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Utilizado para escrever e ler Markdown dentro do VSCode, muito útil para documentações o README’s do Github.

##### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Utilizado para exibir os ícones de acordo com a linguagem utilizada na barra lateral.

##### [Nunjucks for VS Code](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)

Utilizado para ter suporte à sintaxe .njk.

##### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Utilizado para formatar JavaScript / TypeScript / CSS.

#### Configurações

Depois de adicionar a fonte e as extensões, setar as configurações (Settings > Open settings.json):

```
{
  // Define o tema do VSCode
  "workbench.colorTheme":"Dracula",

  // Configura tamanho e família da fonte
  "editor.fontSize":16,
  "editor.lineHeight":24,
  "editor.fontFamily":"Fira Code",
  "editor.fontLigatures":true,

  // Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
  "editor.rulers": [
    80,
    120
  ],

  // Aplica um sinal visual na esquerda da linha selecionada
  "editor.renderLineHighlight":"gutter",

  // Aumenta a fonte do terminal
  "terminal.integrated.fontSize":14,

  // Define o tema dos ícones na sidebar
  "workbench.iconTheme":"material-icon-theme",

  // Configura o Prettier e o ESLint
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true
}
```

### [Node.js](https://nodejs.org/)

Interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.

## Bibliotecas

### [Create React App](https://github.com/facebook/create-react-app)

Cria aplicativos React sem configuração de compilação.

### [ESLint](https://github.com/eslint/eslint)

Ferramenta para identificar e relatar padrões em JavaScript. Se o projeto for em Node é recomendado a utilização do guia de estilo 'Standard' e se for em React o guia de estilo do [AirBnB](https://www.npmjs.com/package/eslint-config-airbnb-base).

### [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

Realiza o redirecionamento das rotas.

### [Axios](https://github.com/axios/axios)

Cliente HTTP baseado em promessas.

## APIs

### [Node Express API](https://github.com/osvaldokalvaitir/node-express-api)

Contém informações da Node Express API.
