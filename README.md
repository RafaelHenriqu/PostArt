# 📂 PostArt

Um projeto simples de upload e exibição de imagens, focado em praticar Back-end com Express e integração com banco de dados MySQL.  
**Desenvolvido em 1 dia** como desafio pessoal.

---

## 🚀 Funcionalidades

- Upload de imagens via formulário (URL da imagem).
- Listagem de todas as publicações salvas no banco.
- Sistema de rotas para enviar e receber dados.
- Integração com banco de dados MySQL.
- Organização de pastas por responsabilidade (`/view`, `/public`, `/Sass`).
- Uso de variáveis de ambiente com `dotenv`.
- Front-end minimalista com CSS/SCSS customizado.

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- HTML5
- CSS3 (Sass)

---

## 📂 Estrutura de pastas

```
/public
  /Sass        -> Estilos (CSS/SCSS)
  /scripts     -> Scripts (opcional)

/view
  Index.html   -> Página inicial (listagem das imagens)
  Upload.html  -> Página de envio de imagens

.env           -> Variáveis de ambiente
server.js      -> Servidor Express principal
```

---

## 📋 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/RafaelHenriqu?tab=repositories/PostArt.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` com suas credenciais do MySQL:
```dotenv
Host=localhost
User=root
Password=sua_senha
Database=nome_do_banco
Port=3306
```

4. Crie a tabela no seu banco de dados MySQL:
```sql
CREATE TABLE publication (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255),
  Author VARCHAR(255),
  Path TEXT
);
```

5. Inicie o servidor:
```bash
node server.js
```

6. Acesse no navegador:
```
http://localhost:5000
```

---

## ⚠️ Observações

- Este projeto não implementa sistemas de autenticação/login.
- O foco foi a prática de integração back-end e organização de projeto.
- Para fins de produção, é recomendado adicionar:
  - Validação de dados recebidos.
  - Tratamento de erros.
  - Sistemas de autenticação e proteção de rotas.

---

## 📜 Autor

Feito com dedicação por **Rafael Henrique**.  
Desenvolvido como desafio de 1 dia para praticar e evoluir no back-end.

---

# 🧑‍🧒
> "Grandes resultados vêm da constância em pequenos passos."

---

## Sugestão de descrição do repositório

**Nome:** `PostArt`

**Descrição:** `Plataforma simples para upload e listagem de imagens, utilizando Node.js, Express e MySQL. Desenvolvido como desafio pessoal.`

