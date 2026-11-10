# Segurança Digital — site estático

Projeto em HTML, CSS e JavaScript, empacotado com Vite e preparado para GitHub Pages.

## Executar localmente

```bash
npm install
npm run dev
```

## Gerar versão de produção

```bash
npm run build
```

A pasta final será `dist/`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para a branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. A cada `push` na `main`, o workflow `.github/workflows/deploy.yml` fará o deploy.

## Atualizar conteúdos

Edite apenas `src/content.js` para alterar:

- títulos;
- resumos;
- explicações;
- sinais de alerta;
- orientações;
- checklist geral.

O HTML é gerado automaticamente pelo `src/main.js`.

## Adicionar botões futuramente

Cada tema possui a propriedade `buttons` em `src/content.js`.

Exemplo:

```js
buttons: [
  {
    label: 'Acessar serviço',
    href: 'https://exemplo.com',
    external: true
  }
]
```

Quando `buttons` estiver vazio (`[]`), nenhum botão extra aparece.

## Estrutura

```text
.
├── .github/workflows/deploy.yml
├── public/
│   └── assets/logo-decc.png
├── src/
│   ├── content.js
│   ├── main.js
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Não há API, banco de dados, autenticação ou framework de interface.
