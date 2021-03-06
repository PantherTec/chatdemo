
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-message', require('./components/chatmessage.vue'));
Vue.component('chat-log', require('./components/chatlog.vue'));
Vue.component('chat-composer', require('./components/chatcomposer.vue'));

const app = new Vue({
    el: '#app',
    data: {
    		messages: [] 
		},
    methods: {
    	addMessage(message){
    		// add to messages and also send to db
    		this.messages.push(message);
    		axios.post('/messages', message);
    	} 

    },
    created(){
    	axios.get('/messages').then(response => {
    		this.messages = response.data;
    	});
        Echo.private("chatroom")
         .listen('EventName', (e) => {

         });
	} 
});