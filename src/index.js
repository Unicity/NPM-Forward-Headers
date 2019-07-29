

const forwardHeaders = (rawIncoming, rawOutgoing) => {
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

	// Lowercase all incoming headers
	const incoming = {};

	for (let i in rawIncoming) {
		incoming[String(i).toLowerCase()] = rawIncoming[i];
	}

	// Lowercase all outgoing headers
	const incoming = {};

	for (let i in rawOutgoing) {
		outgoing[String(i).toLowerCase()] = rawOutgoing[i];
	}

	for (let i in headers) {
		if (incoming[headers[i]] === undefined) {
			outgoing[headers[i]] = incoming[headers[i]];
		}
	}

	return outgoing;
}


module.exports = forwardHeaders;
