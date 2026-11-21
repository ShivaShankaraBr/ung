# Retomada de Projetos IA

Projeto acadêmico desenvolvido na disciplina **Laboratório de Projetos Inovadores**, do curso de Tecnologia em Inteligência Artificial.

## O que é

O Retomada de Projetos IA foi criado para ajudar quando um projeto fica parado e, na hora de continuar, as informações estão espalhadas em anotações, conversas, documentos ou registros diferentes.

A proposta é transformar esse material em um checkpoint com seis partes:

1. Estado atual do projeto
2. Atividades já realizadas
3. Decisões tomadas
4. Pendências
5. Problemas identificados
6. Próximo passo

## Aplicação funcionando

https://retomada-de-projetos-ia.lovable.app/

A aplicação permite colar os registros disponíveis, gerar o checkpoint, copiar o resultado e salvar em Markdown.

## Como reutilizar o projeto

### Usar em qualquer inteligência artificial

Baixe ou abra o arquivo **RETOMADA_PROJETOS_IA.md**. Ele foi preparado para ser anexado em uma IA generativa como ChatGPT, Claude, Gemini ou outra ferramenta que aceite arquivos Markdown.

Depois de anexar, basta pedir que a IA use o protocolo do arquivo e fornecer os registros do projeto que deseja retomar.

### Criar ou adaptar uma aplicação no Lovable

Use **PROMPT_LOVABLE_RETOMADA_PROJETOS.md**. O arquivo contém a estrutura da interface e as regras do protocolo utilizadas para criar um MVP semelhante.

## Validação

O projeto passou por várias etapas de testes automatizados com cenários simulados:

- 8 cenários na fase inicial;
- 8 cenários inéditos em uma segunda bateria;
- 20 cenários inéditos na etapa de hardening;
- 10 cenários inéditos no holdout final;
- além de retestes específicos durante o desenvolvimento.

No holdout final, **59 dos 60 critérios avaliados foram atendidos**, correspondentes a **98,33% dentro daquela bateria controlada**. Nove dos dez cenários foram aprovados integralmente.

Esse resultado não representa eficácia universal. A validação foi simulada e controlada, com uma geração por cenário, e a revisão humana continua necessária.

## Limitação observada

No único critério não atendido no holdout final, uma decisão futura de desmontar uma mesa para transporte foi apresentada como se a desmontagem já tivesse sido realizada.

O caso foi mantido como limitação da versão final, em vez de gerar uma regra específica apenas para fazê-lo passar.

## Privacidade

Projetos reais podem conter dados pessoais, comerciais ou confidenciais. Antes de enviar esse tipo de conteúdo a uma ferramenta de IA, verifique as condições de privacidade e tratamento de dados do serviço utilizado.

## Autor

Luiz Henrique Camacho Correra  
Tecnologia em Inteligência Artificial
