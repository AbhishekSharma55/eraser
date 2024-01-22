"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8084],{601:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(5893),t=n(1151);const i={title:"Releasing"},l=void 0,a={id:"releasing",title:"Releasing",description:"Create Release Pull Request",source:"@site/versioned_docs/version-v1.2.x/releasing.md",sourceDirName:".",slug:"/releasing",permalink:"/eraser/docs/v1.2.x/releasing",draft:!1,unlisted:!1,tags:[],version:"v1.2.x",frontMatter:{title:"Releasing"},sidebar:"sidebar",previous:{title:"Setup",permalink:"/eraser/docs/v1.2.x/setup"},next:{title:"Custom Scanner",permalink:"/eraser/docs/v1.2.x/custom-scanner"}},o={},c=[{value:"Create Release Pull Request",id:"create-release-pull-request",level:2},{value:"Publishing",id:"publishing",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"create-release-pull-request",children:"Create Release Pull Request"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Go to ",(0,s.jsx)(r.code,{children:"create_release_pull_request"})," workflow under actions."]}),"\n",(0,s.jsx)(r.li,{children:"Select run workflow, and use the workflow from your branch."}),"\n",(0,s.jsx)(r.li,{children:"Input release version with the semantic version identifying the release."}),"\n",(0,s.jsx)(r.li,{children:"Click run workflow and review the PR created by github-actions."}),"\n"]}),"\n",(0,s.jsx)(r.h1,{id:"releasing",children:"Releasing"}),"\n",(0,s.jsxs)(r.ol,{start:"5",children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Once the PR is merged to ",(0,s.jsx)(r.code,{children:"main"}),", tag that commit with release version and push tags to remote repository."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"git checkout <BRANCH NAME>\ngit pull origin <BRANCH NAME>\ngit tag -a <NEW VERSION> -m '<NEW VERSION>'\ngit push origin <NEW VERSION>\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Pushing the release tag will trigger GitHub Actions to trigger ",(0,s.jsx)(r.code,{children:"release"})," job.\nThis will build the ",(0,s.jsx)(r.code,{children:"ghcr.io/eraser-dev/remover"}),", ",(0,s.jsx)(r.code,{children:"ghcr.io/eraser-dev/eraser-manager"}),", ",(0,s.jsx)(r.code,{children:"ghcr.io/eraser-dev/collector"}),", and ",(0,s.jsx)(r.code,{children:"ghcr.io/eraser-dev/eraser-trivy-scanner"})," images automatically, then publish the new release tag."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"publishing",children:"Publishing"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["GitHub Action will create a new release, review and edit it at ",(0,s.jsx)(r.a,{href:"https://github.com/eraser-dev/eraser/releases",children:"https://github.com/eraser-dev/eraser/releases"})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>l});var s=n(7294);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);