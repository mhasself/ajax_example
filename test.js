
/* Format time intervals for input to human brain */

function human_interval(span) {
  if (span >= 86400*2)
    return (span/86400).toFixed(2) + " days";
  if (span >= 3600*2)
    return (span/3600).toFixed(1) + " hours";
  if (span >= 60*2)
    return (span/60).toFixed(1) + " mins";
  return Math.round(span) + " secs";
}

/* Debugging */

function log_init() {
  $('#debug').html('<b>Debug:</b>');
}

function log_message(msg) {
  e = $('#debug');
  e.html(e.html() + '<br />\n' + msg);
}

/* AJAX */

/* Timeouts... */
var auto_refresh_s = 60;
var auto_refresh_divide = 2;
var auto_refresh_counter = 0;
var auto_refresher = setInterval(auto_refresh, auto_refresh_s * 1000 /
				 auto_refresh_divide);
var do_full_update = 0;

function auto_refresh() {
  if (++auto_refresh_counter == auto_refresh_divide)
    post_background_request({});
}

function toggle_enabled(code) {
  ecode = $('#enabled_'+code).html();
  if (ecode == 'enabled')
    post_background_request({disable: code});
  else if (ecode == 'disabled')
    post_background_request({enable: code});
}

function post_background_request(params) {
  rc = $('#refresh_indicator');
  if (params.full_update) {
    do_full_update = 1;
    rc.html('Populating...');
  } else
    rc.html('Updating...');
  /* Add some form inputs data. */
  params.text_input1 = $('#example-text-input').val();

  auto_refresh_counter = 0;
  if (!($.post('cgi-bin/test.py', params,
	       update_states_from_server_data,
	       'json'))) {
    rc.html('Update failed! (Try again)');    
  } 
}

function update_states_from_server_data(data, status) {
  // Callback for AJAX query.
  d = $('#status_message');
  d.html(data.date);
  if ('also' in data)
    $('#debug').html(data.also);
  else
    $('#debug').html('');
  rc = $('#refresh_indicator');
  rc.html('Refresh')
}

