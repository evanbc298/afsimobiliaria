# Setup — publicação automática no Instagram + Facebook (Meta Graph API)

Guia de referência pro pré-requisito do `/aprovar-post`. Configuração única — depois de
pronta, as publicações seguintes são automáticas.

Status: Instagram (@afsimobiliaria) já vinculado à Página do Facebook no Meta Business
Suite. Falta: criar o App no Meta for Developers e gerar as credenciais.

## Passo 1 — Criar o App no Meta for Developers

1. Acessar https://developers.facebook.com/apps e logar com o Facebook que administra a
   Página da AFS.
2. "Criar app" → tipo **"Empresa" (Business)**.
3. Nome sugerido: `AFS Imobiliária - Automação` (só interno, não aparece pro público).
4. Vincular ao Portfólio de negócios da AFS no Business Manager (se pedir).
5. No painel do App, adicionar o produto **"Instagram Graph API"** (Adicionar produto →
   procurar "Instagram" → Configurar).

## Passo 2 — Gerar o token de acesso (via Graph API Explorer)

1. Acessar https://developers.facebook.com/tools/explorer
2. No topo, selecionar o App criado no passo 1.
3. Em "User or Page", escolher **User Token**.
4. Clicar em "Permissions" e marcar:
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_posts`
   - `instagram_basic`
   - `instagram_content_publish`
   - `business_management`
5. "Generate Access Token" → aceitar as permissões que o Facebook pedir.
6. Esse token dura ~1h — é só uma etapa intermediária pro passo 3.

## Passo 3 — Trocar por um token de longa duração

Token de usuário de vida longa (~60 dias, mas na prática o **Page Access Token** gerado a
partir dele não expira enquanto a integração continuar ativa):

```bash
curl -i -X GET "https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=<APP_ID>&client_secret=<APP_SECRET>&fb_exchange_token=<TOKEN_CURTO_DO_PASSO_2>"
```

`APP_ID` e `APP_SECRET` ficam em Configurações → Básico, no painel do App.

## Passo 4 — Pegar o Page Access Token + Page ID

```bash
curl -i -X GET "https://graph.facebook.com/v21.0/me/accounts?access_token=<TOKEN_LONGO_DO_PASSO_3>"
```

Retorna a lista de Páginas administradas. Anotar, da Página da AFS:
- `id` → isso é o `META_PAGE_ID`
- `access_token` → isso é o `META_PAGE_ACCESS_TOKEN` (esse sim, não expira sozinho)

## Passo 5 — Pegar o Instagram Business Account ID

```bash
curl -i -X GET "https://graph.facebook.com/v21.0/<META_PAGE_ID>?fields=instagram_business_account&access_token=<META_PAGE_ACCESS_TOKEN>"
```

Retorna `{"instagram_business_account": {"id": "..."}}` → isso é o `META_IG_USER_ID`.

## Passo 6 — Preencher o `.env`

Na raiz do `MazyOS/`, criar `.env` (já está no `.gitignore`, não sobe pro GitHub):

```bash
META_PAGE_ACCESS_TOKEN=...
META_PAGE_ID=...
META_IG_USER_ID=...
SITE_URL=https://afsimobiliaria.com.br
```

## Passo 7 — Modo de desenvolvimento é suficiente

Não precisa passar pela App Review da Meta pra postar na própria Página/conta — isso só é
exigido pra apps que vão publicar em contas de terceiros. Como admin do App e da Página,
o token do passo 4 já funciona em modo Development.

## Troubleshooting comum

- **"Invalid OAuth access token"**: token expirou ou foi copiado errado — repetir passo 2-4.
- **`instagram_business_account` vazio no passo 5**: Instagram não está de fato vinculado à
  Página (voltar no Meta Business Suite → Configurações → Contas vinculadas).
- **Erro de permissão ao postar**: falta alguma permission do passo 2 — regenerar o token.
