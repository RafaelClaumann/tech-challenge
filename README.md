# Desafio Delivery Much - API Node.js (Giphy e RecipePuppy)

[Descrição do Desafio](https://github.com/RafaelClaumann/tech-challenge/blob/master/DESCRIPTION.md)


## Pre-requisitos
<blockquote>
  Node.js <br> 
  Docker <br>
  Docker-Compose <br>
  Chave de acesso Giphy<br>
</blockquote>

<br>


<blockquote>

  ***Obter a chave de acesso(API_KEY) Giphy:*** <br>
    - criar conta no giphy <br>
    - acessar https://developers.giphy.com/docs/api/#quick-start-guide <br>
    - copiar sua **API_KEY**
</blockquote>
<br>

---


## Iniciando Aplicaçao
  **clonar o repositório, extrair os arquivos, acessar a pasta e...<br>**
  
> **- Alterar** nome do arquivo **.env_example** para **.env** <br>
> **- Colar** sua **API_KEY** no **.env** <br>
> **- Executar** npm install<br>
> **- Executar** docker-compose up<br>
  
  

<br>

---

## Endpoint Disponivel</h2>



>**GET: localhost:3000/recipes/?i=param1,param2,param3 <br>**

>**- Este endpoint busca receitas da API RecipePuppy baseado nos ingredientes passados como query params. <br>**
>**- Para cada receita uma GIF é buscada do Giphy baseada no titulo da receita. <br>**
>**- São aceitos no **máximo 3 ingredientes**. <br>**
  

>**Exemplo de response: <br>**

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

