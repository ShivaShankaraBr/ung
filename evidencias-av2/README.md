# Evidências visuais para a AV2

Projeto: **Retomada de Projetos: automatizando a recuperação de contexto com inteligência artificial**.

Capturas realizadas em **21/11/2026**, entre **01:38:49 e 01:39:10**, no fuso America/Sao_Paulo, com **Playwright 1.65.1 e Chromium 159.0.8154.6**. A aplicação foi acessada em https://retomada-de-projetos-ia.lovable.app/.

Esta tarefa produziu evidências de apresentação. **Não executou nova bateria de validação**, não modificou o aplicativo ou protocolo e não alterou testes/relatórios existentes. Houve **uma única geração**, exclusivamente com o exemplo fictício fornecido pelo usuário. A redação produzida não foi corrigida ou reconstruída para a captura e não recebeu nova classificação de aceitação nesta tarefa.

## Imagens

| Arquivo | Dimensões da imagem | O que documenta |
|---|---:|---|
| [01-tela-inicial-mvp.png](01-tela-inicial-mvp.png) | 1440 × 1000 | Tela inicial antes de qualquer preenchimento: título, nome, informações do projeto e botão Gerar checkpoint. O botão aparece desabilitado porque os campos estão vazios, comportamento original da aplicação. |
| [02-exemplo-de-entrada.png](02-exemplo-de-entrada.png) | 1440 × 1000 | Campos preenchidos com **Site da Associação Cultural** e exatamente o conteúdo fictício solicitado, antes da geração. As aspas tipográficas externas do enunciado foram tratadas como delimitadores, não como parte do texto. |
| [03-checkpoint-gerado.png](03-checkpoint-gerado.png) | 1440 × 1993 | Página inteira após a única geração: exemplo de entrada e resposta completa. |
| [04-checkpoint-detalhe.png](04-checkpoint-detalhe.png) | 728 × 1035 | Captura direta somente do contêiner do checkpoint, com as seis seções e os controles. Não é uma reprodução HTML da resposta. |
| [05-validacao-final.png](05-validacao-final.png) | 1440 × 1000 | Resumo visual do holdout já documentado:10 cenários inéditos,9/10 aprovados,59/60 critérios,98,33%, uma geração por cenário e necessidade de revisão humana. Não são métricas obtidas de uma nova execução. |
| [06-versao-mobile.png](06-versao-mobile.png) | 390 × 964 | Tela inicial responsiva em contexto novo, com viewport **390 × 844**. A imagem de página inteira tem altura maior que o viewport para incluir o botão abaixo da dobra. Nenhuma geração foi feita no mobile. |

Todas as seis imagens foram inspecionadas visualmente e estão legíveis na resolução original, sem cortes no conteúdo relevante. O arquivo03 é mais alto por incluir o fluxo completo; evite comprimi-lo de forma desproporcional no relatório. O detalhe04 é a alternativa mais legível caso o campo da foto tenha espaço muito restrito. No mobile, o selo original do Lovable permanece visível, sem alteração da página.

## Recomendação para FOTO 1, FOTO 2 e FOTO 3

Mantida a preferência inicial, pois não houve impedimento técnico:

1. **FOTO 1 — 01-tela-inicial-mvp.png:** apresenta a interface e os controles principais.
2. **FOTO 2 — 03-checkpoint-gerado.png:** demonstra a entrada e o checkpoint completo no aplicativo real. Se a diagramação da AV2 reduzir demais o texto, usar **04-checkpoint-detalhe.png** como alternativa, pois elimina o formulário e as margens externas sem alterar a resposta.
3. **FOTO 3 — 05-validacao-final.png:** apresenta os resultados históricos de validação e a ressalva de revisão humana em formato legível.

## Fonte do resumo da validação

O arquivo [resumo-validacao-final.html](resumo-validacao-final.html) é uma página **local**, criada somente para a apresentação visual. Os números foram extraídos de:

`C:\shiva\retomada-projetos-tests\holdout-final\relatorio-holdout-final.md`

Não houve consulta a novas gerações para calcular essas métricas. A página também informa a falha localizada no teste44 e evita tratar98,33% como eficácia universal. Seu screenshot foi obtido no Chromium em viewport1440×1000. O HTML não foi publicado nem incorporado ao aplicativo.

## Evidência do repositório — pendente

A URL [ShivaShankaraBr/retomada-projetos-ia](https://github.com/ShivaShankaraBr/retomada-projetos-ia) foi aberta no Chromium em contexto sem autenticação e retornou **HTTP404** em21/11/2026 às01:39:10 (America/Sao_Paulo).

Assim, **07-repositorio-github.png não foi criada**: não foi possível documentar uma página pública com o nome do repositório, README e os arquivos PROMPT_IA_RETOMADA_PROJETOS.md e PROMPT_LOVABLE_RETOMADA_PROJETOS.md. O HTTP404 não permite distinguir repositório inexistente de repositório privado/inacessível. Essa evidência ficou pendente, sem impedir as demais. Nenhum repositório foi criado, publicado ou alterado.

## Registros e preservação

- [manifest-evidencias.json](manifest-evidencias.json): nome, data/hora, origem, viewport, dimensões, descrição, SHA-256 e estado de cada evidência; inclui a pendência07.
- [execucao-evidencias.json](execucao-evidencias.json): ferramenta, entrada, conferência do preenchimento, horário da única geração, resposta integral e acesso ao GitHub.
- [integridade-projeto.json](integridade-projeto.json): **400 arquivos preexistentes conferidos por SHA-256, todos intactos**, incluindo o relatório-fonte. Dependências node_modules e metadados .git foram excluídos dessa contagem.
- [capturar-evidencias.cjs](capturar-evidencias.cjs): script usado na captura, com bloqueio contra repetição acidental da geração. **Não o executar novamente para revisar imagens**; os PNGs e o HTML já estão salvos.

O script apresentou um erro somente no `console.log` final, após todas as capturas e registros terem sido gravados. O nome da variável foi corrigido no script local **sem reexecutá-lo**, sem recapturas e sem nova geração; os arquivos salvos foram verificados. A ocorrência está no manifesto. Fora essa falha de log e da pendência pública do GitHub, não houve falha de captura.

## Arquivos criados nesta pasta

Seis PNGs (01 a06), resumo-validacao-final.html, manifest-evidencias.json, README.md, capturar-evidencias.cjs, execucao-evidencias.json e integridade-projeto.json. Toda escrita desta tarefa ficou restrita a esta pasta nova.
