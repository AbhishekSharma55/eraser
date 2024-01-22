"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1031],{2058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(5893),s=t(1151);const o={title:"Custom Scanner"},a=void 0,c={id:"custom-scanner",title:"Custom Scanner",description:"Creating a Custom Scanner",source:"@site/docs/custom-scanner.md",sourceDirName:".",slug:"/custom-scanner",permalink:"/eraser/docs/next/custom-scanner",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Custom Scanner"},sidebar:"sidebar",previous:{title:"Releasing",permalink:"/eraser/docs/next/releasing"},next:{title:"Trivy",permalink:"/eraser/docs/next/trivy"}},i={},d=[{value:"Creating a Custom Scanner",id:"creating-a-custom-scanner",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"creating-a-custom-scanner",children:"Creating a Custom Scanner"}),"\n",(0,r.jsxs)(n.p,{children:["To create a custom scanner for non-compliant images, use the following ",(0,r.jsx)(n.a,{href:"https://github.com/eraser-dev/eraser-scanner-template/",children:"template"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to customize your scanner, start by creating a ",(0,r.jsx)(n.code,{children:"NewImageProvider()"}),". The ImageProvider interface can be found can be found ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(429).Z+"",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ImageProvider will allow you to retrieve the list of all non-running and non-excluded images from the collector container through the ",(0,r.jsx)(n.code,{children:"ReceiveImages()"})," function. Process these images with your customized scanner and threshold, and use ",(0,r.jsx)(n.code,{children:"SendImages()"})," to pass the images found non-compliant to the eraser container for removal. Finally, complete the scanning process by calling ",(0,r.jsx)(n.code,{children:"Finish()"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When complete, provide your custom scanner image to Eraser in deployment."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},429:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/scanner_template-1354bd0e962dd16dc5001599d249b071.go"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(7294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);