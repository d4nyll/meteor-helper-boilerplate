// Replace 'helper' with your helper name
Template.registerHelper('helper', function(params) {

	// {{helper}} - no parameter
	if(params == undefined && typeof params == 'undefined') {

	}

	// {{helper "abc"}} - string
	if(typeof params == 'string') {

	}

	if(typeof params == 'object') {

		// For paramters separated by spaces, only the first parameter gets recognized
		// {{helper abc}} - where abc is an undefined variable
		if(params == null) {

		}

		if(params != null) {

			// For parameters given as key=value pairs, all parameters are returned. Values can be objects, arrays
			// {{helper abc="def" hij="klm"}} - key/value pairs
			if(params.hash != undefined) {

			}

			// For parameters given as objects, arrays, passed in using template helpers
			// {{helper abc}} - where abc is an object/array passed in using a helper
			else {

			}
		}
	}
});