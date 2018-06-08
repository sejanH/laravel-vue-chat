<template>
	<div class="chatmessage">
		<strong>{{ message.message }}</strong>
		<small>{{ message.sender }}</small>
	</div>
</template>

<script>
	export default{
		props: ['message'],
		
	}
</script>

<style>
	
</style>