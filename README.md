# Project
Project to generate pdf with puppeteer in a scalable way isolating responsibilities.

# Test
TODO

# Install
Run:
```bash
$: npm install
```

# Running
run an instance of chromium in headless mode, to make it easier we are running using [browserless.io](browserless.io).

Example:
```bash
# Start browserless
$: docker-compose up
# build your app node
$: npx tsc index.ts
# Run server
$: node index.js
```

# Generate PDF

## From url
```bash
$: curl --request POST \
  --url SERVER_HOST/api/pdf \
  --header 'Content-Type: application/json' \
  --data '{
	"fromUrl": "URL", # https://google.com.br
	"fromRawHTML": null
}'
```

## From HTML
```bash
$: curl --request POST \
  --url SERVER_HOST/api/pdf \
  --header 'Content-Type: application/json' \
  --data '{
	"fromUrl": null,
	"fromRawHTML": "fromRawHTML": "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>"
}'
```
