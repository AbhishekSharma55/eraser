"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2510],{7937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(5893),o=n(1151);const a={title:"Metrics"},s=void 0,i={id:"metrics",title:"Metrics",description:"To view Eraser metrics, you will need to deploy an Open Telemetry collector in the 'eraser-system' namespace, and an exporter. An example collector with a Prometheus exporter is otelcollector.yaml, and the endpoint can be specified using the configmap. In this example, we are logging the collected data to the otel-collector pod, and exporting metrics through Prometheus at 'http8889/metrics', but a separate exporter can also be configured.",source:"@site/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/eraser/docs/next/metrics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Metrics"},sidebar:"sidebar",previous:{title:"Customization",permalink:"/eraser/docs/next/customization"},next:{title:"Setup",permalink:"/eraser/docs/next/setup"}},c={},l=[{value:"Eraser",id:"eraser",level:4},{value:"Scanner",id:"scanner",level:4},{value:"ImageJob",id:"imagejob",level:4}];function d(e){const t={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To view Eraser metrics, you will need to deploy an Open Telemetry collector in the 'eraser-system' namespace, and an exporter. An example collector with a Prometheus exporter is ",(0,r.jsx)(t.a,{href:"https://github.com/eraser-dev/eraser/blob/main/test/e2e/test-data/otelcollector.yaml",children:"otelcollector.yaml"}),", and the endpoint can be specified using the ",(0,r.jsx)(t.a,{href:"https://eraser-dev.github.io/eraser/docs/customization#universal-options",children:"configmap"}),". In this example, we are logging the collected data to the otel-collector pod, and exporting metrics through Prometheus at '",(0,r.jsx)(t.a,{href:"http://localhost:8889/metrics",children:"http://localhost:8889/metrics"}),"', but a separate exporter can also be configured."]}),"\n",(0,r.jsx)(t.p,{children:"Below is the list of metrics provided by Eraser per run:"}),"\n",(0,r.jsx)(t.h4,{id:"eraser",children:"Eraser"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"- count\n\t- name: images_removed_run_total\n\t\t- description: Total images removed by eraser\n"})}),"\n",(0,r.jsx)(t.h4,{id:"scanner",children:"Scanner"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"- count\n   - name: vulnerable_images_run_total\n   \t- description: Total vulnerable images detected\n"})}),"\n",(0,r.jsx)(t.h4,{id:"imagejob",children:"ImageJob"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"- count\n   - name: imagejob_run_total\n   \t- description: Total ImageJobs scheduled\n   - name: pods_completed_run_total\n   \t- description: Total pods completed\n   -  name: pods_failed_run_total\n   \t- description: Total pods failed\n- summary\n   - name: imagejob_duration_run_seconds\n   \t- description: Total time for ImageJobs scheduled to complete\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);