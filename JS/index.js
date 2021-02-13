// /** topic: class */

// /** Declare object in class way */
class Person {
	constructor(name, age) {
		this._name = name
		this._age = age
	}
	get name() {
		return this._name
	}
	set name(newName) {
		this._name = newName
	}
	walk() {
		console.log(`${this._name} is walking.`)
	}
}
const david = new Person('David', 12)

//inheritance
class Employee extends Person {
	constructor(name, age, company) {
		//use super to access parent variables
		super(name, age)
		this.company = company
	}
	walk() {
		console.log(`${this._name} is walking.`)
	}
	walk(num) {
		console.log(`${this.name} walk for ${num} times`)
	}
}

const david = new Employee('David', 12, 'Antra')
console.log(david)
david.walk()
david.walk(3)

/** Declare object in functional way */
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.walk = function () {
	console.log(`${this.name} is walking.`)
}

function Employee(name, age, company) {
	Person.call(this, name, age)
	this.company = company
}
Employee.prototype = Object.create(Person.prototype)

/** ES2019 Private data with # */
class Person {
	#name
	#age
	constructor(name, age) {
		this.#name = name
		this.#age = age
	}
	get name() {
		return this.#name
	}
	set name(newName) {
		this.#name = newName
	}
	get age() {
		return this.#age
	}
	set age(newAge) {
		this.#age = newAge
	}
	walk() {
		console.log(`${this.#name} is walking.`)
	}
}

const p = new Person('Coco', 22)
console.log(p)

p.age = 18
p.name = 'david'

console.log(p)
console.log(p.age)
