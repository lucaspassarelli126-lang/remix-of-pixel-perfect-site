

## Plano: Substituir banners do carrossel com imagens desktop/mobile

Você enviou 3 pares de imagens (desktop 1920x430 e mobile 1080x420). Vou aplicá-las nos 3 slides do carrossel hero.

### Mapeamento dos banners

| Slide | Desktop (1920x430) | Mobile (1080x420) |
|-------|--------------------|--------------------|
| 1 - Glasses Catálogos | `Black_and_White_...1920_x_430_px.png` | `Black_and_White_...1080_x_420_px.png` |
| 2 - Gente que ama | `Gente_que_ama_Post_Instagram.png` | `Gente_que_ama_...1080_x_420_px.png` |
| 3 - Óculos de sol | `Post_para_instagram_...1920_x_430_px.png` | `Post_para_instagram_...1080_x_420_px.png` |

### Passos

1. **Copiar as 6 imagens** para `src/assets/banners/` com nomes limpos (`banner1-desktop.png`, `banner1-mobile.png`, etc.)

2. **Atualizar `HeroBanner.tsx`**:
   - Importar as 6 imagens como módulos ES6
   - Remover o layout de texto/CTA atual dos banners
   - Cada slide renderiza duas `<img>`: uma com `hidden md:block` (desktop) e outra com `block md:hidden` (mobile)
   - Imagens com `w-full h-auto object-cover` para preencher o slide perfeitamente
   - Manter setas de navegação e dots por cima das imagens

### Detalhes técnicos
- Aspect ratio fixo via container: desktop `aspect-[1920/430]`, mobile `aspect-[1080/420]` para garantir enquadramento perfeito sem corte
- `object-cover` + `w-full h-full` nas imagens dentro do container com aspect ratio
- Navegação (setas + dots) mantida com `z-20` sobre as imagens

