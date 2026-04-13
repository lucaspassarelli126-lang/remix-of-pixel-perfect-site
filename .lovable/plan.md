

# Plano: Adicionar imagens do banner para desktop e mobile

## O que será feito
Adicionar as duas imagens enviadas ao carrossel hero banner — a imagem wide (1920x430) para desktop e a imagem mais quadrada (1080x420) para mobile. Cada slide mostrará a imagem correta conforme o tamanho da tela.

## Passos

1. **Copiar as imagens** para `src/assets/`:
   - `banner-desktop.png` — imagem 1920x430
   - `banner-mobile.png` — imagem 1080x420

2. **Atualizar `HeroBanner.tsx`**:
   - Importar as duas imagens como módulos ES6
   - Adicionar campos `desktopImage` e `mobileImage` ao primeiro banner do array
   - No render, quando o banner tiver imagem, exibir com `<picture>` ou classes `hidden md:block` / `block md:hidden` para alternar entre desktop e mobile
   - A imagem ocupa 100% da largura do slide como background/cover
   - Os outros banners continuam com o layout de texto atual

## Detalhes técnicos
- Usar `<img>` com `object-cover` e `w-full` para preencher o slide
- Classes responsivas: `hidden md:block` para desktop, `block md:hidden` para mobile
- Manter setas de navegação e dots por cima da imagem

