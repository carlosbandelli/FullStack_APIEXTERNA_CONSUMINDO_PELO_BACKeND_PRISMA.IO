# FullStack_APIEXTERNA_CONSUMINDO_PELO_BACKeND_PRISMA.IO

 Projeto comsumo de API externa gravando no banco de dados
 
 <a href="https://front-end-theta-five.vercel.app/">Clique aqui para acessar a pagina e ver minha aplicação</a>


<a href="https://github.com/carlosbandelli">
<img alt="Autor" src="https://img.shields.io/badge/autor-CarlosBandelli-004400?style=flat-square">
</a>

<a href="#">
<img alt="Linguagens" src="https://img.shields.io/github/languages/count/carlosbandelli/FullStack_APIEXTERNA_CONSUMINDO_PELO_BACKeND_PRISMA.IO?color=004400&style=flat-square">
</a>

<a href="#">
<img alt="Tamanho do código em bytes" src="https://img.shields.io/github/languages/code-size/carlosbandelli/FullStack_APIEXTERNA_CONSUMINDO_PELO_BACKeND_PRISMA.IO?color=004400&style=flat-square">
</a>

<a href="https://github.com/carlosbandelli/Cards/commits/main">
<img alt="Commits" src="https://img.shields.io/github/last-commit/carlosbandelli/Cards?color=004400&style=flat-square">
</a>
<hr/>

<div style="margin: 0 auto;">
<img src="asset_Readme/films.gif">
</div>

## 💡 Sobre o projeto:

Este projeto faz parte de um desafio que consistia em desenvolver  uma aplicação consumisse uma api externa e gravasse no banco de dados e usasse essas informação para exibição no front-end. Sobre a parte técnica do desafio foi requisitado a utilização das seguintes tecnologias. Para Back-end: Node.js e  banco de dados. Para o Front-end foram utilizadas as tecnologias Vite.js+ React + Typescript. 

##🔥 Quais são as funcionalidades?

-Iniciamos com uma pagina de 10 filmes contendo Titulo, Descrição, Produção e Imagem.<br/>


## ⚙️ Techs:
### 💾 BACK-END
-Node.js <br/>
-Express <br/>
-Prisma.io (SQLite: Banco de Dados) <br/>
-Typescript <br/>

### 📺 FRONT-END
-React.js <br/>
-Axios <br/>
-Typescript <br/>

<hr/>

## ⛏ Ferramentas:

- [Visual Studo Code](https://code.visualstudio.com/download)

## 🏁 Configuração ambiente:

Para executar a aplicação:
Precisa fazer o git clone do projeto<br/>
Fique á vontade para clonar de quaisquer uma das seguintes chaves na sua maquina<br/>

#### Chave SSH:
```bash
 git clone git@github.com:carlosbandelli/FullStack_APIEXTERNA_CONSUMINDO_PELO_BACKeND_PRISMA.IO.git
```

#### Chave HTTPS:
```
git clone https://github.com/carlosbandelli/FullStack_APIEXTERNA_CONSUMINDO_PELO_BACKeND_PRISMA.IO.git

```
### 💾 BACK-END:

Abra um terminal direto da pasta server e execute o comando no terminal

```
npm install
```

Àpos a instalação, com o terminal aberto na pasta server execute o comando:

```
npm run dev
```

### 📺 FRONT-END:

Abra um terminal direto da pasta raiz e execute o comando no terminal

```
npm install
```

# Importante no FRONT-END, para se fazer requisição para o back-end existe 2 URL uma <strong>Local</strong> e outra <strong>Remota</strong> , por padrão ja vem configurado REMOTA. Se quiser alterar usar a variavel já existente, abaixo estão os nomes das vaiaveis:

```
const apiRemote = "https://146.190.215.239:3334/movies";
const apiLocal = "http://localhost:3333/movies";

```


 Nesta parte apos instalar as dependencia vá na pasta raiz e utilize o comando
 
 ```
 npm run dev
 
 ```
 
 Após a instalação em sua maquina acesse a documentação das rota por aqui, <a href="https://localhost:3334/api-docs/#/Film/get_movies">clique aqui!</a>
 




