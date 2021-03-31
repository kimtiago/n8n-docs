(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1553:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"mattermost"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mattermost"}},[e._v("#")]),e._v(" Mattermost")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://mattermost.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mattermost"),n("OutboundLink")],1),e._v(" is an open-source, self-hostable online chat service with file sharing, search, and integrations. It is designed as an internal chat for organisations and companies.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Channel")]),e._v(" "),n("ul",[n("li",[e._v("Add a user to a channel")]),e._v(" "),n("li",[e._v("Create a new channel")]),e._v(" "),n("li",[e._v("Soft delete a channel")]),e._v(" "),n("li",[e._v("Get a page of members for a channel")]),e._v(" "),n("li",[e._v("Restores a soft deleted channel")]),e._v(" "),n("li",[e._v("Get statistics for a channel")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Message")]),e._v(" "),n("ul",[n("li",[e._v("Soft delete a post, by marking the post as deleted in the database")]),e._v(" "),n("li",[e._v("Post a message into a channel")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("User")]),e._v(" "),n("ul",[n("li",[e._v("Create a new user")]),e._v(" "),n("li",[e._v("Deactivates the user and revokes all its sessions by archiving its user object")]),e._v(" "),n("li",[e._v("Retrieve all users")]),e._v(" "),n("li",[e._v("Get a user by email")]),e._v(" "),n("li",[e._v("Get a user by id")]),e._v(" "),n("li",[e._v("Invite a user to a team")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a channel, add a member, and post a message to the channel on Mattermost. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/832",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Mattermost")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(864),alt:"A workflow with the Mattermost node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-mattermost-node-create-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-create-channel"}},[e._v("#")]),e._v(" 2. Mattermost node (create: channel)")]),e._v(" "),n("p",[e._v("This node will create a new channel named "),n("code",[e._v("docs")]),e._v(" in Mattermost. If you want to create a channel with a different name, enter that name instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a team from the "),n("em",[n("strong",[e._v("Team ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Docs")]),e._v(" in the "),n("em",[n("strong",[e._v("Display Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("docs")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new channel named "),n("code",[e._v("docs")]),e._v(" in Mattermost.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(865),alt:"Using the Mattermost node to create a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_3-mattermost1-node-adduser-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mattermost1-node-adduser-channel"}},[e._v("#")]),e._v(" 3. Mattermost1 node (addUser: channel)")]),e._v(" "),n("p",[e._v("This node will add a member to the channel that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Add User' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Mattermost > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Mattermost"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select a user from the "),n("em",[n("strong",[e._v("User ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node adds a user to the channel that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(866),alt:"Using the Mattermost node to add a user to a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_4-mattermost2-node-post-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-mattermost2-node-post-message"}},[e._v("#")]),e._v(" 4. Mattermost2 node (post: message)")]),e._v(" "),n("p",[e._v("This node will post a message to the channel that we created using the Mattermost node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Mattermost > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Mattermost"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter a message in the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node posts a message to the channel that we created in the Mattermost node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(867),alt:"Using the Mattermost node to post a message to a channel"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-do-i-resolve-the-error-for-the-channel-id-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-resolve-the-error-for-the-channel-id-field"}},[e._v("#")]),e._v(" How do I resolve the error for the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" field?")]),e._v(" "),n("p",[e._v("If you're not the System Administrator, you might get an error "),n("code",[e._v('there was a problem loading the parameter options from server: "Mattermost error response: You do not have the appropriate permissions."')]),e._v(" next to the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" field.")]),e._v(" "),n("p",[e._v("If the system administrator has granted you the "),n("code",[e._v("post:channel")]),e._v(" permissions, you will be able to execute the node successfully even with the error.")]),e._v(" "),n("h3",{attrs:{id:"how-do-i-find-the-channel-id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-find-the-channel-id"}},[e._v("#")]),e._v(" How do I find the Channel ID?")]),e._v(" "),n("p",[e._v("To find the Channel ID in Mattermost, follow the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Select the channel from the left sidebar.")]),e._v(" "),n("li",[e._v("Click on the channel name on the top and select 'View Info' from the dropdown list.")]),e._v(" "),n("li",[e._v("Use the displayed "),n("em",[n("strong",[e._v("ID")])]),e._v(" in n8n.")])]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/creating-custom-incident-response-workflows-with-n8n-9baef0bbedb9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Custom Incident Response Workflows with n8n 🚨"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/creating-error-workflows-in-n8n-6e03c9ecbc0f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Error Workflows in n8n 🌪"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://n8n.io/blog/creating-triggers-for-n8n-workflows-using-polling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating triggers for n8n workflows using polling ⏲"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/effortless-video-collaboration-with-whereby-mattermost-and-n8n-8fc397feb9cb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Effortless video collaboration with Whereby, Mattermost, and n8n 📹"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/giving-kudos-to-contributors-with-github-slack-and-n8n-b3f5f4a653a6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Giving kudos to contributors with GitHub, Slack, and n8n 👏"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://n8n.io/blog/how-to-host-virtual-coffee-breaks-with-n8n/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to host virtual coffee breaks with n8n ☕️"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/supercharging-your-conference-registration-process-with-n8n-2831cdff37f9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supercharging your conference registration process with n8n 🎫"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/webhooks-fun-with-n8n-and-mattermost-4ebf7e2b4d2a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webhooks Fun with n8n and Mattermost 🍸"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports},864:function(e,t,o){e.exports=o.p+"assets/img/workflow.eb022930.png"},865:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.2fd336ac.png"},866:function(e,t,o){e.exports=o.p+"assets/img/Mattermost1_node.4021a559.png"},867:function(e,t,o){e.exports=o.p+"assets/img/Mattermost2_node.86d3912b.png"}}]);