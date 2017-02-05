#!/usr/bin/env python

import json
import time

# Import modules for CGI handling
import cgi, cgitb

# Create instance of FieldStorage
form = cgi.FieldStorage()

# The input looks like 'a=1&b=2&c=hi+there'.
#post_message = raw_input()
#data_dict = {}
#for line in post_message.strip().split('&'):
#    try:
#        k, v = line.split('=', 1)
#    except:
#        continue
#    data_dict[k] = v.replace('+', ' ')
results = {'message': 'telescopes are 95',
           'date': time.asctime()}
input1 = form.getvalue('text_input1')
if input1 is not None:
    results['also'] = 'You said ' + input1
else:
    results['also'] = 'Button=%s' % form.getvalue('button')

text = json.dumps(results)
print 'Content-type: application/json'
print
print text
