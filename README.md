# Desafio Front-End: Simulação de Loja Virtual com React

Aplicação front-end desenvolvida como parte de um desafio técnico. O projeto simula uma loja virtual completa e funcional, demonstrando habilidades em React, gerenciamento de estado, consumo de APIs e estilização moderna com CSS Modules.

---

## 💡 Funcionalidades Principais

O aplicativo implementa o fluxo essencial de uma experiência de e-commerce:

* **Listagem de Produtos Dinâmica:** A página inicial busca e exibe os produtos de uma API REST simulada com `json-server`.
* **Página de Detalhes:** Navegação para uma visão detalhada de cada produto, com informações específicas e um botão de ação.
* **Carrinho de Compras Funcional:** Utiliza a **Context API** do React para um gerenciamento de estado global do carrinho, permitindo adicionar, remover e atualizar a quantidade de itens de qualquer lugar da aplicação.
* **Persistência do Carrinho:** O conteúdo do carrinho é salvo no `localStorage` do navegador, garantindo que os itens não sejam perdidos ao recarregar a página.
* **Roteamento com React Router:** Navegação fluida e declarativa entre as páginas de loja, produto e carrinho.

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Biblioteca Principal:** **React** (com Hooks: `useState`, `useEffect`, `useContext`)
* **Roteamento:** **React Router DOM**
* **Gerenciamento de Estado:** **Context API**
* **Estilização:** **CSS Modules**
* **API Simulada:** **JSON Server**
* **Controle de Versão:** Git / GitHub

---

## 🚀 Como Executar o Projeto Localmente

Para rodar a aplicação, você precisará iniciar a API simulada e o servidor de desenvolvimento do React em terminais separados.

### 🔧 Pré-requisitos

* [Node.js](https://nodejs.org/) (v18+)
* `json-server` instalado globalmente (se não tiver, rode: `npm install -g json-server`)

### ▶️ Executando

1.  **Clone o repositório:**
    ```bash
    git clone (https://github.com/GustavoGarbim/TesteTecnico.git)
    ```

2.  **Abra dois terminais** na pasta do projeto.

3.  **No Terminal 1 - Inicie a API Simulada:**
    ```bash
    json-server --watch db.json --port 3001
    ```

4.  **No Terminal 2 - Inicie a Aplicação React:**
    * Primeiro, instale as dependências:
      ```bash
      npm install
      ```
    * Em seguida, inicie o servidor de desenvolvimento:
      ```bash
      npm run dev 
      ```

5.  **Acesse a aplicação** no seu navegador, no endereço que aparecer no terminal (geralmente `http://localhost:5173` ou `http://localhost:3000`).
