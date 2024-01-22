"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5593],{908:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=r(5893),t=r(1151);const i={title:"Customization"},o=void 0,a={id:"customization",title:"Customization",description:"Overview",source:"@site/versioned_docs/version-v1.0.x/customization.md",sourceDirName:".",slug:"/customization",permalink:"/eraser/docs/v1.0.x/customization",draft:!1,unlisted:!1,tags:[],version:"v1.0.x",frontMatter:{title:"Customization"},sidebar:"sidebar",previous:{title:"Exclusion",permalink:"/eraser/docs/v1.0.x/exclusion"},next:{title:"Metrics",permalink:"/eraser/docs/v1.0.x/metrics"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Basic architecture",id:"basic-architecture",level:3},{value:"Scheduling",id:"scheduling",level:3},{value:"Fault Tolerance",id:"fault-tolerance",level:3},{value:"Excluding Nodes",id:"excluding-nodes",level:3},{value:"Configuring Components",id:"configuring-components",level:3},{value:"Swapping out components",id:"swapping-out-components",level:3},{value:"Universal Options",id:"universal-options",level:2},{value:"Component Options",id:"component-options",level:2},{value:"Scanner Options",id:"scanner-options",level:2},{value:"Detailed Options",id:"detailed-options",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Eraser uses a configmap to configure its behavior. The configmap is part of the\ndeployment and it is not necessary to deploy it manually. Once deployed, the configmap\ncan be edited at any time:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl edit configmap --namespace eraser-system eraser-manager-config\n"})}),"\n",(0,s.jsx)(n.p,{children:"If an eraser job is already running, the changes will not take effect until the job completes.\nThe configuration is in yaml."}),"\n",(0,s.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,s.jsx)(n.h3,{id:"basic-architecture",children:"Basic architecture"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"manager"})," runs as a pod in your cluster and manages ",(0,s.jsx)(n.em,{children:"ImageJobs"}),". Think of\nan ",(0,s.jsx)(n.em,{children:"ImageJob"})," as a unit of work, performed on every node in your cluster. Each\nnode runs a sub-job. The goal of the ",(0,s.jsx)(n.em,{children:"ImageJob"})," is to assess the images on your\ncluster's nodes, and to remove the images you don't want. There are two stages:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Assessment"}),"\n",(0,s.jsx)(n.li,{children:"Removal."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scheduling",children:"Scheduling"}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"ImageJob"})," can either be created on-demand (see ",(0,s.jsx)(n.a,{href:"https://eraser-dev.github.io/eraser/docs/manual-removal",children:"Manual Removal"}),"),\nor they can be spawned on a timer like a cron job. On-demand jobs skip the\nassessment stage and get right down to the business of removing the images you\nspecified. The behavior of an on-demand job is quite different from that of\ntimed jobs."]}),"\n",(0,s.jsx)(n.h3,{id:"fault-tolerance",children:"Fault Tolerance"}),"\n",(0,s.jsxs)(n.p,{children:["Because an ",(0,s.jsx)(n.em,{children:"ImageJob"})," runs on every node in your cluster, and the conditions on\neach node may vary widely, some of the sub-jobs may fail. If you cannot\ntolerate any failure, set the ",(0,s.jsx)(n.code,{children:"manager.imageJob.successRatio"})," property to\n",(0,s.jsx)(n.code,{children:"1.0"}),". If 75% success sounds good to you, set it to ",(0,s.jsx)(n.code,{children:"0.75"}),". In that case, if\nfewer than 75% of the pods spawned by the ",(0,s.jsx)(n.em,{children:"ImageJob"})," report success, the job as\na whole will be marked as a failure."]}),"\n",(0,s.jsxs)(n.p,{children:["This is mainly to help diagnose error conditions. As such, you can set\n",(0,s.jsx)(n.code,{children:"manager.imageJob.cleanup.delayOnFailure"})," to a long value so that logs can be\ncaptured before the spawned pods are cleaned up."]}),"\n",(0,s.jsx)(n.h3,{id:"excluding-nodes",children:"Excluding Nodes"}),"\n",(0,s.jsxs)(n.p,{children:["For various reasons, you may want to prevent Eraser from scheduling pods on\ncertain nodes. To do so, the nodes can be given a special label. By default,\nthis label is ",(0,s.jsx)(n.code,{children:"eraser.sh/cleanup.filter"}),", but you can configure the behavior with\nthe options under ",(0,s.jsx)(n.code,{children:"manager.nodeFilter"}),". The ",(0,s.jsx)(n.a,{href:"#detailed-options",children:"table"})," provides more detail."]}),"\n",(0,s.jsx)(n.h3,{id:"configuring-components",children:"Configuring Components"}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"ImageJob"})," is made up of various sub-jobs, with one sub-job for each node.\nThese sub-jobs can be broken down further into three stages."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Collection (What is on the node?)"}),"\n",(0,s.jsx)(n.li,{children:"Scanning (What images conform to the policy I've provided?)"}),"\n",(0,s.jsx)(n.li,{children:"Removal (Remove images based on the results of the above)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Of the above stages, only Removal is mandatory. The others can be disabled.\nFurthermore, manually triggered ",(0,s.jsx)(n.em,{children:"ImageJobs"})," will skip right to removal, even if\nEraser is configured to collect and scan. Collection and Scanning will only\ntake place when:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The collector and/or scanner ",(0,s.jsx)(n.code,{children:"components"})," are enabled, AND"]}),"\n",(0,s.jsxs)(n.li,{children:["The job was ",(0,s.jsx)(n.em,{children:"not"})," triggered manually by creating an ",(0,s.jsx)(n.em,{children:"ImageList"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"swapping-out-components",children:"Swapping out components"}),"\n",(0,s.jsxs)(n.p,{children:["The collector, scanner, and eraser components can all be swapped out. This\nenables you to build and host the images yourself. In addition, the scanner's\nbehavior can be completely tailored to your needs by swapping out the default\nimage with one of your own. To specify the images, use the\n",(0,s.jsx)(n.code,{children:"components.<component>.image.repo"})," and ",(0,s.jsx)(n.code,{children:"components.<component>.image.tag"}),",\nwhere ",(0,s.jsx)(n.code,{children:"<component>"})," is one of ",(0,s.jsx)(n.code,{children:"collector"}),", ",(0,s.jsx)(n.code,{children:"scanner"}),", or ",(0,s.jsx)(n.code,{children:"eraser"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"universal-options",children:"Universal Options"}),"\n",(0,s.jsxs)(n.p,{children:["The following portions of the configmap apply no matter how you spawn your\n",(0,s.jsx)(n.em,{children:"ImageJob"}),". The values provided below are the defaults. For more detail on\nthese options, see the ",(0,s.jsx)(n.a,{href:"#detailed-options",children:"table"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'manager:\n  runtime: containerd\n  otlpEndpoint: "" # empty string disables OpenTelemetry\n  logLevel: info\n  profile:\n    enabled: false\n    port: 6060\n  imageJob:\n    successRatio: 1.0\n    cleanup:\n      delayOnSuccess: 0s\n      delayOnFailure: 24h\n  pullSecrets: [] # image pull secrets for collector/scanner/eraser\n  priorityClassName: "" # priority class name for collector/scanner/eraser\n  nodeFilter:\n    type: exclude # must be either exclude|include\n    selectors:\n      - eraser.sh/cleanup.filter\n      - kubernetes.io/os=windows\ncomponents:\n  eraser:\n    image:\n      repo: ghcr.io/eraser-dev/eraser\n      tag: v1.0.0\n    request:\n      mem: 25Mi\n      cpu: 0\n    limit:\n      mem: 30Mi\n      cpu: 1000m\n'})}),"\n",(0,s.jsx)(n.h2,{id:"component-options",children:"Component Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"components:\n  collector:\n    enabled: true\n    image:\n      repo: ghcr.io/eraser-dev/collector\n      tag: v1.0.0\n    request:\n      mem: 25Mi\n      cpu: 7m\n    limit:\n      mem: 500Mi\n      cpu: 0\n  scanner:\n    enabled: true\n    image:\n      repo: ghcr.io/eraser-dev/eraser-trivy-scanner\n      tag: v1.0.0\n    request:\n      mem: 500Mi\n      cpu: 1000m\n    limit:\n      mem: 2Gi\n      cpu: 0\n    config: |\n      # this is the schema for the provided 'trivy-scanner'. custom scanners\n      # will define their own configuration. see the below\n  eraser:\n    image:\n      repo: ghcr.io/eraser-dev/eraser\n      tag: v1.0.0\n    request:\n      mem: 25Mi\n      cpu: 0\n    limit:\n      mem: 30Mi\n      cpu: 1000m\n"})}),"\n",(0,s.jsx)(n.h2,{id:"scanner-options",children:"Scanner Options"}),"\n",(0,s.jsxs)(n.p,{children:["These options can be provided to ",(0,s.jsx)(n.code,{children:"components.scanner.config"}),". They will be\npassed through  as a string to the scanner container and parsed there. If you\nwant to configure your own scanner, you must provide some way to parse this."]}),"\n",(0,s.jsxs)(n.p,{children:["Below are the values recognized by the provided ",(0,s.jsx)(n.code,{children:"eraser-trivy-scanner"})," image.\nValues provided below are the defaults."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cacheDir: /var/lib/trivy # The file path inside the container to store the cache\ndbRepo: ghcr.io/aquasecurity/trivy-db # The container registry from which to fetch the trivy database\ndeleteFailedImages: true # if true, remove images for which scanning fails, regardless of why it failed\nvulnerabilities:\n  ignoreUnfixed: true # consider the image compliant if there are no known fixes for the vulnerabilities found.\n  types: # a list of vulnerability types. for more info, see trivy's documentation.\n    - os\n    - library\n  securityChecks: # see trivy's documentation for more invormation\n    - vuln\n  severities: # in this case, only flag images with CRITICAL vulnerability for removal\n    - CRITICAL\ntimeout:\n  total: 23h # if scanning isn't completed before this much time elapses, abort the whole scan\n  perImage: 1h # if scanning a single image exceeds this time, scanning will be aborted\n"})}),"\n",(0,s.jsx)(n.h2,{id:"detailed-options",children:"Detailed Options"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.runtime"}),(0,s.jsx)(n.td,{children:"The runtime to use for the manager's containers. Must be one of containerd, crio, or dockershim. It is assumed that your nodes are all using the same runtime, and there is currently no way to configure multiple runtimes."}),(0,s.jsx)(n.td,{children:"containerd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.otlpEndpoint"}),(0,s.jsx)(n.td,{children:"The endpoint to send OpenTelemetry data to. If empty, data will not be sent."}),(0,s.jsx)(n.td,{children:'""'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.logLevel"}),(0,s.jsx)(n.td,{children:"The log level for the manager's containers. Must be one of debug, info, warn, error, dpanic, panic, or fatal."}),(0,s.jsx)(n.td,{children:"info"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.scheduling.repeatInterval"}),(0,s.jsxs)(n.td,{children:["Use only when collector ando/or scanner are enabled. This is like a cron job, and will spawn an ",(0,s.jsx)(n.em,{children:"ImageJob"})," at the interval provided."]}),(0,s.jsx)(n.td,{children:"24h"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.scheduling.beginImmediately"}),(0,s.jsxs)(n.td,{children:["If set to true, the fist ",(0,s.jsx)(n.em,{children:"ImageJob"})," will run immediately. If false, the job will not be spawned until after the interval (above) has elapsed."]}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.profile.enabled"}),(0,s.jsxs)(n.td,{children:["Whether to enable profiling for the manager's containers. This is for debugging with ",(0,s.jsx)(n.code,{children:"go tool pprof"}),"."]}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.profile.port"}),(0,s.jsx)(n.td,{children:"The port on which to expose the profiling endpoint."}),(0,s.jsx)(n.td,{children:"6060"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.imageJob.successRatio"}),(0,s.jsx)(n.td,{children:"The ratio of successful image jobs required before a cleanup is performed."}),(0,s.jsx)(n.td,{children:"1.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.imageJob.cleanup.delayOnSuccess"}),(0,s.jsx)(n.td,{children:"The amount of time to wait after a successful image job before performing cleanup."}),(0,s.jsx)(n.td,{children:"0s"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.imageJob.cleanup.delayOnFailure"}),(0,s.jsx)(n.td,{children:"The amount of time to wait after a failed image job before performing cleanup."}),(0,s.jsx)(n.td,{children:"24h"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.pullSecrets"}),(0,s.jsx)(n.td,{children:"The image pull secrets to use for collector, scanner, and eraser containers."}),(0,s.jsx)(n.td,{children:"[]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.priorityClassName"}),(0,s.jsx)(n.td,{children:"The priority class to use for collector, scanner, and eraser containers."}),(0,s.jsx)(n.td,{children:'""'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.nodeFilter.type"}),(0,s.jsx)(n.td,{children:'The type of node filter to use. Must be either "exclude" or "include".'}),(0,s.jsx)(n.td,{children:"exclude"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manager.nodeFilter.selectors"}),(0,s.jsx)(n.td,{children:"A list of selectors used to filter nodes."}),(0,s.jsx)(n.td,{children:"[]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.enabled"}),(0,s.jsx)(n.td,{children:"Whether to enable the collector component."}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.image.repo"}),(0,s.jsx)(n.td,{children:"The repository containing the collector image."}),(0,s.jsx)(n.td,{children:"ghcr.io/eraser-dev/collector"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.image.tag"}),(0,s.jsx)(n.td,{children:"The tag of the collector image."}),(0,s.jsx)(n.td,{children:"v1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.request.mem"}),(0,s.jsx)(n.td,{children:"The amount of memory to request for the collector container."}),(0,s.jsx)(n.td,{children:"25Mi"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.request.cpu"}),(0,s.jsx)(n.td,{children:"The amount of CPU to request for the collector container."}),(0,s.jsx)(n.td,{children:"7m"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.limit.mem"}),(0,s.jsx)(n.td,{children:"The maximum amount of memory the collector container is allowed to use."}),(0,s.jsx)(n.td,{children:"500Mi"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.collector.limit.cpu"}),(0,s.jsx)(n.td,{children:"The maximum amount of CPU the collector container is allowed to use."}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.enabled"}),(0,s.jsx)(n.td,{children:"Whether to enable the scanner component."}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.image.repo"}),(0,s.jsx)(n.td,{children:"The repository containing the scanner image."}),(0,s.jsx)(n.td,{children:"ghcr.io/eraser-dev/eraser-trivy-scanner"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.image.tag"}),(0,s.jsx)(n.td,{children:"The tag of the scanner image."}),(0,s.jsx)(n.td,{children:"v1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.request.mem"}),(0,s.jsx)(n.td,{children:"The amount of memory to request for the scanner container."}),(0,s.jsx)(n.td,{children:"500Mi"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.request.cpu"}),(0,s.jsx)(n.td,{children:"The amount of CPU to request for the scanner container."}),(0,s.jsx)(n.td,{children:"1000m"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.limit.mem"}),(0,s.jsx)(n.td,{children:"The maximum amount of memory the scanner container is allowed to use."}),(0,s.jsx)(n.td,{children:"2Gi"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.limit.cpu"}),(0,s.jsx)(n.td,{children:"The maximum amount of CPU the scanner container is allowed to use."}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.scanner.config"}),(0,s.jsx)(n.td,{children:"The configuration to pass to the scanner container, as a YAML string."}),(0,s.jsx)(n.td,{children:"See YAML below"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.eraser.image.repo"}),(0,s.jsx)(n.td,{children:"The repository containing the eraser image."}),(0,s.jsx)(n.td,{children:"ghcr.io/eraser-dev/eraser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.eraser.image.tag"}),(0,s.jsx)(n.td,{children:"The tag of the eraser image."}),(0,s.jsx)(n.td,{children:"v1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.eraser.request.mem"}),(0,s.jsx)(n.td,{children:"The amount of memory to request for the eraser container."}),(0,s.jsx)(n.td,{children:"25Mi"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components.eraser.request.cpu"}),(0,s.jsx)(n.td,{children:"The amount of CPU to request for the eraser container."}),(0,s.jsx)(n.td,{children:"0"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);