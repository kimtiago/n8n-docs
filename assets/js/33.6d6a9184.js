(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1523:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"google-cloud-realtime-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-realtime-database"}},[e._v("#")]),e._v(" Google Cloud Realtime Database")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://firebase.google.com/docs/database/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Realtime Database"),a("OutboundLink")],1),e._v(" is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("ul",[a("li",[e._v("Write data to a database")]),e._v(" "),a("li",[e._v("Delete data from a database")]),e._v(" "),a("li",[e._v("Get a record from a database")]),e._v(" "),a("li",[e._v("Append to a list of data")]),e._v(" "),a("li",[e._v("Update item on a database")])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to receive updates of the position of the ISS every minute and push it to a database using the Google Cloud Realtime Database node. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/787",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Google Cloud Realtime Database")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(786),alt:"A workflow with the Google Cloud Realtime Database node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-cron-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),a("p",[e._v("The Cron node will trigger the workflow every minute.")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select 'Every Minute' from the "),a("em",[a("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every minute.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(787),alt:"Using the Cron node to trigger the workflow every minute"}})]),e._v(" "),a("h3",{attrs:{id:"_2-http-request-node-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),a("p",[e._v("This node will make a GET request to the API "),a("code",[e._v("https://api.wheretheiss.at/v1/satellites/25544/positions")]),e._v(" to fetch the position of the ISS. This information gets passed on to the next node in the workflow.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Enter "),a("code",[e._v("https://api.wheretheiss.at/v1/satellites/25544/positions")]),e._v(" in the "),a("em",[a("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Parameter")])]),e._v(" button in the "),a("em",[a("strong",[e._v("Query Parameters")])]),e._v(" section.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("timestamps")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Enter the following expression: "),a("code",[e._v("{{Date.now()}}")]),e._v(". This expression will return the current timestamp.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns the information about the location of the ISS.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(788),alt:"Using the HTTP Request node to get the information about the location of the ISS"}})]),e._v(" "),a("h3",{attrs:{id:"_3-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),a("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("latitude")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > 0 > latitude. You can also add the following expression: "),a("code",[e._v('{{$node["HTTP Request"].json["0"]["latitude"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("longitude")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > 0 > longitude. You can also add the following expression: "),a("code",[e._v('{{$node["HTTP Request"].json["0"]["longitude"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("timestamp")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > 0 > timpestamp. You can also add the following expression: "),a("code",[e._v('{{$node["HTTP Request"].json["0"]["timestamp"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Keep Only Set")])]),e._v(" to "),a("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node uses the data from the previous node and returns the data that we set for the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(789),alt:"Using the Set node to set the data"}})]),e._v(" "),a("h3",{attrs:{id:"_4-google-cloud-realtime-database-node-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-google-cloud-realtime-database-node-push"}},[e._v("#")]),e._v(" 4. Google Cloud Realtime Database node (push)")]),e._v(" "),a("p",[e._v("This node will push the data from the previous node to the "),a("code",[e._v("iss")]),e._v(" path in Google Cloud Realtime Database. If you have created a path with a different name, you can use that path instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Google Cloud Realtime Database node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select a project from the "),a("em",[a("strong",[e._v("Project ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Push' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter a path in the "),a("em",[a("strong",[e._v("Object Path")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("latitude, longitude, timestamp")]),e._v(" in the "),a("em",[a("strong",[e._v("Columns / Attributes")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node pushes the data from the previous node to the "),a("code",[e._v("iss")]),e._v(" path in Google Cloud Realtime Database.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(790),alt:"Using the Google Cloud Realtime Database node to push the data to a path"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])])}),[],!1,null,null,null);t.default=n.exports},786:function(e,t,o){e.exports=o.p+"assets/img/workflow.e4ab9815.png"},787:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.25caa48a.png"},788:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.6b8cb7eb.png"},789:function(e,t,o){e.exports=o.p+"assets/img/Set_node.ddf85805.png"},790:function(e,t,o){e.exports=o.p+"assets/img/GoogleCloudRealtimeDatabase_node.f7815d1a.png"}}]);