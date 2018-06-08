<template>
	<div class="chatText">
		<textarea name="msgBody" id="msgBody" cols="30" rows="2" v-model="messagetxt"></textarea>
		<button class="btn btn-primary" v-on:keyup.enter="doSend" v-on:click="doSend">Send</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				messagetxt: '',
				sender: 'Sejan'
			}
		},
		methods:{
			doSend(){
				this.$emit('messagesent',{
					message : this.messagetxt,
					sender: 'Sejan'
				});
				
				this.messagetxt= '';
			}
		}
	}
</script>

<style>
	.chatText{
		display: flex;
	}
	.chatText textarea{
		flex: 1 auto;
	}
	.chatText button{
		border-radius: 0;
	}
</style>