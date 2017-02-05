<html>
    <head>
        <title>AJAX Example</title>
        <!-- link rel="stylesheet" type="text/css" href="test.css" -->
        <script src="test.js" type="text/javascript" ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <meta http-equiv="refresh" content="3600">
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">
    </head>
<body class="ajax_page" onload="post_background_request({full_update: 1});">

<h1>Situation</h1>

<div>
  <p id="refresh_indicator">Initializing...</p>
</div>

<div id="input_form">
  <button type="button" class="btn btn-secondary"
          onclick="post_background_request({button: 1})">Submit A</button>
  <button type="button" class="btn btn-secondary"
          onclick="post_background_request({button: 2})">Submit B</button>
  <div class="form-group row">
    <label for="example-text-input" class="col-2 col-form-label">Input:</label>
    <input class="form-control" type="text" value="" id="example-text-input">
    </input>
  </div>
  
</div>

<div id="status_message">
The message has not been set.
</div>

<div id="debug"></div>
</body>
</html>
