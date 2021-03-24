.PHONY: dev build server watch-server watch-styles deploy

# runs profile commands
dev:
	foreman start

# builds site into _site
build:
	bundle exec jekyll build
	sass assets/main.scss assets/main.css

# serves built site locally
server:
	ruby -run -e httpd -- _site -p 8000

# local jekyll development
watch-server:
	bundle exec jekyll serve

# local stylesheet development
watch-styles:
	bundle exec sass --watch assets/main.scss

# pushes built site
deploy: build
	rm-wh push-static senior-visual-designer.risd.systems --staticFolder=_site
