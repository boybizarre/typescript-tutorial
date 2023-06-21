"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
    describe() {
        console.log('This department ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(report) {
        if (!report) {
            throw new Error('Please provide a valid report!');
        }
        this.addReport(report);
    }
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(3, []);
        return this.instance;
    }
    describe() {
        console.log('This department ID: ' + this.id);
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Jude');
console.log(employee1);
const it = new ITDepartment(2, ['Max']);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
it.addEmployee('Max');
it.addEmployee('Daniel');
it.describe();
it.printEmployeeInformation();
accounting.addReport('This is the last report...');
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
console.log(accounting);
accounting.printReports();
//# sourceMappingURL=classes.js.map