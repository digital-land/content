# install the depandancies
init::
	npm i
	cp node_modules/netlify-cms/dist/netlify-cms.js cms/cms.js

# run the netlify-cms-proxy for developing locally (not commiting to github)
netlify-cms-proxy-server:
	npx netlify-cms-proxy-server

# start a browser-sync server from the current directory and watch that same directory. Use port 3000
browser-sync:
	npx browser-sync start --server '.' --files '.' --port 3000

# run the tasks concurrently 
serve:
	make -j 2 netlify-cms-proxy-server browser-sync