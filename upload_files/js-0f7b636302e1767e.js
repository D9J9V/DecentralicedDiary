(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{60871:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/client/js",function(){return n(27530)}])},47255:function(e,t,n){"use strict";n.d(t,{E:function(){return c},m:function(){return l}});var r=n(70865),o=n(96670),a=n(52322),s=n(2784),i=n(86010);function c(e){var t=e.hidden,n=e.className,r=e.children;return(0,a.jsx)("div",{role:"tabpanel",hidden:t,className:(0,i.Z)(n),children:r})}function l(e){var t=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"undefined"!==typeof e.props.value)return e;throw new Error('Unexpected child in Tabs element. All children of <Tabs> should be a <TabItem> with a unique "value" prop')}))||[],n=t.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}}));if(new Set(n.map((function(e){return e.value}))).size!==n.length)throw new Error("All <TabItem> children of a <Tabs> component must have a unique 'value' prop");var c=n.length>0?n[0].value:null,l=(0,s.useState)(c),d=l[0],h=l[1],u=[],m=function(e){var t=e.currentTarget,r=u.indexOf(t);if(!(r<0)){var o=n[r].value;o!==d&&h(o)}};return(0,a.jsxs)("div",{className:"tabs-container",children:[(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs","list-none","m-0",e.className),children:n.map((function(e){var t=e.value,n=e.label,s=e.attributes,c=d===t;return(0,a.jsx)("li",(0,o.Z)((0,r.Z)({role:"tab",tabIndex:c?0:-1,"aria-selected":c,ref:function(e){return u.push(e)},onFocus:m,onClick:m},s),{className:(0,i.Z)("tabs__item",c?"tabs__item--active":null,s?s.className:null),children:n||t}),t)}))}),(0,a.jsx)("div",{className:"tabs__content",children:t.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==d})}))})]})}},17778:function(e,t,n){"use strict";var r=n(52322),o={nextLinks:!1,prevLinks:!1,search:!1,customSearch:null,darkMode:!1,footer:!1,header:!1,logo:(0,r.jsx)(r.Fragment,{}),head:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("title",{children:"NFT.Storage Docs"})})};t.Z=o},27530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(70865),o=n(96670),a=n(52322),s=n(17647),i=n(49083),c=n(17778),l=n(45392),d=n(47255);n(55513);function h(e){var t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"JavaScript client library"}),"\n","\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://npmjs.com/package/nft.storage",children:(0,a.jsx)(t.code,{children:"nft.storage"})})," JavaScript package is a small and easy-to-use library that can have your JavaScript or TypeScript project integrated with NFT.Storage in minutes."]}),"\n",(0,a.jsxs)(t.p,{children:["The JavaScript client uses the ",(0,a.jsx)(t.a,{href:"/api-docs/",children:"HTTP API"})," to send your data to the NFT.Storage service as a collection of ",(0,a.jsx)(t.a,{href:"/docs/concepts/car-files/",children:"Content Archives (CARs)"}),". Encoding data into CARs locally allows you to send files that would otherwise be too large to fit within the API's size limits, as the client will automatically split large CARs into smaller pieces and the service will re-assemble them once they are all received."]}),"\n",(0,a.jsxs)(t.p,{children:["Encoding the data locally has another benefit of reducing the trust required of the NFT.Storage service. By calculating all of the ",(0,a.jsx)(t.a,{href:"https://docs.ipfs.io/concepts/content-addressing/",children:"Content Identifiers (CIDs)"}),' for your data yourself, you can make sure that the data you send is exactly what gets provided to the network. Any alteration of your data by the NFT.Storage service or a third party "monster in the middle" would result in a different CID, which the client will reject as an error.']}),"\n",(0,a.jsxs)(t.p,{children:["This guide will cover the basics of creating a client object, as well as the most common and useful operations. For more details, see the complete ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html",children:"client API documentation"}),". For less, see the ",(0,a.jsx)(t.a,{href:"/docs/",children:"Quickstart guide"}),"!"]}),"\n",(0,a.jsx)(t.h2,{children:"Installation and importing"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://npmjs.com/package/nft.storage",children:(0,a.jsx)(t.code,{children:"nft.storage"})})," NPM package can be added to your project with your favorite JS dependency manager:"]}),"\n",(0,a.jsxs)(d.m,{children:[(0,a.jsx)(d.E,{value:"npm",label:"NPM",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install nft.storage\n"})})}),(0,a.jsx)(d.E,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add nft.storage\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["How you import the client into your code will depend on whether your project uses ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Modules"})," or the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/CommonJS",children:"CommonJS"})," ",(0,a.jsx)(t.code,{children:"require"})," syntax:"]}),"\n",(0,a.jsxs)(d.m,{children:[(0,a.jsx)(d.E,{value:"esm",label:"ES Modules (import)",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { NFTStorage } from 'nft.storage'\n"})})}),(0,a.jsx)(d.E,{value:"commonjs",label:"CommonJS (require)",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"const { NFTStorage } = require('nft.storage')\n"})})})]}),"\n",(0,a.jsx)(t.h3,{children:"Additional imports for Node.js"}),"\n",(0,a.jsxs)(t.p,{children:["The client API works with ",(0,a.jsx)(t.code,{children:"File"})," and ",(0,a.jsx)(t.code,{children:"Blob"})," objects that are built-in to the JavaScript runtimes on browsers but are not included in the standard library for Node.js. You can import API-compatible ",(0,a.jsx)(t.code,{children:"File"})," and ",(0,a.jsx)(t.code,{children:"Blob"})," objects from the ",(0,a.jsx)(t.code,{children:"nft.storage"})," package, which will work on both Node and in the browser:"]}),"\n",(0,a.jsxs)(d.m,{children:[(0,a.jsx)(d.E,{value:"esm",label:"ES Modules (import)",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { NFTStorage, File, Blob } from 'nft.storage'\n"})})}),(0,a.jsx)(d.E,{value:"commonjs",label:"CommonJS (require)",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const { NFTStorage, File, Blob } = require('nft.storage')\n"})})})]}),"\n",(0,a.jsx)(t.h2,{children:"Creating a client object"}),"\n",(0,a.jsxs)(t.p,{children:["To create an ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html",children:(0,a.jsx)(t.code,{children:"NFTStorage"})})," client object, you'll need an NFT.Storage API token. If you don't have one yet,\nhead to the ",(0,a.jsx)(t.a,{href:"/docs/",children:"Quickstart guide"})," to learn more."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const NFT_STORAGE_TOKEN = 'your-api-token'\nconst client = new NFTStorage({ token: NFT_STORAGE_TOKEN })\n"})}),"\n",(0,a.jsx)(t.h2,{children:"Storing data"}),"\n",(0,a.jsx)(t.p,{children:"There are a few methods available for storing data."}),"\n",(0,a.jsxs)(t.h3,{children:[(0,a.jsx)(t.code,{children:"store"})," - store ERC1155 NFT data"]}),"\n",(0,a.jsxs)(t.p,{children:["For NFTs that follow the ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"ERC-1155"})," metadata specification, the ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#store",children:(0,a.jsx)(t.code,{children:"store"})})," method provides a convenient way to upload your NFT assets (images, etc) in the same operation as your metadata, with the client taking care of the details of linking from the metadata to the assets."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const imageFile = new File([ someBinaryImageData ], 'nft.png', { type: 'image/png' })\nconst metadata = await client.store({\n  name: 'My sweet NFT',\n  description: 'Just try to funge it. You can\\'t do it.',\n  image: imageFile\n})\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For more details, see the ",(0,a.jsx)(t.a,{href:"/docs/how-to/mint-erc-1155/",children:"guide to storing ERC-1155 NFTs"}),"."]}),"\n",(0,a.jsxs)(t.h3,{children:[(0,a.jsx)(t.code,{children:"storeBlob"})," - store a single binary data object"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#storeBlob",children:(0,a.jsx)(t.code,{children:"storeBlob"})}),"  method takes a single ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:(0,a.jsx)(t.code,{children:"Blob"})})," of binary data and stores it with NFT.Storage, returning the CID asynchronously. Note that files stored in this manner will not have human-readable filenames stored on IPFS and must be fetched directly by CID."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const someData = new Blob(["hello world"])\nconst cid = await client.storeBlob(someData)\n'})}),"\n",(0,a.jsxs)(t.h3,{children:[(0,a.jsx)(t.code,{children:"storeDirectory"})," - store a collection of files"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#storeDirectory",children:(0,a.jsx)(t.code,{children:"storeDirectory"})})," method takes a collection of one or more ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File",children:(0,a.jsx)(t.code,{children:"File"})})," objects and stores them in an IPFS directory listing. You can create a directory structure by using ",(0,a.jsx)(t.code,{children:"/"})," characters in the filenames to delimit directories."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const readmeFile = new File('Run node src/index.js for a friendly greeting.', 'README.txt', { type: 'text/plain' })\nconst sourceFile = new File('console.log(\"hello, world\")', 'src/index.js', { type: 'text/javascript' })\n\nconst cid = await client.storeDirectory([readmeFile, sourcefile])\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The CID returned by the ",(0,a.jsx)(t.code,{children:"storeDirectory"})," method will resolve to an IPFS directory object containg the stored files. In the case of the example above, the contents would be a file named ",(0,a.jsx)(t.code,{children:"README.txt"})," and a subdirectory named ",(0,a.jsx)(t.code,{children:"src"})," that contains an ",(0,a.jsx)(t.code,{children:"index.js"})," file."]}),"\n",(0,a.jsxs)(t.h3,{children:[(0,a.jsx)(t.code,{children:"storeCar"})," - store a Content Archive (CAR)"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#storeCar",children:(0,a.jsx)(t.code,{children:"storeCar"})})," method stores a ",(0,a.jsx)(t.a,{href:"/docs/concepts/car-files/",children:"Content Archive (CAR)"})," of content-addressed data, returning the root CID of the archive."]}),"\n",(0,a.jsxs)(t.p,{children:["One of the simplest ways to create a CAR is using the ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#encodeBlob",children:(0,a.jsx)(t.code,{children:"encodeBlob"})})," and ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#encodeDirectory",children:(0,a.jsx)(t.code,{children:"encodeDirectory"})})," static methods of the ",(0,a.jsx)(t.code,{children:"NFTStorage"})," class. For other options, see the ",(0,a.jsx)(t.a,{href:"/docs/concepts/car-files/",children:"guide to CAR files"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const someData = new Blob(["hello world"])\nconst { car } = await NFTStorage.encodeBlob(someData)\n\nconst cid = await client.storeCar(car)\n'})}),"\n",(0,a.jsx)(t.h2,{children:"Deleting an upload from your account"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html#delete",children:(0,a.jsx)(t.code,{children:"delete"})})," method can remove uploaded data from your account, however it's important to understand that this ",(0,a.jsx)(t.strong,{children:"does not"})," guarantee that the data will be removed from the ",(0,a.jsx)(t.a,{href:"/docs/concepts/decentralized-storage/",children:"decentralized storage networks"})," used by NFT.Storage."]}),"\n",(0,a.jsx)(t.p,{children:"The entry for the data will be removed from your account's file listing page, and the NFT.Storage service may stop providing the data to the IPFS network and managing Filecoin storage deals. However, any peers in the storage networks who have obtained a copy of the data may continue to store it and may continue to provide the data to the network at their discretion."}),"\n",(0,a.jsx)(t.h2,{children:"API reference"}),"\n",(0,a.jsxs)(t.p,{children:["Full ",(0,a.jsx)(t.a,{href:"https://nftstorage.github.io/nft.storage/client/classes/lib.NFTStorage.html",children:"API reference documentation"}),"."]}),"\n"]})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,l.ah)(),e.components),n=t.wrapper;return n?(0,a.jsx)(n,(0,o.Z)((0,r.Z)({},e),{children:(0,a.jsx)(h,(0,r.Z)({},e))})):h(e)}var m=(0,a.jsx)(u,{});function g(e){return(0,i.withSSG)((0,s.Z)({filename:"js.md",route:"/docs/client/js",meta:{},pageMap:[{name:"docs",children:[{name:"client",children:[{name:"http",route:"/docs/client/http"},{name:"js",route:"/docs/client/js"},{name:"meta.json",meta:{js:{title:"JavaScript",type:"docs"},http:"HTTP API"}}],route:"/docs/client"},{name:"concepts",children:[{name:"architecture-considerations",route:"/docs/concepts/architecture-considerations",frontMatter:{title:"Architecture considerations"}},{name:"car-files",route:"/docs/concepts/car-files",frontMatter:{title:"Working with Content Archives",sidebar_label:"Work with Content Archives",description:"Learn how to work with Content Archives of IPLD data."}},{name:"decentralized-storage",route:"/docs/concepts/decentralized-storage",frontMatter:{title:"Decentralized storage",description:"Learn about decentralized storage works and how it's key to NFT.Storage."}},{name:"gateways",route:"/docs/concepts/gateways"},{name:"meta.json",meta:{"decentralized-storage":"Decentralized storage","car-files":"Work with Content Archives","architecture-considerations":"Architecture considerations"}}],route:"/docs/concepts"},{name:"how-to",children:[{name:"get-status",route:"/docs/how-to/get-status"},{name:"meta.json",meta:{"mint-erc-1155":"Store and mint NFTs using ERC-1155 metadata standards","mint-custom-metadata":"Store and mint NFTs using custom metadata","mint-solana":"Store and mint NFTs for Solana with Metaplex",retrieve:"Retrieve NFT data from IPFS","store-directory":"Store a directory of files","get-status":"Get upload status",ucan:"Use UCAN tokens for delegated authorization","pinning-service":"Pinning Services API",nftup:"Upload with NFTUp"}},{name:"mint-custom-metadata",route:"/docs/how-to/mint-custom-metadata",frontMatter:{title:"Store and mint NFTs using custom metadata"}},{name:"mint-erc-1155",route:"/docs/how-to/mint-erc-1155",frontMatter:{title:"Store and mint NFTs using ERC-1155 metadata standards"}},{name:"mint-solana",route:"/docs/how-to/mint-solana",frontMatter:{title:"Mint NFTs on Solana with Metaplex"}},{name:"nftup",route:"/docs/how-to/nftup",frontMatter:{title:"Upload files and directories with NFTUp"}},{name:"pinning-service",route:"/docs/how-to/pinning-service"},{name:"retrieve",route:"/docs/how-to/retrieve",frontMatter:{title:"Retrieve NFT data from IPFS"}},{name:"store-directory",route:"/docs/how-to/store-directory"},{name:"ucan",route:"/docs/how-to/ucan"}],route:"/docs/how-to"},{name:"meta.json",meta:{quickstart:"Quickstart","why-nft-storage":"Why NFT.Storage",troubleshooting:"Troubleshooting","api-docs":"Api Docs",concepts:"Concepts","how-to":"How To",client:"Client libraries"}},{name:"quickstart",route:"/docs/quickstart",frontMatter:{title:"Welcome"}},{name:"troubleshooting",route:"/docs/troubleshooting",frontMatter:{title:"Troubleshooting"}},{name:"why-nft-storage",route:"/docs/why-nft-storage",frontMatter:{title:"Why NFT.Storage?"}}],route:"/docs"}]},c.Z))((0,o.Z)((0,r.Z)({},e),{children:m}))}},55513:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2784),o={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"},a=({children:e,type:t="default",emoji:n="\ud83d\udca1"})=>r.createElement("div",{className:`${o[t]} flex rounded-lg callout mt-6`},r.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},n),r.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[619,774,888,179],(function(){return t=60871,e(e.s=t);var t}));var t=e.O();_N_E=t}]);