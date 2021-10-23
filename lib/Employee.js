 class Employee {
     constructor(name = '', id, email) {
         this.name = name;
         this.employeeId = id;
         this.email = email;
     }

     getName() {
         return this.name;
     };

     getId() {
         return this.employeeId;
     };

     getEmail() {
         return this.email;
     };

     getRole() {
         return 'Employee';
     };

     getLinkList() {
         return `<li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li>`;
     };

     getSVG() {
         return "https://www.svgrepo.com/show/71486/employee.svg";
     };
 }

 module.exports = Employee;