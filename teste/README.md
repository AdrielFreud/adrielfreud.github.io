# Km em Dia

Controle de troca de óleo e manutenção por quilometragem, com alertas e sugestão de óleo do motor e fluido do câmbio (base offline). Funciona como PWA: instala na tela inicial do iPhone e do Android.

© 2026 Adriel Fernando. Todos os direitos reservados.

## Publicar no GitHub Pages (grátis)
1. Crie uma conta em github.com e um repositório público chamado `km-em-dia`.
2. Em **Add file → Upload files**, envie TODO o conteúdo desta pasta (index.html, manifest.json, sw.js, LICENSE.txt, a pasta `icons` e a pasta `dados`).
3. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o app fica em `https://SEU-USUARIO.github.io/km-em-dia/`.

## Instalar no iPhone
Abra o endereço no **Safari** → Compartilhar → **Adicionar à Tela de Início**. Use sempre pelo ícone instalado, para o iOS não apagar seus dados.

## Instalar no Android
Abra no Chrome e toque em **Instalar app**.

## Base de óleos e câmbios
- A base já vem embutida no `index.html` e funciona 100% offline.
- O arquivo `dados/oleos.json` é uma cópia editável: se ele existir ao lado do app, o app usa essa versão no lugar da embutida. Para corrigir ou acrescentar um modelo, edite esse arquivo (motores em `engines`, câmbios em `gearboxes`, carros em `models`).
- Os valores são de referência e podem ter imprecisões. O manual do proprietário sempre prevalece.

## Observações
- Os dados ficam salvos no aparelho. Use Ajustes → Exportar JSON para fazer backup.
- Depois de alterar o app, mude `CACHE = 'km-em-dia-v2'` em `sw.js` para `v3` para os aparelhos pegarem a nova versão.

## Novidades (versão com FIPE e Diagnóstico)
- **Consulta FIPE** na aba Meu Carro (precisa de internet; usa fipe.parallelum.com.br).
- **Diagnóstico** (nova aba): análise offline de CSV exportado do Car Scanner. A leitura OBD2 ao vivo só funciona no app Android nativo (plugin ObdClassic).
- Sugestão offline de óleo de motor e câmbio mantida.

## Scanner OBD2 Bluetooth (aba Diagnóstico)
- Conexão BLE direta no Chrome/Edge (Android/desktop) com adaptadores ELM327 BLE; adaptadores Bluetooth Clássico pelo app Android (plugin ObdClassic).
- Leitura ao vivo (até 30 parâmetros, vários PIDs por comando), gravação de sessão em CSV com análise integrada.
- Falhas armazenadas/pendentes/permanentes com descrição em português, freeze frame, apagar falhas com confirmação.
- Monitores de prontidão, VIN, relatório de saúde e histórico salvo por veículo; sincroniza o odômetro do painel quando suportado.
- "Modo demonstração" simula um ELM327 para testar sem scanner.
