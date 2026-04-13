

## Plano: Gerar logos das marcas para a seção "Explore por Marcas"

Atualmente cada marca mostra apenas uma letra dentro de um círculo. Vou gerar imagens de logo para cada marca e atualizar o componente para exibi-las.

### Marcas (7 logos)

| Marca | Estilo do logo |
|-------|---------------|
| Prada | Logo wordmark clássico preto |
| Ray-Ban | Logo wordmark vermelho/branco |
| Vogue | Logo wordmark elegante |
| Miu Miu | Logo wordmark minimalista |
| Guess | Logo triângulo invertido |
| Dii Collection | Logo wordmark clean |
| Hit Eyewear | Logo wordmark moderno |

### Passos

1. **Gerar 7 logos** via API Gemini — cada logo em fundo transparente/branco, estilo wordmark profissional, adequado para uso em círculos
2. **Salvar** em `src/assets/brands/` como `prada.png`, `rayban.png`, etc.
3. **Atualizar `BrandsSection.tsx`**:
   - Importar as 7 imagens
   - Substituir a letra por `<img>` dentro do círculo
   - Manter o layout circular com hover e responsividade existentes
   - Fundo branco nos círculos para contraste com os logos

### Detalhes técnicos
- Imagens com `object-contain` + padding interno para os logos ficarem bem enquadrados dentro dos círculos
- Círculos mantêm `w-16 h-16 md:w-20 md:h-20` com `bg-white` e borda sutil

