# install the depandancies and make a home for the cms
init::
	npm i
	mkdir manager/assets/netlify-cms
	cp -a node_modules/netlify-cms/dist/. manager/assets/netlify-cms/

# run the netlify-cms-proxy for developing locally (not commiting to github)
netlify-cms-proxy-server:
	npx netlify-cms-proxy-server

# start a browser-sync server from the current directory and watch that same directory. Use port 3000
browser-sync:
	npx browser-sync start --server '.' --files '.' --port 3000

# run the tasks concurrently 
serve:
	make -j 2 netlify-cms-proxy-server browser-sync