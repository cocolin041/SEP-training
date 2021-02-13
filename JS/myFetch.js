function myFetch(url, options) {
	return new Promise((res, rej) => {
		var xhttp = new XMLHttpRequest()
		xhttp.open(options.method, url, true)

		if (options.headers) {
			for (let key in options.headers) {
				xhttp.setRequestHeader(key, options.headers[key])
			}
		}
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status >= 200 && this.status < 300) {
					const response = {
						json: () => JSON.parse(xhttp.response),
					}
					res(response)
				} else {
					rej({ readyState: this.readyState, errorStatus: this.status })
				}
			}
		}

		xhttp.send(options.body)
	})
}

myFetch('https://jsonplaceholder.typicode.com/postsasdas', {
	method: 'POST',
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1,
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json))
