# Gabriel Shopping — Landing Page

Site em Next.js pronto para deploy na [Vercel](https://vercel.com).

## Deploy na Vercel

1. Faça push deste repositório no GitHub (pasta `web` como raiz do projeto **ou** configure o **Root Directory** como `web` nas configurações do projeto na Vercel).
2. Importe o repositório em [vercel.com/new](https://vercel.com/new).
3. Em **Environment Variables**, adicione:
   - `NEXT_PUBLIC_WHATSAPP_PRINCIPAL`
   - `NEXT_PUBLIC_WHATSAPP_GRUPO_1`
   - `NEXT_PUBLIC_WHATSAPP_GRUPO_2`
4. Deploy.

## Links do WhatsApp

Edite `src/config/site.ts` ou use as variáveis de ambiente acima. Quando receber os links dos grupos, substitua os placeholders.

## Desenvolvimento local

**Use sempre `npm run dev`** (modo desenvolvimento):

```bash
cd web
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

> **Erro `ERR_EMPTY_RESPONSE`?** Isso acontece se você rodar `npm start` sem ter feito o build antes. Pare o servidor (Ctrl+C) e use `npm run dev`. O `npm start` agora roda o build automaticamente (`prestart`), mas o `dev` é mais rápido para editar o site.

## Produtos

As fotos estão em `public/products/`. Para adicionar um produto, inclua a imagem e edite o array em `src/config/site.ts`.
