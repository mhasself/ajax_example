WEB_INSTALL=/var/www/ajex
CGI_INSTALL=/var/www/ajex/cgi-bin
CFG_INSTALL=/etc/apache2/sites-enabled/010-ajex.conf

web_files = test.php test.js
cgi_files = test.py

default: install

install:
	install -d $(WEB_INSTALL)
	install -d $(CGI_INSTALL)
	install $(web_files) $(WEB_INSTALL)
	install $(cgi_files) $(CGI_INSTALL)
	install test.apache $(CFG_INSTALL)
