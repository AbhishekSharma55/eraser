"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[846],{828:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(5893),r=i(1151);const t={title:"Releasing"},l=void 0,a={id:"releasing",title:"Releasing",description:"Overview",source:"@site/versioned_docs/version-v0.5.x/releasing.md",sourceDirName:".",slug:"/releasing",permalink:"/eraser/docs/v0.5.x/releasing",draft:!1,unlisted:!1,tags:[],version:"v0.5.x",frontMatter:{title:"Releasing"},sidebar:"sidebar",previous:{title:"Setup",permalink:"/eraser/docs/v0.5.x/setup"},next:{title:"Custom Scanner",permalink:"/eraser/docs/v0.5.x/custom-scanner"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Building and releasing",id:"building-and-releasing",level:2},{value:"Publishing",id:"publishing",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The release process consists of three phases: versioning, building, and publishing."}),"\n",(0,s.jsx)(n.p,{children:"Versioning involves maintaining the following files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Makefile"})," - the Makefile contains a VERSION variable that defines the version of the project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"manager.yaml"})," - the controller-manager deployment yaml contains the latest release tag image of the project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"eraser.yaml"})," - the eraser.yaml contains all eraser resources to be deployed to a cluster including the latest release tag image of the project."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The steps below explain how to update these files. In addition, the repository should be tagged with the semantic version identifying the release."}),"\n",(0,s.jsx)(n.p,{children:"Building involves obtaining a copy of the repository and triggering a build as part of the GitHub Actions CI pipeline."}),"\n",(0,s.jsxs)(n.p,{children:["Publishing involves creating a release tag and creating a new ",(0,s.jsx)(n.em,{children:"Release"})," on GitHub."]}),"\n",(0,s.jsx)(n.h2,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Obtain a copy of the repository."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone git@github.com:eraser-dev/eraser.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If this is a patch release for a release branch, check out applicable branch, such as ",(0,s.jsx)(n.code,{children:"release-0.1"}),". If not, branch should be ",(0,s.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Execute the release-patch target to generate patch. Give the semantic version of the release:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make release-manifest NEWVERSION=vX.Y.Z\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Promote staging manifest to release."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make promote-staging-manifest\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If it's a new minor release (e.g. v0.",(0,s.jsx)(n.strong,{children:"4"}),".x -> 0.",(0,s.jsx)(n.strong,{children:"5"}),".0), tag docs to be versioned. Make sure to keep patch version as ",(0,s.jsx)(n.code,{children:".x"})," for a minor release."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make version-docs NEWVERSION=v0.5.x\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Preview the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git status\ngit diff\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"building-and-releasing",children:"Building and releasing"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Commit the changes and push to remote repository to create a pull request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'git checkout -b release-<NEW VERSION>\ngit commit -a -s -m "Prepare <NEW VERSION> release"\ngit push <YOUR FORK>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once the PR is merged to ",(0,s.jsx)(n.code,{children:"main"})," or ",(0,s.jsx)(n.code,{children:"release"})," branch (",(0,s.jsx)(n.code,{children:"<BRANCH NAME>"})," below), tag that commit with release version and push tags to remote repository."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git checkout <BRANCH NAME>\ngit pull origin <BRANCH NAME>\ngit tag -a <NEW VERSION> -m '<NEW VERSION>'\ngit push origin <NEW VERSION>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pushing the release tag will trigger GitHub Actions to trigger ",(0,s.jsx)(n.code,{children:"release"})," job.\nThis will build the ",(0,s.jsx)(n.code,{children:"ghcr.io/eraser-dev/eraser"})," and ",(0,s.jsx)(n.code,{children:"ghcr.io/eraser-dev/eraser-manager"})," images automatically, then publish the new release tag."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"publishing",children:"Publishing"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["GitHub Action will create a new release, review and edit it at ",(0,s.jsx)(n.a,{href:"https://github.com/eraser-dev/eraser/releases",children:"https://github.com/eraser-dev/eraser/releases"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var s=i(7294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);