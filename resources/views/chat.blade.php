<!DOCTYPE html>
<html>
<head>
	<title>Chat Room</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        
	<link rel="stylesheet" type="text/css" href="{{asset('/css/app.css')}}">
</head>
<body>
	<div class="container">
		<div id="app">
			<chatlog :messages="messages"></chatlog>
			<chatinput v-on:messagesent="addMessage"></chatinput>
		</div>
	</div>
	<script defer src="{{asset('/js/app.js')}}"></script>
</body>
</html>