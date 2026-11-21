# Prompt para criar ou adaptar o Retomada de Projetos IA no Lovable

Crie ou adapte uma aplicação web chamada **Retomada de Projetos IA**.

Se este for um projeto novo, construa o MVP descrito abaixo.

Se já existir uma aplicação com esta finalidade, preserve o que estiver funcionando e ajuste somente o necessário. Não redesenhe a arquitetura sem necessidade e não acrescente funcionalidades fora do escopo.

## Objetivo

O aplicativo deve receber registros desorganizados de um projeto e usar inteligência artificial generativa para montar um checkpoint de retomada.

A aplicação serve para organizar o contexto disponível quando o usuário precisa continuar um trabalho interrompido.

## Interface

Criar uma página única, responsiva e em português do Brasil.

Título: **Retomada de Projetos com IA**

Subtítulo: **Transforme registros dispersos em um checkpoint para continuar de onde parou.**

Campo opcional: **Nome do projeto**

Campo principal: **Informações disponíveis sobre o projeto**

Botão: **Gerar checkpoint**

Durante o processamento, mostrar: **Analisando o contexto do projeto...**

## Resultado

Gerar o checkpoint com estas seis seções, nesta ordem:

1. Estado atual do projeto
2. Atividades já realizadas
3. Decisões tomadas
4. Pendências
5. Problemas identificados
6. Próximo passo

Adicionar também:

- **Copiar checkpoint**
- **Baixar .md**
- **Limpar**

O arquivo Markdown deve conter o mesmo checkpoint exibido na tela.

## Escopo

Não adicionar sem solicitação:

- login;
- cadastro;
- histórico permanente;
- painel administrativo;
- pagamentos;
- colaboração entre usuários;
- RAG;
- funcionalidades sem relação direta com a retomada.

## Regras da IA

Use como protocolo interno as mesmas regras do arquivo **RETOMADA_PROJETOS_IA.md** deste repositório.

Em especial:

- não inventar informações;
- não transformar sugestões em decisões ou obrigações;
- distinguir fatos de hipóteses e suspeitas;
- não tratar atividades planejadas como realizadas;
- considerar corretamente decisões substituídas;
- distinguir pendência confirmada de estado desconhecido;
- não tratar ausência de registro como prova de ausência;
- preservar contradições;
- permitir verificações seguras;
- não ser excessivamente conservador quando houver uma verificação útil;
- ignorar ruído irrelevante;
- gerar sempre as seis seções na ordem definida.

Antes da resposta, conferir também se uma decisão de executar uma ação no futuro foi apresentada incorretamente como ação já concluída.

## Critérios mínimos de aceite

A aplicação deve permitir:

1. informar nome do projeto;
2. inserir texto longo;
3. gerar checkpoint por IA;
4. mostrar as seis seções;
5. preservar incertezas importantes sem inventar estado;
6. não transformar sugestões em decisões ou obrigações;
7. não apresentar ações planejadas como realizadas;
8. preservar contradições;
9. copiar o checkpoint;
10. baixar em Markdown;
11. limpar formulário e resultado;
12. funcionar em desktop e celular.

Mantenha o projeto simples, legível e funcional.
