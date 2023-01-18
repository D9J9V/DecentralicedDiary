(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{54409:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/how-to/mint-custom-metadata",function(){return a(33171)}])},47255:function(e,t,a){"use strict";a.d(t,{E:function(){return l},m:function(){return d}});var n=a(70865),o=a(96670),r=a(52322),s=a(2784),i=a(86010);function l(e){var t=e.hidden,a=e.className,n=e.children;return(0,r.jsx)("div",{role:"tabpanel",hidden:t,className:(0,i.Z)(a),children:n})}function d(e){var t=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"undefined"!==typeof e.props.value)return e;throw new Error('Unexpected child in Tabs element. All children of <Tabs> should be a <TabItem> with a unique "value" prop')}))||[],a=t.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}}));if(new Set(a.map((function(e){return e.value}))).size!==a.length)throw new Error("All <TabItem> children of a <Tabs> component must have a unique 'value' prop");var l=a.length>0?a[0].value:null,d=(0,s.useState)(l),c=d[0],h=d[1],u=[],p=function(e){var t=e.currentTarget,n=u.indexOf(t);if(!(n<0)){var o=a[n].value;o!==c&&h(o)}};return(0,r.jsxs)("div",{className:"tabs-container",children:[(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs","list-none","m-0",e.className),children:a.map((function(e){var t=e.value,a=e.label,s=e.attributes,l=c===t;return(0,r.jsx)("li",(0,o.Z)((0,n.Z)({role:"tab",tabIndex:l?0:-1,"aria-selected":l,ref:function(e){return u.push(e)},onFocus:p,onClick:p},s),{className:(0,i.Z)("tabs__item",l?"tabs__item--active":null,s?s.className:null),children:a||t}),t)}))}),(0,r.jsx)("div",{className:"tabs__content",children:t.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==c})}))})]})}},17778:function(e,t,a){"use strict";var n=a(52322),o={nextLinks:!1,prevLinks:!1,search:!1,customSearch:null,darkMode:!1,footer:!1,header:!1,logo:(0,n.jsx)(n.Fragment,{}),head:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("title",{children:"NFT.Storage Docs"})})};t.Z=o},33171:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(70865),o=a(96670),r=a(52322),s=a(17647),i=a(49083),l=a(17778),d=a(45392),c=a(55513),h=a(47255);function u(e){var t=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",code:"code",h2:"h2",h4:"h4",pre:"pre",em:"em"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Store and mint NFTs using custom metadata"}),"\n",(0,r.jsxs)(t.p,{children:["If your metadata conforms to the popular ERC-721 or ERC-1155 standards, you can ",(0,r.jsx)(t.a,{href:"/docs/how-to/mint-erc-1155/",children:"upload all your NFT assets and prepare your metadata all in one HTTP request"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"If you want to customize your metadata in a way that's not compatible with ERC-1155, or if you know you'll be using the same off-chain assets in many NFTs, you can store your files separately and get their IPFS URIs. You can then use these IPFS URIs and put them into a JSON file however you'd like to create your metadata. This metadata can then be stored, resulting in an IPFS URI that you can store in your token's on-chain record."}),"\n",(0,r.jsxs)(c.Z,{emoji:"\ud83d\udca1",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Check your metadata URI"})}),(0,r.jsxs)(t.p,{children:["It's important to make sure you are using a properly formatted IPFS URL (i.e., ",(0,r.jsx)(t.code,{children:"ipfs://bafy..."}),") for the metadata URL you use when minting your NFT, as well as the URLs referenced within the metadata. This way, any IPFS-compatible browser can retrieve the right data directly using these URLs, and your NFT follows this universal standard. Click ",(0,r.jsx)(t.a,{href:"https://docs.ipfs.io/how-to/address-ipfs-on-web/",children:"here"})," to read more about IPFS URLs."]})]}),"\n",(0,r.jsx)(t.p,{children:"Here's an example on how to do this to mint your own NFT!"}),"\n",(0,r.jsx)(t.h2,{children:"Uploading your images, assets, and metadata"}),"\n",(0,r.jsx)(t.p,{children:'Before you can create the blockchain record for your NFT, you\'ll need to store all of the off-chain resources that comprise the NFT "package". Once everything has been stored, you can use the IPFS URI for the metadata to link from the on-chain token to everything else.'}),"\n",(0,r.jsx)(t.h4,{children:"Storing asset files"}),"\n",(0,r.jsxs)(h.m,{children:[(0,r.jsxs)(h.E,{value:"js",label:"JavaScript",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client",children:"JavaScript client library"})," provides three methods that you can use to store arbitrary files for your NFT assets and metadata."]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsxs)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#storeBlob",children:[(0,r.jsx)(t.code,{children:"storeBlob"})," method"]})," accepts a single ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:(0,r.jsx)(t.code,{children:"Blob"})})," or ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File",children:(0,r.jsx)(t.code,{children:"File"})})," object and returns the CID of the uploaded file. Note that the original filename and content type information ",(0,r.jsx)(t.strong,{children:"will not"})," be preserved, and the CID returned by ",(0,r.jsx)(t.code,{children:"storeBlob"})," will point directly to the file data."]}),(0,r.jsxs)(t.p,{children:["To preserve filenames, or to upload multiple related files at once, use the ",(0,r.jsxs)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#storeDirectory",children:[(0,r.jsx)(t.code,{children:"storeDirectory"})," method"]}),". ",(0,r.jsx)(t.code,{children:"storeDirectory"})," takes multiple ",(0,r.jsx)(t.code,{children:"File"}),' objects and wraps them with an IPFS directory listing. This allows you to link to the files using human-readable names as the "path" component of your IPFS URIs or gateway links.']}),(0,r.jsxs)(t.p,{children:["It's important to note that ",(0,r.jsx)(t.code,{children:"storeDirectory"})," returns the CID of the directory listing, and you'll need to append the filename to the CID to construct links to the files themselves."]}),(0,r.jsxs)(t.p,{children:["For example, storing an image named ",(0,r.jsx)(t.code,{children:"pinpie.jpg"})," using ",(0,r.jsx)(t.code,{children:"storeDirectory"})," might return the CID\n",(0,r.jsx)("code",{class:"overflow-wrap-breakword",children:"bafybeiajdopsmspomlrpaohtzo5sdnpknbolqjpde6huzrsejqmvijrcea"}),". If you ",(0,r.jsx)(t.a,{href:"https://bafybeiajdopsmspomlrpaohtzo5sdnpknbolqjpde6huzrsejqmvijrcea.ipfs.dweb.link",children:"view this CID on an HTTP gateway"}),", you should see a directory listing page with a link to the file ",(0,r.jsx)(t.code,{children:"pinpie.jpg"}),"."]}),(0,r.jsxs)(t.p,{children:["To link to the image, you'll need to add ",(0,r.jsx)(t.code,{children:"/pinpie.jpg"})," to the CID to create a valid IPFS URI:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"ipfs://bafybeiajdopsmspomlrpaohtzo5sdnpknbolqjpde6huzrsejqmvijrcea/pinpie.jpg\n"})}),(0,r.jsxs)(t.p,{children:["The final method for storing arbitrary data is ",(0,r.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#storeCar",children:(0,r.jsx)(t.code,{children:"storeCar"})}),", which stores data that has been packaged into the IPFS Content Archive format. This method gives you precise control over how the IPFS object graph is structured and may be a good fit if you already have data in IPFS. See the ",(0,r.jsx)(t.a,{href:"/docs/concepts/car-files/",children:"CAR file guide"})," to learn how to work with CARs and prepare them for upload."]})]}),(0,r.jsxs)(h.E,{value:"http",label:"HTTP API",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://nft.storage/api-docs/",children:"HTTP API"})," provides a ",(0,r.jsx)(t.code,{children:"/upload"})," endpoint that accepts one or more files and stores them with NFT.Storage."]}),(0,r.jsxs)(c.Z,{emoji:"\ud83d\udca1",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Size limits"})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"/upload"})," endpoint can accept up to 100 MiB in each HTTP request. If your files are larger than 100 MiB, see the section below on ",(0,r.jsx)(t.a,{href:"#car-files",children:"CAR files"}),", which can be used to split uploads between several HTTP requests."]})]}),(0,r.jsx)(t.h4,{children:"Single file"}),(0,r.jsxs)(t.p,{children:["To upload a single file, send a ",(0,r.jsx)(t.code,{children:"POST"})," request to ",(0,r.jsx)(t.code,{children:"/upload"})," with the binary file data as the request body. The ",(0,r.jsx)(t.code,{children:"Content-Type"})," header should be set to a type that's appropriate for the content, for example, ",(0,r.jsx)(t.code,{children:"image/jpeg"}),"."]}),(0,r.jsx)(t.p,{children:"You should get a response similar to this one:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "ok": true,\n  "value": {\n    "cid": "bafkreidivzimqfqtoqxkrpge6bjyhlvxqs3rhe73owtmdulaxr5do5in7u",\n    "size": 132614,\n    "created": "2021-03-12T17:03:07.787Z",\n    "type": "image/jpeg",\n    "scope": "default",\n    "pin": {\n      "cid": "bafkreidivzimqfqtoqxkrpge6bjyhlvxqs3rhe73owtmdulaxr5do5in7u",\n      "name": "pin name",\n      "meta": {},\n      "status": "queued",\n      "created": "2021-03-12T17:03:07.787Z",\n      "size": 132614\n    },\n    "files": [\n      {\n        "name": "logo.jpg",\n        "type": "image/jpeg"\n      }\n    ],\n    "deals": [\n      {\n        "batchRootCid": "bafkreidivzimqfqtoqxkrpge6bjyhlvxqs3rhe73owtmdulaxr5do5in7u",\n        "lastChange": "2021-03-18T11:46:50.000Z",\n        "miner": "f05678",\n        "network": "nerpanet",\n        "pieceCid": "bafkreidivzimqfqtoqxkrpge6bjyhlvxqs3rhe73owtmdulaxr5do5in7u",\n        "status": "queued",\n        "statusText": "miner rejected my data",\n        "chainDealID": 138,\n        "dealActivation": "2021-03-18T11:46:50.000Z",\n        "dealExpiration": "2021-03-18T11:46:50.000Z"\n      }\n    ]\n  }\n}\n'})}),(0,r.jsx)(t.h4,{children:"Multiple files"}),(0,r.jsxs)(t.p,{children:["To upload multiple files, send a ",(0,r.jsx)(t.code,{children:"POST"})," request to ",(0,r.jsx)(t.code,{children:"/upload"})," containing multi-part ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",children:(0,r.jsx)(t.code,{children:"FormData"})})," in the request body. The ",(0,r.jsx)(t.code,{children:"Content-Type"})," header must be set to ",(0,r.jsx)(t.code,{children:"multipart/form-data"}),"."]}),(0,r.jsxs)(t.p,{children:['Each "part" of the multi-part form data should include a ',(0,r.jsx)(t.code,{children:"Content-Disposition"})," header, which specifies the name of the form field (always ",(0,r.jsx)(t.code,{children:'"file"'}),"), and the filename. The part header should also include a ",(0,r.jsx)(t.code,{children:"Content-Type"})," header with a value appropriate for the data being uploaded."]}),(0,r.jsx)(t.p,{children:"Here's an example:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'------WebKitFormBoundary5peilISl2YOOweQy\nContent-Disposition: form-data; name="file"; filename="image.png"\nContent-Type: image/png\n\n<data>\n------WebKitFormBoundary5peilISl2YOOweQy--\n'})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"------WebKitFormBoundary5peilISl2YOOweQy"}),' tokens in the example above set the boundary of each "part" within the form data. In most cases, this will be set automatically by whatever request library or API is preparing the form data body. If you\'re preparing multi-part requests manually, see ',(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7578",children:"RFC7578"}),"."]}),(0,r.jsx)(t.h4,{children:"CAR files"}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"/upload"})," endpoint has some special support for IPFS Content Archives (CARs) that can be used to upload files larger than the 100 MiB single-request limit."]}),(0,r.jsxs)(t.p,{children:["Uploading CAR files works just like uploading a single file. Send a ",(0,r.jsx)(t.code,{children:"POST"})," request to ",(0,r.jsx)(t.code,{children:"/upload"}),", with the ",(0,r.jsx)(t.code,{children:"Content-Type"})," header set to ",(0,r.jsx)(t.code,{children:"application/car"})," and the binary file data as the request body."]}),(0,r.jsxs)(t.p,{children:["To upload files larger than 100 MiB, you can pack them into a CAR file and split the CAR into chunks, uploading each chunk in a separate HTTP request. See the ",(0,r.jsx)(t.a,{href:"/docs/concepts/car-files/",children:"CAR file guide"})," to learn more."]})]})]}),"\n",(0,r.jsx)(t.h4,{children:"Preparing your metadata"}),"\n",(0,r.jsx)(t.p,{children:"Once you have all of your assets stored, you can update your metadata to include IPFS URIs to the images and other files that are part of your NFT."}),"\n",(0,r.jsxs)(t.p,{children:["For each file that you uploaded, prepare an IPFS URI of the form ",(0,r.jsx)(t.code,{children:"ipfs://<CID>/<filename>"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In some cases you may also want to include HTTP gateway URLs, but it's best to add those as an optimization or fallback for compatibility with browsers or wallets that don't support IPFS natively. See ",(0,r.jsx)(t.a,{href:"https://docs.ipfs.io/how-to/address-ipfs-on-web/",children:"the IPFS documentation about web addresses"})," for more details on IPFS URIs and the tradeoffs involved in using HTTP gateways."]}),"\n",(0,r.jsxs)(t.p,{children:["Once the metadata is ready, you can serialize it to a file (usually in JSON format), and upload it by sending a ",(0,r.jsx)(t.code,{children:"POST"})," request to ",(0,r.jsx)(t.code,{children:"/upload"})," with the metadata as the request body. Set the ",(0,r.jsx)(t.code,{children:"Content-Type"})," header to the type appropriate for your metadata, e.g. ",(0,r.jsx)(t.code,{children:"application/json"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"You can use the CID from your metadata upload to link from your on-chain record to the metadata on IPFS."}),"\n",(0,r.jsxs)(c.Z,{emoji:"\u2753",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)("h5",{children:"Need to use CIDv0?"}),'\nThere are two versions of IPFS Content Identifiers (CIDs) in use today. The legacy "CIDv0" format is more compact, but it lacks several important features of CIDv1 and is generally discouraged for new projects.']}),(0,r.jsx)(t.p,{children:"If you need to work with a system that only supports CIDv0 (for example, because of a hard size constraint in a smart contract), you can prepare a CAR file containing IPFS objects that are compatible with CIDv0. The NFT.Storage APIs will still return a CIDv1 result, but this can be converted to CIDv0 using the CID tooling for your programming language."}),(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/nftstorage/nft.storage/pull/991",children:"this pull request"})," for an example."]})]}),"\n",(0,r.jsx)(t.h2,{children:"Minting your NFT"}),"\n",(0,r.jsx)(t.p,{children:"Now that your metadata is stored with NFT.Storage, you can mint tokens using the blockchain platform of your choice."}),"\n",(0,r.jsx)(t.p,{children:"We won't attempt to illustrate the minting process here, because the details depend on which chain and development language you're using, as well as the contract and standards you're targeting."}),"\n",(0,r.jsx)(t.p,{children:"Instead, we'll offer some advice that applies to any blockchain when linking to assets stored using NFT.Storage."}),"\n",(0,r.jsxs)(t.p,{children:["To see an example of NFT.Storage being used with custom metadata, take a look at the ",(0,r.jsx)(t.a,{href:"https://nftschool.dev/tutorial/flow-nft-marketplace/",children:"Flow tutorial on NFT School"}),"."]}),"\n",(0,r.jsx)(t.h4,{children:"Avoid storing HTTP URLs on-chain"}),"\n",(0,r.jsxs)(t.p,{children:["Although in many cases the most convenient way to ",(0,r.jsx)(t.a,{href:"/docs/how-to/retrieve/",children:"retrieve NFT data from IPFS"})," may involve using an IPFS HTTP gateway, you should avoid storing HTTP gateway links in a smart contract or other blockchain record."]}),"\n",(0,r.jsxs)(t.p,{children:["Instead, store the ",(0,r.jsx)(t.code,{children:"ipfs://"})," URI, which doesn't depend on a single gateway provider. You can rewrite this URL into a gateway link at the \"last mile\" when displaying the NFT on the web. This ensures that the blockchain link is always valid as long as any IPFS peer is providing the data, and doesn't tie your NFT to any specific gateway host."]}),"\n",(0,r.jsxs)(t.p,{children:["If you do include HTTP links, use them ",(0,r.jsx)(t.em,{children:"in addition"}),' to IPFS URIs, as an optimization or fallback. Wherever possible, the IPFS URI should be the canonical link, or "source of truth".']}),"\n",(0,r.jsx)(t.h4,{children:"Prefer IPFS URIs to raw CIDs or hashes"}),"\n",(0,r.jsx)(t.p,{children:"There are several different ways to refer to data on IPFS, all of which involve a Content Identifier or CID."}),"\n",(0,r.jsxs)(t.p,{children:["If you're writing your own contract, you may be tempted to store IPFS CIDs in their binary form, which uses a bit less storage space than a string-encoded CID like ",(0,r.jsx)("code",{class:"overflow-wrap-breakword",children:"bafkreigfvngoydofemwj5x5ioqsaqarvlprzgxinkcv3am3jpv2sysqobi`"})]}),"\n",(0,r.jsxs)(t.p,{children:["While it's true that a binary CID uses a bit less memory than the equivalent string encoding, in many cases it doesn't actually matter in practice. On platforms like the Ethereum Virtual Machine where the minimum storage allocation is 256 bits, both forms of CID require the same amount of actual on-chain storage space. In some cases it can be ",(0,r.jsx)(t.em,{children:"more"})," expensive to store binary CIDs, for example, if you need to convert to the string form inside a contract."]}),"\n",(0,r.jsxs)(t.p,{children:["We recommend using URIs of the form ",(0,r.jsx)(t.code,{children:"ipfs://<cid>/<path>"})," when linking from on-chain records to IPFS data. This gives you flexible addresses that can include human-friendly filenames in the path, and using strings instead of binary links makes debugging a lot simpler."]})]})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,d.ah)(),e.components),a=t.wrapper;return a?(0,r.jsx)(a,(0,o.Z)((0,n.Z)({},e),{children:(0,r.jsx)(u,(0,n.Z)({},e))})):u(e)}var m=(0,r.jsx)(p,{});function f(e){return(0,i.withSSG)((0,s.Z)({filename:"mint-custom-metadata.md",route:"/docs/how-to/mint-custom-metadata",meta:{title:"Store and mint NFTs using custom metadata"},pageMap:[{name:"docs",children:[{name:"client",children:[{name:"http",route:"/docs/client/http"},{name:"js",route:"/docs/client/js"},{name:"meta.json",meta:{js:{title:"JavaScript",type:"docs"},http:"HTTP API"}}],route:"/docs/client"},{name:"concepts",children:[{name:"architecture-considerations",route:"/docs/concepts/architecture-considerations",frontMatter:{title:"Architecture considerations"}},{name:"car-files",route:"/docs/concepts/car-files",frontMatter:{title:"Working with Content Archives",sidebar_label:"Work with Content Archives",description:"Learn how to work with Content Archives of IPLD data."}},{name:"decentralized-storage",route:"/docs/concepts/decentralized-storage",frontMatter:{title:"Decentralized storage",description:"Learn about decentralized storage works and how it's key to NFT.Storage."}},{name:"gateways",route:"/docs/concepts/gateways"},{name:"meta.json",meta:{"decentralized-storage":"Decentralized storage","car-files":"Work with Content Archives","architecture-considerations":"Architecture considerations"}}],route:"/docs/concepts"},{name:"how-to",children:[{name:"get-status",route:"/docs/how-to/get-status"},{name:"meta.json",meta:{"mint-erc-1155":"Store and mint NFTs using ERC-1155 metadata standards","mint-custom-metadata":"Store and mint NFTs using custom metadata","mint-solana":"Store and mint NFTs for Solana with Metaplex",retrieve:"Retrieve NFT data from IPFS","store-directory":"Store a directory of files","get-status":"Get upload status",ucan:"Use UCAN tokens for delegated authorization","pinning-service":"Pinning Services API",nftup:"Upload with NFTUp"}},{name:"mint-custom-metadata",route:"/docs/how-to/mint-custom-metadata",frontMatter:{title:"Store and mint NFTs using custom metadata"}},{name:"mint-erc-1155",route:"/docs/how-to/mint-erc-1155",frontMatter:{title:"Store and mint NFTs using ERC-1155 metadata standards"}},{name:"mint-solana",route:"/docs/how-to/mint-solana",frontMatter:{title:"Mint NFTs on Solana with Metaplex"}},{name:"nftup",route:"/docs/how-to/nftup",frontMatter:{title:"Upload files and directories with NFTUp"}},{name:"pinning-service",route:"/docs/how-to/pinning-service"},{name:"retrieve",route:"/docs/how-to/retrieve",frontMatter:{title:"Retrieve NFT data from IPFS"}},{name:"store-directory",route:"/docs/how-to/store-directory"},{name:"ucan",route:"/docs/how-to/ucan"}],route:"/docs/how-to"},{name:"meta.json",meta:{quickstart:"Quickstart","why-nft-storage":"Why NFT.Storage",troubleshooting:"Troubleshooting","api-docs":"Api Docs",concepts:"Concepts","how-to":"How To",client:"Client libraries"}},{name:"quickstart",route:"/docs/quickstart",frontMatter:{title:"Welcome"}},{name:"troubleshooting",route:"/docs/troubleshooting",frontMatter:{title:"Troubleshooting"}},{name:"why-nft-storage",route:"/docs/why-nft-storage",frontMatter:{title:"Why NFT.Storage?"}}],route:"/docs"}]},l.Z))((0,o.Z)((0,n.Z)({},e),{children:m}))}},55513:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(2784),o={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"},r=({children:e,type:t="default",emoji:a="\ud83d\udca1"})=>n.createElement("div",{className:`${o[t]} flex rounded-lg callout mt-6`},n.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},a),n.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[619,774,888,179],(function(){return t=54409,e(e.s=t);var t}));var t=e.O();_N_E=t}]);