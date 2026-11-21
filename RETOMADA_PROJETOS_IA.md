# Retomada de Projetos IA

## Arquivo de protocolo para uso em qualquer inteligência artificial

Este arquivo contém as regras do protocolo **Retomada de Projetos IA**.

Ele foi preparado para ser anexado a uma IA generativa. Depois de anexá-lo, forneça os registros disponíveis sobre um projeto e peça que a IA gere o checkpoint de retomada seguindo este protocolo.

## Como usar

1. Anexe este arquivo à IA de sua preferência.
2. Informe o nome do projeto.
3. Cole ou envie os registros disponíveis.
4. Peça: **"Use o protocolo Retomada de Projetos IA deste arquivo e gere o checkpoint."**
5. Revise o resultado antes de utilizá-lo como registro definitivo.

Exemplo:

> Use o protocolo Retomada de Projetos IA anexado.  
> Projeto: Site institucional.  
> Registros disponíveis: [cole aqui as informações do projeto].

---

# PROTOCOLO

## Objetivo

Organizar registros dispersos de um projeto interrompido e produzir um checkpoint curto que ajude o usuário a entender onde o trabalho parou e o que deve ser verificado ou feito em seguida.

A IA deve analisar somente o material fornecido e não completar lacunas com suposições.

## Estrutura obrigatória da resposta

A resposta deve conter exatamente estas seis seções, nesta ordem:

### 1. Estado atual do projeto
Resuma o ponto em que o projeto se encontra com base apenas nos registros fornecidos.

### 2. Atividades já realizadas
Liste somente atividades que o material indique como concluídas ou executadas.

### 3. Decisões tomadas
Liste somente decisões efetivamente tomadas e ainda relevantes para o estado atual.

### 4. Pendências
Liste atividades que comprovadamente ainda precisam ser realizadas e, quando necessário, verificações de estado claramente apresentadas como verificações.

### 5. Problemas identificados
Registre bloqueios, falhas, contradições, dependências ou lacunas relevantes para a continuidade.

### 6. Próximo passo
Indique a ação mais coerente e segura para continuar o projeto.

---

# REGRAS DE INTERPRETAÇÃO

## 1. Não inventar informações

Não crie fatos, decisões, atividades concluídas, pendências, problemas, datas ou resultados que não estejam sustentados pelos registros.

Quando uma informação necessária realmente não puder ser identificada e não houver uma verificação segura a indicar, use:

**Não identificado no material fornecido.**

## 2. Fato, hipótese, suspeita e sugestão não são a mesma coisa

Considere como fato apenas aquilo que os registros apresentem como ocorrido ou confirmado.

Não transforme hipótese em fato, suspeita em diagnóstico, possibilidade em decisão, recomendação em obrigação ou sugestão não aprovada em pendência.

## 3. Atividade planejada não é atividade realizada

Uma decisão de executar algo não significa que a execução já aconteceu.

Uma atividade aprovada, planejada, prevista ou agendada só pode aparecer em "Atividades já realizadas" se houver registro de que foi realmente executada.

## 4. Decisões substituídas

Quando uma decisão mais recente substituir explicitamente uma anterior, considere a nova decisão como vigente.

A decisão antiga não deve ser apresentada como se ainda estivesse valendo. Se a mudança for importante para entender o projeto, registre que houve substituição.

## 5. Pendência confirmada e estado desconhecido são diferentes

### Pendência confirmada

Existe evidência de que a atividade ainda precisa ser realizada. Nesse caso, ela pode ser apresentada como pendência.

### Estado desconhecido

A atividade ou etapa aparece nos registros, mas não existe informação suficiente para saber se foi concluída, continua pendente ou foi cancelada.

Nesse caso:

- não trate como concluída;
- não trate como pendente sem evidência;
- não omita se ela for relevante para a continuidade.

Prefira formulações como:

**"Não foi possível determinar pelo material se esta etapa já foi concluída."**

ou:

**"Verificar se esta atividade já foi realizada."**

## 6. Ausência de registro não prova ausência do fato

Se o material disser que não existe registro de determinada ação, não conclua automaticamente que ela não aconteceu.

Exemplo:

Registro: "Não há informação sobre a compra da passagem de volta."

Resposta incorreta: "A passagem de volta ainda não foi comprada."

Resposta segura: "Verificar se a passagem de volta já foi comprada."

## 7. Contradições devem ser preservadas

Quando existirem informações incompatíveis, não escolha arbitrariamente qual delas é verdadeira.

Registre a divergência em **Problemas identificados**.

Se esclarecer a contradição for necessário para continuar o trabalho, ela pode orientar o **Próximo passo**.

## 8. Verificações seguras são permitidas

Quando uma informação relevante estiver incerta e puder ser confirmada antes da continuidade, a IA pode sugerir ações como verificar, confirmar, validar ou conferir.

A verificação não deve ser escrita como se o fato incerto já estivesse definido.

## 9. Evitar conservadorismo excessivo

Não inventar informações não significa omitir tudo o que estiver incerto.

Se uma incerteza for importante para continuar o projeto, preserve essa incerteza e indique a verificação necessária.

## 10. Ignorar ruído

Informações claramente alheias ao objetivo, ao estado ou à continuidade do projeto devem ser ignoradas.

Não inclua um detalhe apenas porque ele apareceu nos registros.

---

# FORMATO DA RESPOSTA

# Checkpoint de Retomada

**Projeto:** [nome informado ou "Não informado"]

## 1. Estado atual do projeto
[conteúdo]

## 2. Atividades já realizadas
[conteúdo]

## 3. Decisões tomadas
[conteúdo]

## 4. Pendências
[conteúdo]

## 5. Problemas identificados
[conteúdo]

## 6. Próximo passo
[conteúdo]

---

# CONFERÊNCIA ANTES DE RESPONDER

Antes de entregar o checkpoint, confira internamente:

- alguma sugestão virou decisão sem aprovação?
- alguma sugestão virou obrigação?
- alguma hipótese ou suspeita virou fato?
- alguma atividade planejada foi apresentada como concluída?
- alguma decisão futura foi apresentada como ação já executada?
- alguma etapa com estado desconhecido virou pendência sem evidência?
- alguma etapa relevante de estado desconhecido foi omitida?
- alguma ausência de registro virou prova de que algo não aconteceu?
- alguma decisão substituída foi apresentada como vigente?
- alguma contradição foi resolvida sem evidência?
- alguma informação irrelevante foi incorporada?
- o próximo passo está sustentado pelos registros?

Entregue apenas o checkpoint final ao usuário.

---

# Observação de uso

O protocolo funciona como apoio à retomada de projetos e não como fonte definitiva da verdade.

As respostas devem ser revisadas pelo usuário, principalmente quando os registros forem incompletos, contraditórios ou envolverem decisões importantes.

Projetos reais também podem conter dados confidenciais. Antes de anexar registros a uma IA, avalie as condições de privacidade da ferramenta utilizada.
