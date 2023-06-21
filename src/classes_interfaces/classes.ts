abstract class Department {
  static fiscalYear: number = 2023;
  // private name: string;
  protected employees: string[] = [];

  constructor(public name: string, protected readonly id: number) {
    // this.name = name;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // this.id = 3 // cannot change id property because it's a readonly property
  // console.log(`Department: ${this.id} ${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super('IT', id);
    this.admins = admins;
  }

  describe() {
    console.log('This department ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  private constructor(id: number, private reports: string[]) {
    super('Accounting', id);
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

  addEmployee(employee: string) {
    if (employee === 'Max') {
      return;
    }

    this.employees.push(employee);
  }

  addReport(text: string) {
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

// it.employees[2] = 'Anna';
it.describe();
it.printEmployeeInformation();

// accounting.addReport('Something went wrong...');
accounting.addReport('This is the last report...');
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);

console.log(accounting);
accounting.printReports();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe}

// accountingCopy.describe();


// private and public access modifiers
// shorthand initialization, readonly properties
// inheritance and overriding properties
// getters and setters, static methods and properties
// abstract classes, singletons and private constructors
// 