# Meu Carro

Controle de troca de óleo e manutenção por quilometragem, com alertas. Funciona como PWA (instala na tela inicial do iPhone e do Android).

© 2026 Adriel Fernando. Todos os direitos reservados.

## Publicar no GitHub Pages (grátis)
1. Crie uma conta em github.com e um repositório novo chamado `km-em-dia` (público).
2. Clique em **Add file → Upload files** e envie TODO o conteúdo desta pasta (index.html, manifest.json, sw.js, LICENSE.txt e a pasta icons).
3. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o app fica em `https://SEU-USUARIO.github.io/`.

## Instalar no iPhone
1. Abra o endereço acima no **Safari**.
2. Toque em Compartilhar → **Adicionar à Tela de Início**.

## Instalar no Android
Abra no Chrome e toque em **Instalar app** (ou menu ⋮ → Adicionar à tela inicial).

## Observações
- Os dados ficam salvos no próprio aparelho (navegador). Use Ajustes → Exportar JSON para fazer backup.
- Depois de alterar o app, mude `CACHE = 'km-em-dia-v1'` em `sw.js` para `v2` para os aparelhos pegarem a nova versão.
