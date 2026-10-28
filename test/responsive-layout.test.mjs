import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
function loadWithDocument(document){let client;vm.runInNewContext(require('node:fs').readFileSync(new URL('../lib/client.js',import.meta.url),'utf8'),{window:{__ModuleLoader__:{load:definition=>{client=definition.factory(require)}}},document,fetch:globalThis.fetch,Date,URLSearchParams,setInterval,clearInterval});return client;}
test('responsive styles compact and widen Mate XT layout',()=>{
 const styles=[];const document={readyState:'complete',querySelector:()=>null,createElement:()=>({dataset:{},textContent:''}),head:{appendChild:style=>styles.push(style)}};loadWithDocument(document);
 const responsive=styles.find(style=>style.dataset.pluginCss==='dsh-peak-indicator/narrow.css');assert.ok(responsive,'responsive stylesheet should be installed');
 const rules=[
  /100dvh/,
  /max-width: 2600px/,
  /max-width:760px;margin-inline:auto/,
  /grid-template-columns:32px minmax\(0,1fr\) auto 32px/,
  /grid-template-rows:auto auto auto/,
  /row-gap:2px;padding:2px 12px 2px!important/,
  /wSkVaW_titleRow\{display:contents\}/,
  /wSkVaW_titleCluster\{display:contents\}/,
  /wSkVaW_headerLeading\{grid-column:1;grid-row:1/,
  /wSkVaW_crumbs\{grid-column:1\/-1;grid-row:1/,
  /wSkVaW_crumbs[^}]*padding-inline:84px;justify-content:center;text-align:center/,
  /wSkVaW_headerActions\{grid-column:1\/-1;grid-row:2/,
  /wSkVaW_headerActions[^}]*justify-self:center/,
  /wSkVaW_headerUtilities\{grid-column:3;grid-row:1/,
  /wSkVaW_headerCorner\{grid-column:4;grid-row:1/,
  /wSkVaW_tabs\{grid-column:1\/-1;grid-row:3/,
  /@media \(min-width: 550px\) and \(max-width: 2600px\)\{\.wSkVaW_header\{max-width:none\}/,
  /@container \(max-width: 460px\)\{\.wSkVaW_headerActions\{width:100%;flex-wrap:wrap/,
  /wSkVaW_headerActions>\*\{flex:0 0 auto;white-space:nowrap/,
  /wSkVaW_body\{--dsh-chat-user-width:calc\(100% - 48px\)!important\}/,
  /wSkVaW_composerHero\{padding-bottom:8px!important;padding-bottom:max\(8px,env\(safe-area-inset-bottom\)\)!important/,
  /@media \(min-width: 550px\) and \(max-width: 2600px\)\{html:not\(\[data-platform=darwin\]\):not\(\[data-windows-titlebar\]\) \.pI_x6G_frame\[data-sidebar-collapsed\] \.hHd-Xa_root \.hHd-Xa_toggle\{position:fixed!important/,
  /\.pI_x6G_frame:not\(\[data-sidebar-collapsed\]\) \.hHd-Xa_root \.hHd-Xa_logoRow\{position:relative\}/,
  /\.pI_x6G_frame:not\(\[data-sidebar-collapsed\]\) \.hHd-Xa_root \.hHd-Xa_logoRow \.hHd-Xa_toggle\{position:absolute!important;top:8px!important;right:8px!important;left:auto!important/,
  /hHd-Xa_root \.hHd-Xa_toggle \.hHd-Xa_panelIcon\{display:inline!important\}/,
  /hHd-Xa_root \.hHd-Xa_toggle \.hHd-Xa_railMark\{display:none!important\}/,
  /safe-area-inset-top/,
  /overflow-x:auto;overflow-y:hidden/,
  /data-sidebar-right-panel=fullscreen/,
  /width:calc\(100vw - 56px\)!important/,
  /data-compact-label/
 ];
 for(const rule of rules)assert.match(responsive.textContent,rule);
});
