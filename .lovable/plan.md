

## Plano: Reduzir proporção dos cards de faixa de preço

O aspect ratio atual é `aspect-[4/5]` (retrato alto). Vou reduzir para que os cards fiquem mais compactos e proporcionais ao texto.

### Alteração

**`src/components/PriceRangeSection.tsx`** (linha 23):
- Trocar `aspect-[4/5]` por `aspect-[5/4]` (paisagem/mais largo que alto) para que o card se ajuste melhor ao conteúdo textual
- Reduzir padding de `p-4` para `p-3` para manter o texto bem enquadrado

