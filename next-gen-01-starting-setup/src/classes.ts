abstract class Department {
    // id : number;
    // name : string;
      static fiscalYear = 2020;
      protected employees : string[] = [];
      
    constructor(protected readonly id : number, public name:string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this : Department) {
        console.log(`Department is : ${this.id} : ${this.name}`);
    }



     static createEmployee(name:string) {
      return {name : name}
    }
    
    addEmployee(employee :string){
        this.employees.push(employee);
    }
 
    printEmployeeInfo() {
     console.log(this.employees.length);
     console.log(this.employees);
    }

}



class ITDepartment extends Department {
    constructor(id : number ,public admins :string[]) {
    super(id,'shivasai');
    this.admins = admins;
    }
    describe(){
        console.log("this is an ITDepartment :" + this.id);
    }
}



const user = new ITDepartment(99,["Shivasai mechineni"]);
user.addEmployee('NANI');
user.addEmployee('Bhagat');



const shiva = Department.createEmployee('jersey');
console.log(shiva , Department.fiscalYear);

console.log(user);


class Accounts extends Department {
    private lastReport : string;
    
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No Report Found.');
    }

    set mostRecentReport(value : string) {
     if(value){
        throw new Error('Please pass in the Value.');
     } 
        this.addReports(value);
    }
    constructor(id : number, public reports : string[]){
        super(id,'shivasai mechineni');
        this.lastReport = reports[0];
    }

    addReports(text:string){
     this.reports.push(text);
     this.lastReport = text;
    }

    printReports() {
        console.log("the reports is:" + this.reports);
    }

    addEmployee(name : string) {
        if(name === 'shivasai'){
            return;
        } else {
            this.employees.push(name);
        }
    }
}

const accountUser = new Accounts(111, ['']);

console.log(accountUser);

accountUser.mostRecentReport = '';
accountUser.addReports("nnnnnnn");
accountUser.describe();
accountUser.addReports("nanananana");
accountUser.mostRecentReport;
accountUser.printReports();
accountUser.addEmployee('shivasai');
accountUser.addEmployee('shiva');
accountUser.addEmployee('BHAGHAT');
accountUser.addEmployee('NANNNNNN');





// const userCopy = {name : 'S', describe : user.describe};

// userCopy.describe();