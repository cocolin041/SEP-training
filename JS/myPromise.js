//Construct Promise
const fetch = require('node-fetch')

class MyPromise {
	constructor(exe) {
		exe(this.resolve, this.reject)
	}

	promiseState = 'pending'
	thenCallBackQueue = []
	catchCallBackQueue = []
	currentData
	currentError

	resolve = (data) => {
		if (this.promiseState === 'rejected') return
		setTimeout(() => {
			this.currentData = data

			while (this.thenCallBackQueue.length) {
				const cb = this.thenCallBackQueue.shift() //get the first element

				//if it return a Promise...
				if (this.currentData instanceof MyPromise) {
					//it resolve
					this.currentData.then((resData) => {
						this.currentData = cb(resData)
					})
					//it reject
					this.currentData.catch((error) => {
						this.currentError = error
					})
				} else {
					this.currentData = cb(this.currentData)
				}
			}
		}, 0)
		this.promiseState = 'fulfilled'
	}

	reject = (error) => {
		if (this.promiseState === 'fulfilled') return
		this.promiseState = 'rejected'
		setTimeout(() => {
			this.currentError = error
			if (this.catchCallBackQueue.length) {
				const cb = this.catchCallBackQueue.shift()
				cb(this.currentError)
			}
		}, 0)
	}

	then(thenCallbackFn) {
		this.thenCallBackQueue.push(thenCallbackFn)
		return this
	}

	catch(catchCallbackFn) {
		this.catchCallBackQueue.push(catchCallbackFn)
	}

	static all(arr) {
		let counter = 0
		const resolveData = []
		return new MyPromise((res, rej) => {
			arr.forEach((el, i) => {
				el.then((data) => {
					counter++
					resolveData[i] = data
					if (counter === arr.length) res(resolveData)
				})
			})
		})
	}
}

const p1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then((d) =>
	d.json()
)
const p2 = fetch('https://jsonplaceholder.typicode.com/todos/2').then((d) =>
	d.json()
)
const p3 = fetch('https://jsonplaceholder.typicode.com/todos/3').then((d) =>
	d.json()
)

MyPromise.all([p1, p2, p3]).then((v) => {
	console.log(v)
})
