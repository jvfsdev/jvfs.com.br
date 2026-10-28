# Site pessoal

Site estático em HTML, CSS e um pouco de JavaScript. Sem framework, sem build.

- `index.html`: o conteúdo, em português e inglês (cada texto tem `lang="pt-BR"` e `lang="en"`)
- `style.css`: o visual
- `script.js`: o botão PT/EN
- `assets/`: imagens

## Ver no seu computador

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000.

## Publicar com GitHub Pages (grátis)

1. Crie um repositório público no GitHub, por exemplo `site`, e envie estes arquivos.
2. No repositório: **Settings → Pages → Build and deployment**. Em *Source* escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
3. Crie um arquivo chamado `CNAME` (sem extensão) na raiz, contendo só o seu domínio, por exemplo `seudominio.com.br`. Ou preencha *Custom domain* em Settings → Pages, que faz a mesma coisa.

## Apontar o domínio do Registro.br

No painel do Registro.br, abra o domínio e vá em **DNS → Configurar zona DNS** (ou *Editar zona*). Se o domínio estiver usando os servidores do próprio Registro.br, adicione:

| Tipo  | Nome  | Valor                  |
|-------|-------|------------------------|
| A     | (vazio, o domínio raiz) | 185.199.108.153 |
| A     | (vazio) | 185.199.109.153        |
| A     | (vazio) | 185.199.110.153        |
| A     | (vazio) | 185.199.111.153        |
| CNAME | www   | `SEU-USUARIO.github.io.` |

Depois que o DNS propagar (de alguns minutos até algumas horas), volte em **Settings → Pages** no GitHub e marque **Enforce HTTPS**.
