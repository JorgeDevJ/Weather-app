if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const r=e=>t(e,c),o={module:{uri:c},exports:a,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/bssrt093tZife87tQCYcV/_buildManifest.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/bssrt093tZife87tQCYcV/_middlewareManifest.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/bssrt093tZife87tQCYcV/_ssgManifest.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/760-36b8ce8949871e98.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/main-857fbf388abd6aa9.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/pages/_app-4acf8b74d6e8a3da.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/pages/index-b947324e84cfb20a.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"bssrt093tZife87tQCYcV"},{url:"/_next/static/css/97e142217bdda6d3.css",revision:"bssrt093tZife87tQCYcV"},{url:"/favicon.ico",revision:"aefe5cc986fdaf7b3ce602ec0bc494e2"},{url:"/icon-192x192.png",revision:"6a8a644cb95fd08938176f04a2e14212"},{url:"/icon-256x256.png",revision:"ac3339085dc77798beb44d6f983763bc"},{url:"/icon-384x384.png",revision:"328a7671be7ab00e2c96d65cc27ec642"},{url:"/icon-512x512.png",revision:"080e3f5250ec0b8c11d39c6c18413feb"},{url:"/manifest.json",revision:"5dfd305098ffb547fdd18e50f55b9dce"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));