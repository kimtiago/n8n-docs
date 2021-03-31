(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1213:function(e,t,o){e.exports=o.p+"assets/img/workflow.8ad1a34f.png"},1214:function(e,t,o){e.exports=o.p+"assets/img/WiseTrigger_node.6f6ded92.png"},1215:function(e,t,o){e.exports=o.p+"assets/img/Wise_node.db6a4487.png"},1216:function(e,t,o){e.exports=o.p+"assets/img/Set_node.595f20ec.png"},1217:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.7034f76f.png"},1697:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"wise-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wise-trigger"}},[e._v("#")]),e._v(" Wise Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://wise.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wise"),n("OutboundLink")],1),e._v(" allows you to transfer money abroad with low-cost money transfers, receive money with international account details, and track transactions on your phone.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Wise/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),n("ul",[n("li",[e._v("Triggered every time a balance account is credited")]),e._v(" "),n("li",[e._v("Triggered every time a transfer's list of active cases is updated")]),e._v(" "),n("li",[e._v("Triggered every time a transfer's status is updated")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive updates from Wise and add information of a transfer to a base in Airtable. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/993",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("Wise Trigger")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Wise/"}},[e._v("Wise")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1213),alt:"A workflow with the Wise Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-wise-trigger-node-transferstatechange"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-wise-trigger-node-transferstatechange"}},[e._v("#")]),e._v(" 1. Wise Trigger node (transferStateChange)")]),e._v(" "),n("p",[e._v("This node will trigger the workflow when the status of your transfer changes.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Wise Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Wise/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Personal' from the "),n("em",[n("strong",[e._v("Profile")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Transfer State Changed' from the "),n("em",[n("strong",[e._v("Event")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when a new order gets created.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1214),alt:"Using the Wise Trigger node to trigger the workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_2-wise-node-get-transfer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-wise-node-get-transfer"}},[e._v("#")]),e._v(" 2. Wise node (get: transfer)")]),e._v(" "),n("p",[e._v("This node will get the information about the transfer.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Transfer' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Transfer ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > data > resource > id. You can also add the following expression: "),n("code",[e._v('{{$json["data"]["resource"]["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the transfer.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1215),alt:"Using the Wise node to retrieve the information of the transfer"}})]),e._v(" "),n("h3",{attrs:{id:"_3-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),n("code",[e._v("Transfer ID")]),e._v(", "),n("code",[e._v("Date")]),e._v(", "),n("code",[e._v("Reference")]),e._v(", and "),n("code",[e._v("Amount")]),e._v(" in this node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Transfer ID")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Date")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > created. You can also add the following expression: "),n("code",[e._v('{{$json["created"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Reference")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > reference. You can also add the following expression: "),n("code",[e._v('{{$json["reference"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Amount")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > sourceValue. You can also add the following expression: "),n("code",[e._v('{{$json["sourceValue"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sets the values of "),n("code",[e._v("Transfer ID")]),e._v(", "),n("code",[e._v("Date")]),e._v(", "),n("code",[e._v("Reference")]),e._v(", and "),n("code",[e._v("Amount")]),e._v(". These values are passed to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1216),alt:"Using the Set node to set the values"}})]),e._v(" "),n("h3",{attrs:{id:"_4-airtable-node-append"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-airtable-node-append"}},[e._v("#")]),e._v(" 4. Airtable node (Append)")]),e._v(" "),n("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),n("a",{attrs:{href:"https://airtable.com/shrZQQCRtQPBYTmUe",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),n("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the Base ID in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),n("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),n("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),n("li",[e._v("Enter the name of your table in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1217),alt:"Using the Airtable node to insert data into an Airtable table"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Wise Trigger node.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);