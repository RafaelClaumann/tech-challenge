# Desafio Delivery Much - API Node.js (Giphy e RecipePuppy)

[Descrição do Desafio](https://github.com/RafaelClaumann/tech-challenge/blob/master/DESCRIPTION.md)


## Pre-requisitos
<blockquote>
  Node.js <br> 
  Docker <br>
  Docker-Compose <br>
</blockquote>

<br>

---


## Iniciando Aplicaçao
  clonar o repositório, extrair os arquivos, acessar a pasta e executar os comandos.<br>
  <blockquote>
    npm install<br>
    docker-compose up<br>
  </blockquote>
  

<br>

---

## Endpoint Disponivel</h2>
>-Este endpoint busca por receitas da **API RecipePuppy** baseado nos ingredentes passados como query params. <br>
>-São aceitos no **máximo 3 ingredientes**. <br>
```JSON
GET: localhost:3000/recipes/?i=param1,param2,param3
```
  
``` JSON
{
  "keywords": ["onion", "tomato"],
  "recipes": [{
    "title": "Greek Omelet with Feta",
    "ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
    "link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
    "gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
    },{
      "title": "Guacamole Dip Recipe",
      "ingredients": ["avocado", "onions", "tomato"],
      "link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
      "gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
    }
  ]
}
```
