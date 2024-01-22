"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9722],{1001:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=i(5893),n=i(1151);const t={title:"Exclusion"},o=void 0,a={id:"exclusion",title:"Exclusion",description:"Excluding registries, repositories, and images",source:"@site/versioned_docs/version-v1.1.x/exclusion.md",sourceDirName:".",slug:"/exclusion",permalink:"/eraser/docs/v1.1.x/exclusion",draft:!1,unlisted:!1,tags:[],version:"v1.1.x",frontMatter:{title:"Exclusion"},sidebar:"sidebar",previous:{title:"Manual Removal",permalink:"/eraser/docs/v1.1.x/manual-removal"},next:{title:"Customization",permalink:"/eraser/docs/v1.1.x/customization"}},c={},l=[{value:"Excluding registries, repositories, and images",id:"excluding-registries-repositories-and-images",level:2},{value:"Exempting Nodes from the Eraser Pipeline",id:"exempting-nodes-from-the-eraser-pipeline",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"excluding-registries-repositories-and-images",children:"Excluding registries, repositories, and images"}),"\n",(0,r.jsxs)(s.p,{children:["Eraser can exclude registries (example, ",(0,r.jsx)(s.code,{children:"docker.io/library/*"}),") and also specific images with a tag (example, ",(0,r.jsx)(s.code,{children:"docker.io/library/ubuntu:18.04"}),") or digest (example, ",(0,r.jsx)(s.code,{children:"sha256:80f31da1ac7b312ba29d65080fd..."}),") from its removal process."]}),"\n",(0,r.jsxs)(s.p,{children:["To exclude any images or registries from the removal, create configmap(s) with the label ",(0,r.jsx)(s.code,{children:"eraser.sh/exclude.list=true"})," in the eraser-system namespace with a JSON file holding the excluded images."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'$ cat > sample.json <<"EOF"\n{\n  "excluded": [\n    "docker.io/library/*",\n    "ghcr.io/eraser-dev/test:latest"\n  ]\n}\nEOF\n\n$ kubectl create configmap excluded --from-file=sample.json --namespace=eraser-system\n$ kubectl label configmap excluded eraser.sh/exclude.list=true -n eraser-system\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exempting-nodes-from-the-eraser-pipeline",children:"Exempting Nodes from the Eraser Pipeline"}),"\n",(0,r.jsxs)(s.p,{children:["Exempting nodes from cleanup was added in v1.0.0. When deploying Eraser, you can specify whether there is a list of nodes you would like to ",(0,r.jsx)(s.code,{children:"include"})," or ",(0,r.jsx)(s.code,{children:"exclude"})," from the cleanup process using the configmap. For more information, see the section on ",(0,r.jsx)(s.a,{href:"https://eraser-dev.github.io/eraser/docs/customization",children:"customization"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>a,a:()=>o});var r=i(7294);const n={},t=r.createContext(n);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);