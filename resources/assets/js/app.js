
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue');


 /* components */
 Vue.component('home', require('./components/HomePage.vue'));
 Vue.component('chatmessage', require('./components/ChatMessage.vue'));
 Vue.component('chatlog', require('./components/ChatLog.vue'));
 Vue.component('chatinput', require('./components/ChatInput.vue'));

 const app = new Vue({
 	el: '#app',
 	data:{
 		messages:[
 		{
 			message: 'Hey',
 			sender: 'Default Sender'
 		},
 		/*{
 			message: 'Hello',
 			sender: 'Shohan'
 		}*/
 		]
 	},
 	methods:{
 		addMessage(message) {
 			/*Add new messages*/
 			this.messages.push(message);
 		}
 	}
 });
