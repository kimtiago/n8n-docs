(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1585:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"pushover"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pushover"}},[e._v("#")]),e._v(" Pushover")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.pushover.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pushover"),r("OutboundLink")],1),e._v(" is a simple push notification service that integrates easily into web apps, network monitors, shell scripts, servers, and anything else that needs to send alerts to your Android, iPhone, iPad, and Desktop.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Pushover/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Message")]),e._v(" "),r("ul",[r("li",[e._v("Push")])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to send daily weather updates via a push notification using the Pushover node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/740",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Pushover")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(952),alt:"A workflow with the Pushover node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-cron-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),r("p",[e._v("The Cron node will trigger the workflow daily at 9 AM.")]),e._v(" "),r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),r("li",[e._v("Set hours to 9 in the "),r("em",[r("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 9 AM.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(953),alt:"Using the Cron node to trigger the workflow daily at 9 am"}})]),e._v(" "),r("h3",{attrs:{id:"_2-openweathermap-node-current-weather"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node-current-weather"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node (Current Weather)")]),e._v(" "),r("p",[e._v("This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the OpenWeatherMap node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("berlin")]),e._v(" in the "),r("em",[r("strong",[e._v("City")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns data about the current weather in Berlin.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(954),alt:"Using the OpenWeatherMap node to get weather updates for Berlin"}})]),e._v(" "),r("h3",{attrs:{id:"_3-pushover-node-push-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-pushover-node-push-message"}},[e._v("#")]),e._v(" 3. Pushover node (push: message)")]),e._v(" "),r("p",[e._v("This node will send a push notification with the weather update, which was sent by the previous node.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Pushover node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Pushover/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter a user key in the "),r("em",[r("strong",[e._v("User Key")])]),e._v(" field. You can obtain your user key from the "),r("a",{attrs:{href:"https://www.pushover.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pushover Dashboard"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Message")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"5"}},[r("li",[e._v("Enter the following message in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field: "),r("code",[e._v('Hey! The temperature outside is {{$node["OpenWeatherMap"].json["main"]["temp"]}}°C.')]),e._v(".")]),e._v(" "),r("li",[e._v("Select 'Normal Priority' from the "),r("em",[r("strong",[e._v("Priority")])]),e._v(" dropdown list. This will trigger sound, vibration, and display an alert according to the user's device settings.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" and select 'Title' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Today's Weather")]),e._v(" in the "),r("em",[r("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends a push notification to a device with the weather update.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(955),alt:"Using the Pushover node to send weather updates via a push notification"}})])])}),[],!1,null,null,null);t.default=n.exports},952:function(e,t,o){e.exports=o.p+"assets/img/workflow.71802df5.png"},953:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.20da8a84.png"},954:function(e,t,o){e.exports=o.p+"assets/img/OpenWeatherMap_node.e62c6f40.png"},955:function(e,t,o){e.exports=o.p+"assets/img/Pushover_node.dc69b9ee.png"}}]);