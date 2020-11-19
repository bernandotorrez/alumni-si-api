# Adonis API application

## How to Use
1. Copy .env.example to .env
2. Create Database
3. Set the valid .env
4. run : 
```bash
adonis key:generate
```
5. run : 
```bash
adonis migration:run
```

5. run : 
```bash
adonis seed
```

6. run : 
```bash
adonis serve --dev
```

## Note
To My REST API Consumer :

To see all Available API, please Open the REST API BASE URL
e.g : http://127.0.0.1:333/

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
