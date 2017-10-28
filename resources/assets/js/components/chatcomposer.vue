<template lang="html">

	<div class="chat-composer">
		<input type="text" placeholder="send message"
		v-model="messageText" @keyup.enter="sendMessage"
		v-on:keydown.enter="sendMessage">
		<button class="btn btn-primary" @click="sendMessage">Send</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			messageText: ''
			}
		},
		methods: {
		sendMessage(){
		

		this.$emit('messagesent', {
		message:this.messageText,
		user:"John doe"});
		this.messageText = "";
		}
		}
	}
</script>
<style lang="css">
.chat-composer{
	display: flex;
}
.chat-composer input{
	flex: auto;
}
	.chat-composer button {
	border-radius: 0;
	}
</style> 