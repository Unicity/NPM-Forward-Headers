# Unicity-Forward-Headers

## About
Forwards the following headers:
```javascript
[
	'x-request-uuid',
	'x-request-release',

	// Envoy Headers
	'x-ot-span-context',
	'x-request-id',

	// Zipkin Headers
	'x-b3-traceid',
	'x-b3-spanid',
	'x-b3-parentspanid',
	'x-b3-sampled',

	// Jaeger Headers
	'x-b3-flags'
]
```

## Whats new?
#### 1.0.3
Breaking changes, unicity-forward-headers now expects the headers object directly and not request or response objects.
Also made it lowercase incoming headers to ensure dupliates are handled correctly.

## Example
```javascript
const ForwardHeaders = require('unicity-forward-headers');

response.headers = ForwardHeaders(request.headers, response.headers);
```
```javascript
const ForwardHeaders = require('unicity-forward-headers');

response.headers = ForwardHeaders(request.headers);
```