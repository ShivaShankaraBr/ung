const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('playwright');
const root=__dirname,workspace=path.resolve(root,'..');
const local=f=>path.join(root,f),hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
if(fs.existsSync(local('execucao-evidencias.json'))||fs.existsSync(local('01-tela-inicial-mvp.png')))throw Error('Captura já iniciada; não repetir geração automaticamente.');
const app='https://retomada-de-projetos-ia.lovable.app/';
const github='https://github.com/ShivaShankaraBr/retomada-projetos-ia';
const reportPath=path.join(workspace,'holdout-final','relatorio-holdout-final.md');
const report=fs.readFileSync(reportPath,'utf8');
const scenario=report.match(/Cenários aprovados:\s*\*\*(\d+)\/(\d+)\*\*/);
const criteria=report.match(/Critérios atendidos:\s*\*\*(\d+)\/(\d+)\*\*/);
const percent=report.match(/Percentual de atendimento:\s*\*\*([\d,]+%)\*\*/);
if(!scenario||!criteria||!percent||!report.includes('Uma geração por cenário')||!report.includes('A revisão humana é necessária'))throw Error('Não foi possível confirmar dados no relatório fonte');
const baseline={};function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['node_modules','.git','evidencias-av2'].includes(e.name))continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else baseline[p]=hash(p);}}walk(workspace);
const name='Site da Associação Cultural';
const input='O conteúdo das páginas Quem Somos e Contato já foi revisado. Foi decidido manter o formulário de contato simples. A publicação do site ainda depende da revisão da página de atividades. Foi sugerido adicionar uma área de notícias no futuro, mas essa ideia não foi aprovada. Há uma anotação sobre revisão das imagens, porém não existe informação indicando se essa revisão já foi concluída.';
const images=[],errors=[];
const record={objetivo:'Captura de evidências visuais AV2, sem nova bateria de validação',inicioUTC:new Date().toISOString(),url:app,nomeProjeto:name,entradaExata:input,aspasExternas:'Aspas tipográficas da solicitação interpretadas como delimitadores do exemplo, não parte do conteúdo.',geracoesSolicitadas:0,relatorioFonte:reportPath,sha256RelatorioFonte:hash(reportPath),playwright:require('playwright/package.json').version,node:process.version,etapas:[],erros:errors};
const persist=()=>fs.writeFileSync(local('execucao-evidencias.json'),JSON.stringify(record,null,2));
const date=()=>({dataHoraUTC:new Date().toISOString(),dataHoraLocal:new Date().toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo'}),fuso:'America/Sao_Paulo'});
async function shot(target,file,page,source,description,kind='página inteira'){
 await target.screenshot({path:local(file),...(kind==='página inteira'?{fullPage:true}:{}),animations:'disabled'});
 const b=fs.readFileSync(local(file));
 images.push({arquivo:file,status:'capturada',...date(),origem:source,viewport:page.viewportSize(),dimensoesImagem:{largura:b.readUInt32BE(16),altura:b.readUInt32BE(20)},tipoCaptura:kind,descricao:description,sha256:hash(local(file))});persist();
}
const html=`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Validação final do MVP</title><style>
*{box-sizing:border-box}body{margin:0;background:#f3f5f7;color:#142b3b;font-family:"Segoe UI",Arial,sans-serif}main{width:1120px;margin:56px auto;background:#fff;border:1px solid #d9e1e6;border-radius:18px;overflow:hidden}.top{padding:40px 48px 30px;border-top:8px solid #086d83}.eyebrow{text-transform:uppercase;letter-spacing:2px;font-size:13px;font-weight:700;color:#086d83}h1{font-size:46px;line-height:1.15;margin:14px 0 12px;font-weight:700}.subtitle{font-size:20px;line-height:1.5;margin:0;color:#536a78}.badge{display:inline-block;background:#e9f5f5;color:#075a66;border-radius:30px;padding:9px 16px;margin-top:22px;font-size:17px;font-weight:600}.content{padding:0 48px 36px}.hero{display:flex;align-items:center;justify-content:space-between;border:1px solid #d3e8e8;background:#f0f8f8;border-radius:12px;padding:24px 32px;margin:0 0 24px}.hero strong{font-size:84px;line-height:1.1;letter-spacing:-4px;color:#076a72}.hero div{max-width:360px;font-size:22px;line-height:1.45}.hero span{display:block;font-size:16px;color:#58747c;margin-top:7px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.card{padding:22px 26px;background:#fff;border:1px solid #dce4e9;border-radius:10px}.card strong{font-size:32px;display:block;line-height:1.3}.card span{display:block;color:#526b79;font-size:18px;margin-top:6px}.method{display:flex;gap:20px;align-items:center;justify-content:space-between;padding:22px 0;font-size:18px;color:#415e6d}.note{background:#fff7e8;border-left:4px solid #c08722;padding:16px 20px;font-size:20px;line-height:1.4}.source{border-top:1px solid #e1e7eb;padding:20px 48px 24px;font-size:14px;line-height:1.65;color:#637682}.source strong{color:#294b5b}
</style></head><body><main><header class="top"><div class="eyebrow">Retomada de Projetos · evidência do holdout</div><h1>Validação final do MVP</h1><p class="subtitle">Resultados da bateria controlada final já documentada.</p><div class="badge">${scenario[2]} cenários inéditos</div></header><section class="content"><div class="hero"><strong>${percent[1]}</strong><div>de atendimento dos critérios<span>Validação funcional controlada, com cenários simulados.</span></div></div><div class="grid"><div class="card"><strong>${scenario[1]}/${scenario[2]} cenários aprovados</strong><span>Resultado exclusivo do holdout final</span></div><div class="card"><strong>${criteria[1]}/${criteria[2]} critérios atendidos</strong><span>Uma falha localizada no teste 44</span></div></div><div class="method"><span>Uma geração por cenário</span><span>Sem nova execução dos testes</span></div><div class="note"><strong>Revisão humana permanece necessária</strong></div></section><footer class="source"><strong>Fonte:</strong> holdout-final/relatorio-holdout-final.md · coleta em 21/11/2026.<br>Resumo visual de evidência histórica. O resultado não representa eficácia universal ou confiabilidade absoluta.</footer></main></body></html>`;
fs.writeFileSync(local('resumo-validacao-final.html'),html,{flag:'wx'});persist();
(async()=>{
 const browser=await chromium.launch({channel:'chromium'});record.chromium=browser.version();persist();
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000},permissions:['clipboard-read','clipboard-write']});
  const page=await context.newPage();
  try{
   const response=await page.goto(app,{waitUntil:'networkidle',timeout:60000});record.httpAplicacao=response.status();
   await page.locator('#info').waitFor();await page.evaluate(()=>document.fonts.ready);
   if(await page.locator('#nome').inputValue()||await page.locator('#info').inputValue())throw Error('Tela inicial não está vazia');
   await shot(page,'01-tela-inicial-mvp.png',page,app,'Tela inicial desktop: título, nome do projeto, informações disponíveis e botão Gerar checkpoint, antes de preencher os campos.');
   await page.locator('#info').fill(input);await page.locator('#nome').fill(name);
   record.preenchimentoConferido=await page.locator('#info').inputValue()===input&&await page.locator('#nome').inputValue()===name;
   if(!record.preenchimentoConferido)throw Error('Divergência no exemplo preenchido');
   await shot(page,'02-exemplo-de-entrada.png',page,app,'Exemplo fictício Site da Associação Cultural preenchido com o texto fornecido, antes de qualquer geração.');
   record.geracoesSolicitadas=1;record.cliqueGerarUTC=new Date().toISOString();persist();
   await page.getByRole('button',{name:'Gerar checkpoint',exact:true}).click();
   await page.getByRole('button',{name:'Copiar checkpoint',exact:true}).waitFor({timeout:180000});
   record.geracaoConcluidaUTC=new Date().toISOString();record.paginaGerada=await page.locator('body').innerText();persist();
   await shot(page,'03-checkpoint-gerado.png',page,app,'Aplicação após a única geração do exemplo fornecido: formulário e checkpoint completo, sem editar a resposta.');
   try{
    const heading=page.getByRole('heading',{name:'Checkpoint de Retomada',exact:true});
    const handle=await heading.evaluateHandle(node=>{let e=node;while(e){if(e.querySelector('button')&&e.textContent.includes('Baixar .md')&&e.textContent.includes('Próximo passo')&&!e.querySelector('#info'))return e;e=e.parentElement;}return null;});
    const area=handle.asElement();if(!area)throw Error('Contêiner do checkpoint não identificado');
    record.areaCheckpoint={tag:await area.evaluate(e=>e.tagName),limites:await area.boundingBox()};
    await shot(area,'04-checkpoint-detalhe.png',page,app,'Recorte direto do contêiner do checkpoint gerado, com as seis seções e controles; sem reconstrução ou alteração do conteúdo.','elemento do checkpoint');await handle.dispose();
   }catch(e){errors.push({etapa:'Detalhe do checkpoint',mensagem:e.message});images.push({arquivo:'04-checkpoint-detalhe.png',status:'pendente',motivo:e.message,origem:app,viewport:page.viewportSize()});}
   await page.getByRole('button',{name:'Copiar checkpoint',exact:true}).click();record.checkpointIntegral=await page.evaluate(()=>navigator.clipboard.readText());persist();
  }catch(e){errors.push({etapa:'Aplicação desktop/exemplo',mensagem:e.message});persist();}
  await context.close();
  const summaryContext=await browser.newContext({viewport:{width:1440,height:1000}});const summary=await summaryContext.newPage();
  try{const source=pathToFileURL(local('resumo-validacao-final.html')).href;await summary.goto(source,{waitUntil:'load'});await summary.evaluate(()=>document.fonts.ready);await shot(summary,'05-validacao-final.png',summary,source,'Resumo visual local construído exclusivamente a partir do relatório do holdout:10 cenários,9/10 aprovados,59/60 critérios,98,33%, uma geração e revisão humana necessária.');}catch(e){errors.push({etapa:'Resumo local',mensagem:e.message});}await summaryContext.close();
  const mobileContext=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});const mobile=await mobileContext.newPage();
  try{await mobile.goto(app,{waitUntil:'networkidle',timeout:60000});await mobile.locator('#info').waitFor();await mobile.evaluate(()=>document.fonts.ready);if(await mobile.locator('#nome').inputValue()||await mobile.locator('#info').inputValue())throw Error('Mobile não está vazio');record.mobileSemOverflow=await mobile.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth);await shot(mobile,'06-versao-mobile.png',mobile,app,'Tela inicial responsiva em viewport390×844, contexto novo e campos vazios; nenhuma geração mobile.');}catch(e){errors.push({etapa:'Mobile',mensagem:e.message});}await mobileContext.close();
  const repoContext=await browser.newContext({viewport:{width:1440,height:1000}});const repo=await repoContext.newPage();
  try{
   const response=await repo.goto(github,{waitUntil:'domcontentloaded',timeout:60000});await repo.waitForLoadState('networkidle',{timeout:20000}).catch(()=>{});await repo.evaluate(()=>document.fonts.ready);
   const body=await repo.locator('body').innerText();record.github={url:github,http:response.status(),urlFinal:repo.url(),verificadoSemAutenticacao:true};
   if(response.status()===200&&body.includes('retomada-projetos-ia')&&!body.includes('This repository is private')){
    record.github.arquivos={README:/README/i.test(body),PROMPT_IA_RETOMADA_PROJETOS:body.includes('PROMPT_IA_RETOMADA_PROJETOS.md'),PROMPT_LOVABLE_RETOMADA_PROJETOS:body.includes('PROMPT_LOVABLE_RETOMADA_PROJETOS.md')};
    record.github.todosElementosPresentes=Object.values(record.github.arquivos).every(Boolean);
    await shot(repo,'07-repositorio-github.png',repo,github,'Página principal pública do repositório GitHub, capturada sem autenticação. A presença dos arquivos solicitados está registrada em execucao-evidencias.json.');
    if(!record.github.todosElementosPresentes)images.at(-1).observacao='Página pública capturada, mas nem todos os arquivos solicitados foram identificados no texto da página.';
   }else{record.github.status='Evidência pendente: repositório não acessível publicamente nesta verificação.';images.push({arquivo:'07-repositorio-github.png',status:'pendente',...date(),origem:github,viewport:repo.viewportSize(),motivo:`HTTP ${response.status()}; não foi obtida uma página pública do repositório.`});}
  }catch(e){record.github={url:github,status:'pendente',erro:e.message};images.push({arquivo:'07-repositorio-github.png',status:'pendente',...date(),origem:github,viewport:repo.viewportSize(),motivo:e.message});}await repoContext.close();
 }finally{
  await browser.close();record.fimUTC=new Date().toISOString();persist();
  const changed=Object.keys(baseline).filter(p=>!fs.existsSync(p)||hash(p)!==baseline[p]);
  const integrity={algoritmo:'SHA-256',arquivosPreexistentesVerificados:Object.keys(baseline).length,todosIntactos:changed.length===0,alterados:changed,relatorioFonte:{arquivo:reportPath,sha256Antes:record.sha256RelatorioFonte,sha256Depois:hash(reportPath)}};
  fs.writeFileSync(local('integridade-projeto.json'),JSON.stringify(integrity,null,2));
  fs.writeFileSync(local('manifest-evidencias.json'),JSON.stringify({objetivo:record.objetivo,ferramenta:'Playwright + Chromium',versoes:{playwright:record.playwright,chromium:record.chromium,node:record.node},fuso:'America/Sao_Paulo',inicioUTC:record.inicioUTC,fimUTC:record.fimUTC,geracoesSolicitadas:record.geracoesSolicitadas,nenhumaBateriaReexecutada:true,relatorioFonte:reportPath,imagens:images,problemas:errors,repositorio:record.github,integridade:integrity},null,2));
  console.log(JSON.stringify({imagens:images.map(i=>({arquivo:i.arquivo,status:i.status,dimensoes:i.dimensoesImagem})),erros:errors,github:record.github,integridade:integrity,geracoes:record.geracoesSolicitadas}));
 }
})();
