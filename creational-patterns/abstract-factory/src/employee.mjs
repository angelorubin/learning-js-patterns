export class Employee {
	constructor(name) {
		this.name = name;
	}
}

export class EmployeeFactory {
	create(name) {
		return new Employee(name);
	}
}
