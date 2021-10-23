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
 }

 module.exports = Employee;