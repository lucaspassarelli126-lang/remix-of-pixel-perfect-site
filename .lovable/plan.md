

## Plano de Otimização de Performance — Desktop e Mobile

### Problema
O site carrega ~5MB em imagens (banners: 2.7MB, produtos: 2MB, marcas: 329KB), todas em PNG sem compressão. Além disso, há animações pesadas do Framer Motion e componentes que poderiam ser carregados sob demanda.

### O que será feito

**1. Converter imagens PNG para WebP (maior impacto)**
- Usar `vite-plugin-image-optimizer` ou script de build para converter todas as imagens para WebP
- Alternativa: converter manualmente os PNGs para WebP com qualidade 80%, reduzindo ~70-80% do tamanho
- Banners desktop de ~1MB → ~150-200KB cada
- Produtos de ~200KB → ~40-60KB cada

**2. Lazy loading e otimização de componentes abaixo da dobra**
- Usar `React.lazy()` + `Suspense` para carregar sob demanda: `LensesSection`, `StaggerTestimonials`, `Newsletter`, `Footer`
- Adicionar `loading="lazy"` e dimensões explícitas (`width`/`height`) em todas as imagens que ainda não têm
- A imagem do `LensesSection` (premium-model.png) não tem `loading="lazy"`

**3. Otimizar o HeroBanner (LCP — Largest Contentful Paint)**
- Adicionar `<link rel="preload">` para o primeiro banner desktop e mobile no `index.html`
- Manter `fetchPriority="high"` apenas no primeiro slide (já está correto)

**4. Reduzir bundle de animações**
- Substituir `motion` do Framer Motion nos componentes simples (BrandsSection, ProductCarousel, LensesSection) por animações CSS com `@keyframes` e `IntersectionObserver`
- Isso remove ~30-40KB do bundle JS

**5. Otimizar CSS e assets**
- Remover `App.css` (não está sendo usado — contém estilos do template Vite padrão)
- Adicionar `content-visibility: auto` nas seções abaixo da dobra para melhorar rendering

**6. Adicionar dimensões explícitas às imagens**
- Evitar layout shift (CLS) adicionando `width` e `height` em `ProductCard`, `HeroBanner`, e `LensesSection`

### Detalhes técnicos

- As imagens serão convertidas via script usando `sharp` (Node.js) e os imports atualizados de `.png` para `.webp`
- Os componentes lazy-loaded terão fallback com skeleton/placeholder
- As animações CSS usarão `animation-fill-mode: both` e `will-change: opacity, transform`

### Resultado esperado
- Redução de ~60-70% no peso total da página
- LCP melhorado significativamente (primeiro banner carrega mais rápido)
- Scroll mais fluido no mobile sem animações JS pesadas

