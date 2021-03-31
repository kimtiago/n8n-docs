(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1517:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gotowebinar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gotowebinar"}},[e._v("#")]),e._v(" GoToWebinar")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.gotomeeting.com/webinar",target:"_blank",rel:"noopener noreferrer"}},[e._v("GoToWebinar"),a("OutboundLink")],1),e._v(" is a platform that helps you create and deliver online video conferences.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/GoToWebinar/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Attendee")]),e._v(" "),a("ul",[a("li",[e._v("Get an attendee")]),e._v(" "),a("li",[e._v("Get all attendees")]),e._v(" "),a("li",[e._v("Get details of an attendee")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Co-Organizer")]),e._v(" "),a("ul",[a("li",[e._v("Create a co-organizer")]),e._v(" "),a("li",[e._v("Delete a co-organizer")]),e._v(" "),a("li",[e._v("Get all co-organizers")]),e._v(" "),a("li",[e._v("Reinvite a co-organizer")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Panelist")]),e._v(" "),a("ul",[a("li",[e._v("Create a panelist")]),e._v(" "),a("li",[e._v("Delete a panelist")]),e._v(" "),a("li",[e._v("Get all panelists")]),e._v(" "),a("li",[e._v("Reinvite a panelist")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Registrant")]),e._v(" "),a("ul",[a("li",[e._v("Create a registrant")]),e._v(" "),a("li",[e._v("Delete a registrant")]),e._v(" "),a("li",[e._v("Get a registrant")]),e._v(" "),a("li",[e._v("Get all registrants")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Session")]),e._v(" "),a("ul",[a("li",[e._v("Get a session")]),e._v(" "),a("li",[e._v("Get all sessions")]),e._v(" "),a("li",[e._v("Get details of a session")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Webinar")]),e._v(" "),a("ul",[a("li",[e._v("Create a webinar")]),e._v(" "),a("li",[e._v("Get a webinar")]),e._v(" "),a("li",[e._v("Get all webinars")]),e._v(" "),a("li",[e._v("Update a webinar")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create, update, and get a webinar. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/960",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("GoToWebinar")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(761),alt:"A workflow with the GoToWebinar node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-gotowebinar-node-create-webinar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-gotowebinar-node-create-webinar"}},[e._v("#")]),e._v(" 2. GoToWebinar node (create: webinar)")]),e._v(" "),a("p",[e._v("This node will create a new webinar in GoToWebinar.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the GoToWebinar node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/GoToWebinar/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Webinar' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Create' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter a subject in the "),a("em",[a("strong",[e._v("Subject")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Time Range")])]),e._v(" button.")]),e._v(" "),a("li",[e._v("Set the start time in the "),a("em",[a("strong",[e._v("Start Time")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Set the end time in the "),a("em",[a("strong",[e._v("End Time")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new webinar.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(762),alt:"Using the GoToWebinar node to create a new webinar"}})]),e._v(" "),a("h3",{attrs:{id:"_3-gotowebinar1-node-update-webinar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-gotowebinar1-node-update-webinar"}},[e._v("#")]),e._v(" 3. GoToWebinar1 node (update: webinar)")]),e._v(" "),a("p",[e._v("This node will update the description of the webinar that we created in the previous node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Webinar' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Webinar Key")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > webinarKey. You can also add the following expression: "),a("code",[e._v('{{$json["webinarKey"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'Description' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter a description in the "),a("em",[a("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node updates the description of the webinar that we created in the previous node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(763),alt:"Using the GoToWebinar node to update a webinar"}})]),e._v(" "),a("h3",{attrs:{id:"_4-gotowebinar2-node-get-webinar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-gotowebinar2-node-get-webinar"}},[e._v("#")]),e._v(" 4. GoToWebinar2 node (get: webinar)")]),e._v(" "),a("p",[e._v("This node will get the information about the webinar that we created earlier.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Webinar' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Get' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Webinar Key")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > GoToWebinar > Output Data > JSON > webinarKey. You can also add the following expression: "),a("code",[e._v('{{$node["GoToWebinar"].json["webinarKey"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node returns the information about the webinar.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(764),alt:"Using the GoToWebinar node to get information of a webinar"}})])])}),[],!1,null,null,null);t.default=n.exports},761:function(e,t,o){e.exports=o.p+"assets/img/workflow.abb01059.png"},762:function(e,t,o){e.exports=o.p+"assets/img/GoToWebinar_node.b5d789bc.png"},763:function(e,t,o){e.exports=o.p+"assets/img/GoToWebinar1_node.fba20608.png"},764:function(e,t,o){e.exports=o.p+"assets/img/GoToWebinar2_node.3d585553.png"}}]);