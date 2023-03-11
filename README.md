# E-Sports-Management

## Instruções locais

Para rodar o banco de dados localmente você vai precisar:

1. Renomear o arquivo `/back-end/.env.exemplo` para `.env` e substituir por suas variaveis postgres locais

2. Dentro da pasta back-end, instalar as dependências:

```
npm install
```

3. Ainda no back-end, rodar o arquivo `database.sql` com a linha de comando postgres:

```
psql -U postgres 
\i database.sql
\q
```

4. Rodar o back-end:

```
npm run dev
```

5. Dentro da pasta `front-end/my-react-app`, instalar as dependências:

```
npm install
```

6. Rodar a aplicaçao front-end:

```
npm start
```
