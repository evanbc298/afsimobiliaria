# Setup — publicação automática no Instagram + Facebook (Meta Graph API)

Guia de referência pro pré-requisito do `/aprovar-post`. Configuração única — depois de
pronta, as publicações seguintes são automáticas.

Status: Instagram (@afsimobiliaria) já vinculado à Página do Facebook no Meta Business
Suite. Falta: criar o App no Meta for Developers e gerar as credenciais.

## Checkpoint (2026-07-20) — onde paramos

O fluxo real do Meta em 2026 mudou bastante em relação ao roteiro "clássico" abaixo
(Passos 1-5). O que funcionou de fato:

- App criado: nome **"AFS"**, App ID `1801719960802723`, já vinculado ao portfólio de
  negócios da AFS Imobiliária. App ID + Secret já estão no `.env` local
  (`META_APP_ID`, `META_APP_SECRET`).
- Caso de uso adicionado: **"Gerenciar mensagens e conteúdo no Instagram"** (produto
  "API do Instagram com Login do Instagram" — não é mais o antigo "Instagram Graph API"
  ligado à Página).
- O **Graph API Explorer** (Passo 2 abaixo) não funcionou direto — o dropdown "Página"
  pedia escopos antigos inválidos (`manage_pages`) e o token de usuário não trazia as
  permissões certas até a gente resolver o passo seguinte.
- **O que resolveu:** dentro do painel do app → Casos de uso → "Gerenciar mensagens e
  conteúdo no Instagram" → **Personalizar** → aba **"Permissões e recursos"** — é lá que
  se "declara" quais permissões o app pode pedir (sem isso, o Explorer não mostra nada
  pra selecionar). Já adicionamos (status "Pronto para teste"):
  - `instagram_business_basic`
  - `instagram_business_content_publish`
  - `business_management`
  - `pages_read_engagement`
  - `pages_show_list`
  - `pages_manage_posts` **não apareceu na lista** — pertence a outro produto (Login do
    Facebook pra Empresas), não à API do Instagram. Precisa ser adicionado depois, numa
    etapa separada, só pra resolver a publicação no Facebook.
- **Próximo passo (retomar aqui):** na aba **"Configuração da API com login..."** do
  mesmo caso de uso, seção **"2. Gerar tokens de acesso"** → botão **"Adicionar conta"**.
  Isso deve abrir o login com a conta @afsimobiliaria e gerar um token do tipo Instagram
  (prefixo `IGAA...`), diferente do token de Página clássico.
- **Atenção:** um token gerado por esse fluxo (`graph.instagram.com`) é diferente do que
  os scripts `postar-instagram.js`/`postar-facebook.js` esperam hoje (que usam
  `graph.facebook.com` + Page Access Token clássico). Se o resultado final for um token
  `IGAA...`, os scripts vão precisar de ajuste antes de funcionar — não presumir que dá
  pra só colar no `.env` sem revisar.
- Facebook (Página) ainda nem começou — fica pra depois de fechar o Instagram.

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
