"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9304],{24905:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=t(74848),o=t(28453);const r={title:"Chat Memory",sidebar_position:1,slug:"/guides-chat-memory"},a=void 0,i={id:"Guides/guides-chat-memory",title:"Chat Memory",description:"Langflow allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create separate memories for agents to store and recall information as needed.",source:"@site/docs/Guides/guides-chat-memory.md",sourceDirName:"Guides",slug:"/guides-chat-memory",permalink:"/guides-chat-memory",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Chat Memory",sidebar_position:1,slug:"/guides-chat-memory"},sidebar:"docs",previous:{title:"Security best practices",permalink:"/configuration-security-best-practices"},next:{title:"Data & Message",permalink:"/guides-data-message"}},c={},h=[{value:"Session ID",id:"4ee86e27d1004e8288a72c633c323703",level:2},{value:"Store chat memory in an external database",id:"store-chat-memory-in-an-external-database",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Connect the chat memory component to an external database",id:"connect-the-chat-memory-component-to-an-external-database",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Langflow allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create separate ",(0,n.jsx)(s.em,{children:"memories"})," for agents to store and recall information as needed."]}),"\n",(0,n.jsxs)(s.p,{children:["In any project, as long as there are ",(0,n.jsx)(s.a,{href:"/components-io",children:(0,n.jsx)(s.strong,{children:"Chat"})})," being used, memories are always being stored by default. These are messages from a user to the AI or vice-versa."]}),"\n",(0,n.jsxs)(s.p,{children:["To see and access this history of messages, Langflow features a component called ",(0,n.jsx)(s.a,{href:"/components-helpers#memory-history",children:"Message history"}),". It retrieves previous messages and outputs them in structured format or parsed."]}),"\n",(0,n.jsxs)(s.p,{children:["To learn the basics about memory in Langflow, check out the ",(0,n.jsx)(s.a,{href:"/starter-projects-memory-chatbot",children:"Memory Chatbot"})," starter example."]}),"\n",(0,n.jsxs)(s.p,{children:["Memories can be visualized and managed directly from the ",(0,n.jsx)(s.strong,{children:"Playground"}),". You can edit and remove previous messages to inspect and validate the AI\u2019s response behavior. You can remove or edit previous messages to get your models acting just right."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(75918).A+"",width:"3244",height:"1776"})}),"\n",(0,n.jsx)(s.p,{children:"Modifying these memories will influence the behavior of the chatbot responses, as long as an agent uses them. Here you have the ability to remove or edit previous messages, allowing them to manipulate and explore how these changes affect model responses."}),"\n",(0,n.jsxs)(s.p,{children:["To modify chat memories, from the playground, click the ",(0,n.jsx)(s.strong,{children:"Options"})," menu of any session, and then select ",(0,n.jsx)(s.strong,{children:"Message Logs"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(77232).A+"",width:"3278",height:"1884"})}),"\n",(0,n.jsx)(s.h2,{id:"4ee86e27d1004e8288a72c633c323703",children:"Session ID"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["Chat conversations store messages categorized by a ",(0,n.jsx)(s.code,{children:"Session ID"}),". A single flow can host multiple session IDs, and different flows can also share the same one."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Chat Memory"})," component also retrieves message histories by ",(0,n.jsx)(s.code,{children:"Session ID"}),", which users can change in the component's ",(0,n.jsx)(s.strong,{children:"Controls"})," pane."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(86190).A+"",width:"3246",height:"1772"})}),"\n",(0,n.jsxs)(s.p,{children:["By default, if the ",(0,n.jsx)(s.code,{children:"Session ID"})," value is empty, it is set to the same value as ",(0,n.jsx)(s.code,{children:"Flow ID"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can also display all messages stored across every flow and session by going to\xa0",(0,n.jsx)(s.strong,{children:"Settings"}),"\xa0>\xa0",(0,n.jsx)(s.strong,{children:"Messages"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(25381).A+"",width:"2910",height:"1686"})}),"\n",(0,n.jsx)(s.h2,{id:"store-chat-memory-in-an-external-database",children:"Store chat memory in an external database"}),"\n",(0,n.jsxs)(s.p,{children:["Chat memory is retrieved from an external database or vector store using the ",(0,n.jsx)(s.a,{href:"/components-helpers#chat-memory",children:"Chat Memory"})," component."]}),"\n",(0,n.jsxs)(s.p,{children:["Chat memory is stored to an external database or vector store using the ",(0,n.jsx)(s.a,{href:"/components-helpers#store-message",children:"Store Message"})," component."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"/components-memories",children:(0,n.jsx)(s.strong,{children:"Chat Memories"})})," components provide access to their respective external databases ",(0,n.jsx)(s.strong,{children:"as memory"}),". This allows AIs to access external memory for persistence and context retention. For example, connect the ",(0,n.jsx)(s.strong,{children:"Chat Memory"})," component to an ",(0,n.jsx)(s.strong,{children:"AstraDBChatMemory"})," component to store the message history in an external Astra DB database."]}),"\n",(0,n.jsxs)(s.p,{children:["This example stores and retrieves chat history from an ",(0,n.jsx)(s.a,{href:"/components-memories#astradbchatmemory-component",children:"AstraDBChatMemory"})," component with ",(0,n.jsx)(s.strong,{children:"Store Message"})," and ",(0,n.jsx)(s.strong,{children:"Chat Memory"})," components."]}),"\n",(0,n.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://platform.openai.com/",children:"An OpenAI API key"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.datastax.com/en/astra-db-serverless/get-started/quickstart.html",children:"An Astra DB vector database"}),"\xa0with:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Application Token"}),"\n",(0,n.jsx)(s.li,{children:"API Endpoint"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"connect-the-chat-memory-component-to-an-external-database",children:"Connect the chat memory component to an external database"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Load the ",(0,n.jsx)(s.a,{href:"/starter-projects-memory-chatbot",children:"Memory Chatbot"})," starter project.\nThis starter project extends the basic prompting flow to include a chat memory component."]}),"\n",(0,n.jsxs)(s.li,{children:["Add the ",(0,n.jsx)(s.a,{href:"/components-helpers#store-message",children:"Store Message"})," component to the flow.\nThe ",(0,n.jsx)(s.strong,{children:"Store message"})," component stores messages in the external database."]}),"\n",(0,n.jsxs)(s.li,{children:["Add the ",(0,n.jsx)(s.a,{href:"/components-memories#astradbchatmemory-component",children:"AstraDBChatMemory Component"})," to the flow.\nThe ",(0,n.jsx)(s.strong,{children:"Astra DB Chat Memory"})," component stores and retrieves messages from ",(0,n.jsx)(s.strong,{children:"Astra DB"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Configure the ",(0,n.jsx)(s.strong,{children:"AstraDBChatMemory"})," component with your AstraDB instance details.","\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.strong,{children:"Astra DB Application Token"})," field, add your Astra token. (",(0,n.jsx)(s.code,{children:"AstraCS:..."}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.strong,{children:"API Endpoint"})," field, add your Astra database's endpoint. (for example, ",(0,n.jsx)(s.code,{children:"https://12adb-bc-5378c845f05a6-e0a12-bd889b4-us-east-2.apps.astra.datastax.com"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Connect the ",(0,n.jsx)(s.strong,{children:"AstraDBChatMemory"})," component output to the external memory inputs of the ",(0,n.jsx)(s.a,{href:"/components-helpers#chat-memory",children:"Chat Memory"})," and ",(0,n.jsx)(s.a,{href:"/components-helpers#store-message",children:"Store Message"})," components."]}),"\n",(0,n.jsxs)(s.li,{children:["Link the ",(0,n.jsx)(s.a,{href:"/components-io#chat-output",children:"Chat Output"})," component to the input of the ",(0,n.jsx)(s.a,{href:"/components-helpers#store-message",children:"Store Message"})," component."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Your completed flow should look like this:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Sample Flow storing Chat Memory in AstraDB",src:t(72654).A+"",width:"3178",height:"1228"})}),"\n",(0,n.jsxs)(s.ol,{start:"7",children:["\n",(0,n.jsx)(s.li,{children:"In Langflow, create message traffic by running a flow."}),"\n",(0,n.jsx)(s.li,{children:"Inspect your Astra database's tables and activity.\nYou will see new tables and traffic created."}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},72654:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/astra_db_chat_memory_rounded-9746ca2bb69d3b07ac0a071f4b9471b3.png"},86190:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/chat-input-controls-pane-b60b21c923aa47a2265ae1775e693cb0.png"},77232:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/logs-7deb7c1a822f826469d17856b9dcebb5.png"},75918:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/playground-b2c623fb6849024570bc9bd5285309f5.png"},25381:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/settings-messages-d0ad3a8e3bea5f8896565c041946a919.png"},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var n=t(96540);const o={},r=n.createContext(o);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);