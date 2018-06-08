<template>
	<div class="chat-log">
		<chatmessage v-for="message in messages":key="messages.id" :message="message"></chatmessage>
	</div>
</template>

<script>
	export default{
		props: ['messages'],
		/*data() {
			return{

			}
		}*/
	}
</script>

<style></style>