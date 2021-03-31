(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1567:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nasa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nasa"}},[e._v("#")]),e._v(" NASA")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://nasa.gov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NASA"),a("OutboundLink")],1),e._v(" is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research. The NASA API makes NASA data, including imagery, accessible to application developers.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/NASA/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Astronomy Picture of the Day")]),e._v(" "),a("ul",[a("li",[e._v("Get the Astronomy Picture of the Day")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Asteroid Neo-Feed")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve a list of asteroids based on their closest approach date to Earth")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Asteroid Neo-Lookup")]),e._v(" "),a("ul",[a("li",[e._v("Look up an asteroid based on its NASA SPK-ID")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Asteroid Neo-Browse")]),e._v(" "),a("ul",[a("li",[e._v("Browse the overall asteroid dataset")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Coronal Mass Ejection")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI coronal mass ejection data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Interplanetary Shock")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI interplanetary shock data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Solar Flare")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI solar flare data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Solar Energetic Particle")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI solar energetic particle data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Magnetopause Crossing")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve data on DONKI magnetopause crossings")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Radiation Belt Enhancement")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI radiation belt enhancement data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI High Speed Stream")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI high speed stream data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI WSA+EnlilSimulation")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI WSA+EnlilSimulation data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DONKI Notifications")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve DONKI notifications data")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Earth Imagery")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve Earth imagery")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Earth Assets")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve Earth assets")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to send the Astronomy Picture of the day daily to a Telegram channel. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/828",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("NASA")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Telegram/"}},[e._v("Telegram")])],1)]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(894),alt:"A workflow with the NASA node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-cron-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),a("p",[e._v("The Cron node will trigger the workflow daily at 8 PM.")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),a("li",[e._v("Set hours to 20 in the "),a("em",[a("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 8 PM.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(895),alt:"Using the Cron node to trigger the workflow daily at 8 pm"}})]),e._v(" "),a("h3",{attrs:{id:"_2-nasa-node-get-astronomypictureoftheday"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-nasa-node-get-astronomypictureoftheday"}},[e._v("#")]),e._v(" 2. NASA node (get:astronomyPictureOfTheDay)")]),e._v(" "),a("p",[e._v("This node will return the Astronomy Picture of the Day.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the NASA node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/NASA/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Download Image")])]),e._v(" to "),a("code",[e._v("false")]),e._v(". By setting this option to false the node will not return binary data.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node returns data for the Astronomy Picture of the Day. This data will be used by the next node in the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(896),alt:"Using the NASA node to get the Astronomy Picture of the Day"}})]),e._v(" "),a("h3",{attrs:{id:"_3-telegram-node-sendphoto-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-telegram-node-sendphoto-message"}},[e._v("#")]),e._v(" 3. Telegram node (sendPhoto: message)")]),e._v(" "),a("p",[e._v("This node will send the picture that we receive from the previous node to a channel.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Telegram node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Send Photo' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter a chat ID in the "),a("em",[a("strong",[e._v("Chat ID")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Photo")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"5"}},[a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > NASA > Output Data > JSON > url. You can also add the following expression: "),a("code",[e._v('{{$node["NASA"].json["url"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" and select 'Caption' from the dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Caption")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > NASA > Output Data > JSON > title. You can also add the following expression: "),a("code",[e._v('{{$node["NASA"].json["title"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node sends the image with a caption to the channel that we specifiy.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(897),alt:"Using the Telegram node to send the Astronomy Picture of the Day"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])])}),[],!1,null,null,null);t.default=s.exports},894:function(e,t,o){e.exports=o.p+"assets/img/workflow.f5fa3529.png"},895:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.79ae37af.png"},896:function(e,t,o){e.exports=o.p+"assets/img/NASA_node.13ffc016.png"},897:function(e,t,o){e.exports=o.p+"assets/img/Telegram_node.57e6ea30.png"}}]);