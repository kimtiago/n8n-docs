(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1442:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"http-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-request"}},[e._v("#")]),e._v(" HTTP Request")]),e._v(" "),n("p",[e._v("The HTTP Request node is one of the most versatile nodes in n8n. It allows you to make HTTP requests which can be used to query data from apps and services.")]),e._v(" "),n("h2",{attrs:{id:"node-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Authentication:")]),e._v(" In this dropdown list, there are several authentication options to use with HTTP requests.\n"),n("ul",[n("li",[e._v("Basic Auth")]),e._v(" "),n("li",[e._v("Digest Auth")]),e._v(" "),n("li",[e._v("Header Auth")]),e._v(" "),n("li",[e._v("OAuth1")]),e._v(" "),n("li",[e._v("OAuth2")]),e._v(" "),n("li",[e._v("None")])])]),e._v(" "),n("li",[n("strong",[e._v("Request Method:")]),e._v(" In this dropdown list, there are several methods that can be used to send different type of HTTP requests.\n"),n("ul",[n("li",[e._v("DELETE")]),e._v(" "),n("li",[e._v("GET")]),e._v(" "),n("li",[e._v("HEAD")]),e._v(" "),n("li",[e._v("PATCH")]),e._v(" "),n("li",[e._v("POST")]),e._v(" "),n("li",[e._v("PUT")])])]),e._v(" "),n("li",[n("strong",[e._v("URL:")]),e._v(" This field is where the URL to request has to be entered.")]),e._v(" "),n("li",[n("strong",[e._v("Ignore SSL Issues:")]),e._v(" This option can be used to download the response even if SSL validation is not possible.")]),e._v(" "),n("li",[n("strong",[e._v("Response Format:")]),e._v(" Select the format in which the data gets returned from the URL. You can choose between File, JSON, and String.")]),e._v(" "),n("li",[n("strong",[e._v("JSON/RAW Parameters:")]),e._v(" This option can be used to specify whether the body/query parameter should be set via the value-key pair UI or JSON/RAW.")]),e._v(" "),n("li",[n("strong",[e._v("Options")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Full Response:")]),e._v(" This option can be used to retrieve the full response instead of only the body from the URL.")]),e._v(" "),n("li",[n("strong",[e._v("Follow Redirect:")]),e._v(" This option can be used to follow any redirections with a status code 3xx.")]),e._v(" "),n("li",[n("strong",[e._v("Ignore Response Code:")]),e._v(" This option can be used to let the node execute even when the HTTP status code is not 2xx.")]),e._v(" "),n("li",[n("strong",[e._v("Proxy:")]),e._v(" This field is used to specify an HTTP proxy that you may want to use.")]),e._v(" "),n("li",[n("strong",[e._v("Timeout:")]),e._v(" The maximum time (in ms) to wait for a response header from the server before aborting the request.")]),e._v(" "),n("li",[n("strong",[e._v("Headers:")]),e._v(" This section is used to specify any optional HTTP request headers you may want to include with your request.")]),e._v(" "),n("li",[n("strong",[e._v("Query Parameters:")]),e._v(" This section is used to specify any HTTP query parameters you may want to include with your request.")])])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to GET a sample list of users from "),n("a",{attrs:{href:"https://reqres.in/",target:"_blank",rel:"noopener noreferrer"}},[e._v("reqres.in"),n("OutboundLink")],1),e._v(", add a new user using a POST request, and update the user using a PATCH request. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/602",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("HTTP Request")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(574),alt:"A workflow with the HTTP Request node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),n("ol",[n("li",[e._v("Enter "),n("code",[e._v("https://reqres.in/api/users")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(575),alt:"Get a list of sample users using the HTTP Request node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-http-request1-node-post"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request1-node-post"}},[e._v("#")]),e._v(" 3. HTTP Request1 node (POST)")]),e._v(" "),n("ol",[n("li",[e._v("Select 'POST' from the "),n("em",[n("strong",[e._v("Request Method")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("https://reqres.in/api/users")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Parameter")])]),e._v(" button in the "),n("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Neo")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Parameter")])]),e._v(" button in the "),n("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("job")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Programmer")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(576),alt:"Create a user using the HTTP Request node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-http-request2-node-patch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-request2-node-patch"}},[e._v("#")]),e._v(" 4. HTTP Request2 node (PATCH)")]),e._v(" "),n("ol",[n("li",[e._v("Select 'PATCH' from the "),n("em",[n("strong",[e._v("Request Method")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("https://reqres.in/api/users/2")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Parameter")])]),e._v(" button in the "),n("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Neo")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Parameter")])]),e._v(" button in the "),n("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("job")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("The Chosen One")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(577),alt:"Update a user using the HTTP Request node"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-fetch-a-binary-file-from-a-url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-fetch-a-binary-file-from-a-url"}},[e._v("#")]),e._v(" How to fetch a binary file from a URL?")]),e._v(" "),n("ol",[n("li",[e._v("Enter the URL of the file in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field. For example, you can enter "),n("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(" to fetch the n8n logo.")]),e._v(" "),n("li",[e._v("Select 'File' from the "),n("em",[n("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("(Optional) Change the binary property value in the "),n("em",[n("strong",[e._v("Binary Property")])]),e._v(" field. Throughout the workflow, you can refer to the binary data with the value you set in this field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")]),e._v(" "),n("li",[e._v("After the node gets executed, click on the "),n("em",[n("strong",[e._v("Binary")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Show Binary Data")])]),e._v(" button to view the file.")])]),e._v(" "),n("h3",{attrs:{id:"how-to-send-a-binary-file-to-an-api-endpoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-a-binary-file-to-an-api-endpoint"}},[e._v("#")]),e._v(" How to send a binary file to an API endpoint?")]),e._v(" "),n("p",[e._v("Depending on your use-case, you might want to send a binary file to an API endpoint. To do that, follow the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Connect the HTTP Request node with a node that has previously fetched the binary file. This node can be an HTTP Request node, "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node, "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleDrive/"}},[e._v("Google Drive")]),e._v(" node or any such node.")],1),e._v(" "),n("li",[e._v("Select 'POST' from the "),n("em",[n("strong",[e._v("Request Method")])]),e._v(" dropdown list ("),n("strong",[e._v("Note:")]),e._v(" Refer to the API documentation of your API to make sure that you have selected the correct HTTP request method).")]),e._v(" "),n("li",[e._v("Enter the URL where you want to send the binary file in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("JSON/RAW Parameters")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Send Binary Data")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("If you are referring to the binary property with a different value, enter that value in the "),n("em",[n("strong",[e._v("Binary Property")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Body Content Type' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Form-Data Multipart' from the "),n("em",[n("strong",[e._v("Body Content Type")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("h3",{attrs:{id:"how-to-get-the-http-status-code-after-an-execution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-http-status-code-after-an-execution"}},[e._v("#")]),e._v(" How to get the HTTP status code after an execution?")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Full Response'.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Full Response")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")])]),e._v(" "),n("p",[e._v("When the node gets executed, you will receive the HTTP status code, the HTTP status message, and the header parameters.")]),e._v(" "),n("h3",{attrs:{id:"how-to-send-xml-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-xml-data"}},[e._v("#")]),e._v(" How to send XML data?")]),e._v(" "),n("ol",[n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("JSON/RAW Parameters")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Body Content Type'.")]),e._v(" "),n("li",[e._v("Select 'RAW/Custom' from the "),n("em",[n("strong",[e._v("Body Content Type")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the XML data in the "),n("em",[n("strong",[e._v("Body")])]),e._v(" field.")])]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/building-an-expense-tracking-app-in-10-minutes-74b0cececc90",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building an expense tracking app in 10 minutes 📱"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/creating-scheduled-text-affirmations-with-n8n-1c4189efae19",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating scheduled text affirmations with n8n 🤟"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/automating-cross-posting-blog-posts-using-n8n-%EF%B8%8F-af2a89601810",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cross-posting content automatically with n8n ✍️"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/http-request-node-the-swiss-army-knife-b14e22283383",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Request Node — The Swiss Army Knife"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/supercharging-your-conference-registration-process-with-n8n-2831cdff37f9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supercharging your conference registration process with n8n 🎫"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports},574:function(e,t,o){e.exports=o.p+"assets/img/workflow.7ef78ff9.png"},575:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.5b860ab9.png"},576:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest1_node.76efed8b.png"},577:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest2_node.365c73f3.png"}}]);