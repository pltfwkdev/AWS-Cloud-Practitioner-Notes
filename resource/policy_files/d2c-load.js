!function(){"use strict";const n="d2c.aws.amazon.com";var t;function e(n){const t=n instanceof Event?n:n.detail;window.AWSMA.initialized?window.AWSMA.handleEvent(t):window.AWSMA.eventQueue.push(function(n){return n.eventTimestamp=Date.now(),n}(t))}!function(n){n.ALPHA="ALPHA",n.BETA="BETA",n.GAMMA="GAMMA",n.PROD="PROD",n.DEV="DEV",n.INT_TEST="INT_TEST"}(t||(t={})),window.AWSMA=window.AWSMA||{},AWSMA.visitorIdReady=function(n){},AWSMA.tokenReady=function(n){},function(){window.AWSMA=window.AWSMA||{},window.AWSMA.TRIGGER_EVENT=window.AWSMA.TRIGGER_EVENT||"custom_awsma_trigger",window.AWSMA.eventQueue=window.AWSMA.eventQueue||[],window.AWSMA.pushEvent=window.AWSMA.pushEvent||e,window.AWSMA.hostname=function(){let t;try{const n=document.currentScript;t=new URL(n.src).hostname}catch(e){t=n}return t}(),window.AWSMA.ENV=function(e){const i={"alpha.d2c.marketing.aws.dev":t.ALPHA,"beta.d2c.marketing.aws.dev":t.BETA,"gamma.d2c.marketing.aws.dev":t.GAMMA,[n]:t.PROD}[e];return null!=i?i:t.PROD}(window.AWSMA.hostname),document.addEventListener(window.AWSMA.TRIGGER_EVENT,e,!1);!function(n,t){if(n)try{const e=document.querySelector(t||"script");e?document.head.insertBefore(n,e):document.head.appendChild(n)}catch(t){document.head.appendChild(n)}}(function({src:n,async:t=!0}){const e=document.createElement("script");return e.async=t,e.src=n,e}({src:`https://${window.AWSMA.hostname||n}/client/lib/v${"1.0.0".split(".")[0]}/d2c-client-lib.85270c29.js`,async:!0}),"script")}()}();