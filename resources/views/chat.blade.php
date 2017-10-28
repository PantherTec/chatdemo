
<!DOCTYPE html>
<html>
<head>
<title>chat room</title>
<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
	<div id="app" class="container">
		<div class="row">
        	<div class="col-md-8 col-md-offset-2">
            	<div class="panel panel-default">
                	<div class="panel-heading">chat room</div>
		<chat-log :messages="messages"></chat-log>
		<chat-composer v-on:messagesent="addMessage"></chat-composer>
				</div>
			</div>
		</div>
	</div>
<script src="js/app.js" charset="utf-8"></script>
</body>
</html>