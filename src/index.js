

const forwardHeaders = (incoming, outgoing) => {
	const headers = [
		// Unicity Headers
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
	];

	for (let i in headers) {
		if (incoming.headers[headers[i]] === undefined) {
			outgoing.headers[headers[i]] = incoming.headers[headers[i]];
		}
	}

	return outgoing;
}


module.exports = forwardHeaders;
