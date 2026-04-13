

## Plano: Gerar imagens de óculos para os cards de produto

As imagens atuais dos produtos vêm de URLs externas (oticasdiniz.vtexassets.com) que provavelmente estão quebradas. Vou gerar 10 imagens de óculos usando IA e salvá-las como assets locais.

### Produtos que precisam de imagens (10 total)

**Queridinos (6):**
1. Óculos de Grau Dii Collection 2215 — armação retangular clássica
2. Óculos de Grau Hit Eyewear A01 — armação moderna
3. Óculos de Sol Ray-Ban Justin RB4165L — sol retangular preto
4. Óculos de Grau Guess GU2937 — armação feminina elegante
5. Óculos de Sol Dii Collection SL2001 — sol aviador
6. Óculos de Sol Prada PR 17WS — sol cat-eye luxo

**Ray-Ban (4):**
7. Ray-Ban Aviador RB3025L — aviador dourado clássico
8. Ray-Ban Wayfarer RB2140 — wayfarer preto
9. Ray-Ban Clubmaster RB3016L — clubmaster
10. Ray-Ban Erika RB4171L — redondo feminino

### Passos

1. **Gerar 10 imagens** via API Gemini (modelo de geração de imagem), cada uma mostrando o óculos em fundo branco limpo, estilo e-commerce profissional — similar à referência enviada
2. **Salvar as imagens** em `src/assets/products/` com nomes como `product-1.png`, `product-rb1.png`, etc.
3. **Atualizar `src/data/products.ts`** para importar as imagens locais ao invés das URLs externas
4. **Atualizar `ProductCard.tsx`** se necessário para garantir que as imagens renderizam corretamente

### Detalhes técnicos
- Imagens geradas com prompt específico por modelo: fundo branco, óculos centralizado, estilo catálogo profissional
- Imports ES6 no `products.ts` para cada imagem
- Tipo `imageUrl` continuará como `string` (funciona com imports ES6)

