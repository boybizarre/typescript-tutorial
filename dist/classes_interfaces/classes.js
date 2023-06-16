'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Department = (function () {
  function Department(name, id) {
    this.name = name;
    this.id = id;
    this.employees = [];
  }
  Department.createEmployee = function (name) {
    return { name: name };
  };
  Department.prototype.addEmployee = function (employee) {
    this.employees.push(employee);
  };
  Department.prototype.printEmployeeInformation = function () {
    console.log(this.employees.length);
    console.log(this.employees);
  };
  Department.fiscalYear = 2023;
  return Department;
})();
var ITDepartment = (function (_super) {
  __extends(ITDepartment, _super);
  function ITDepartment(id, admins) {
    var _this = _super.call(this, 'IT', id) || this;
    _this.admins = admins;
    return _this;
  }
  ITDepartment.prototype.describe = function () {
    console.log('This department ID: ' + this.id);
  };
  return ITDepartment;
})(Department);
var AccountingDepartment = (function (_super) {
  __extends(AccountingDepartment, _super);
  function AccountingDepartment(id, reports) {
    var _this = _super.call(this, 'Accounting', id) || this;
    _this.reports = reports;
    _this.lastReport = reports[0];
    return _this;
  }
  Object.defineProperty(AccountingDepartment.prototype, 'mostRecentReport', {
    get: function () {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found!');
    },
    set: function (report) {
      if (!report) {
        throw new Error('Please provide a valid report!');
      }
      this.addReport(report);
    },
    enumerable: false,
    configurable: true,
  });
  AccountingDepartment.getInstance = function () {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(3, []);
    return this.instance;
  };
  AccountingDepartment.prototype.describe = function () {
    console.log('This department ID: ' + this.id);
  };
  AccountingDepartment.prototype.addEmployee = function (employee) {
    if (employee === 'Max') {
      return;
    }
    this.employees.push(employee);
  };
  AccountingDepartment.prototype.addReport = function (text) {
    this.reports.push(text);
    this.lastReport = text;
  };
  AccountingDepartment.prototype.printReports = function () {
    console.log(this.reports);
  };
  return AccountingDepartment;
})(Department);
var employee1 = Department.createEmployee('Jude');
console.log(employee1);
var it = new ITDepartment(2, ['Max']);
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
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
