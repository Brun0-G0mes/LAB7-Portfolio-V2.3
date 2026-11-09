# LAB 7 — Servidor estático (Portfólio V2.3)

Projeto da disciplina de Programação Full Stack, utilizando Node.js e Express.

## Como executar no VS Code

1. Instale o Node.js (caso não esteja instalado).
2. Abra a pasta `LAB7-Portfolio-V2.3` no VS Code.
3. Abra o terminal **nesta pasta**.
4. Execute `npm install` para instalar o Express.
5. Execute `npm start` (ou `node servidor.js`).
6. Abra `http://localhost/`.

O projeto utiliza a **porta 80**, conforme o enunciado.

## Páginas para testar

- `http://localhost/Página-principal/index.html`
- `http://localhost/Página-projetos/projects.html`
- `http://localhost/Página-copiando-modelo/copiando-modelo.html`
- `http://localhost/Página-jogo-advinhação/guess.html`
- `http://localhost/Página-canvas/Canvas.html`
- `http://localhost/Página-animação/animacao.html`

## Acesso por outro computador

1. Mantenha o servidor rodando no computador principal.
2. Abra o Prompt de Comando do Windows e digite `ipconfig`.
3. Procure o `Endereço IPv4` da sua rede (por exemplo `192.168.1.105`).
4. Conecte outro computador à mesma rede e acesse `http://192.168.1.105/` (substitua pelo IP real).
5. Caso não abra, verifique as permissões do Firewall do Windows e a conectividade entre os computadores.

**Importante:** o GitHub hospeda os arquivos do projeto, mas não executa o Node.js automaticamente. Para demonstrar o servidor, ele precisa estar em execução em um computador acessível pela rede.

## Entrega no GitHub

Publique a pasta do projeto contendo `servidor.js`, `public/`, `package.json`, `package-lock.json` (se gerado), `.gitignore` e este README. Não publique `node_modules/`.
