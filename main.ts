export {}
let message = 'welcome back'
console.log(message);

let x = 10;
const y =20;

let sum;
const title = 'title';
 
let isBeginner: boolean = true;
let total:number = 0;
let name:string = 'kunal';

let sentence:string = `my name is ${name}
i am a beginner in type script`

console.log(sentence);

let n:null = null;
let u:undefined = undefined;

let isNew:boolean = null;
let myName:string = undefined;

let list1 :number[] = [1,2,3];
let list2:Array<number> =[1,2,3]

let person1:[string,number]=['kunal',23];

enum color {red=5,green,blue};
let c:color = color.blue
console.log(c);

let randomvalue :any = 10;
randomvalue = true;
randomvalue= 'kunal'

let myVariable:unknown = 10;
function hasName(obj:any): obj is{name:string}{
    return !!obj &&
    typeof obj === "object" &&
    'name' in obj
}
if (hasName(myVariable)){
console.log(myVariable.name);

}

let a;
a=10;
a=true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType:any;
anyType = 20;
anyType = true;

function add(num1:number,num2:number =10):number {
    if(num2){
        return num1+num2;
    }
    else{
        return num1;
    }
}

let A=add(2)
console.log(A); // answer 12

interface Person {
    firstName : string;
    lastName : string;
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);   
}
let i = {
    firstName :'kunal',
    lastName :'verma'
}
fullName(i);

class Employee {
    employeeName : string;
    constructor(name: string){
        this.employeeName = name;
    }

 greet(){
     console.log(`good morning ${this.employeeName}`);
     
 }
}
let emp1 = new Employee('kunal')
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName :string){
        super(managerName);
    }
    delegateWork(){
        console.log('manager delegating tasks');
        
    }
}
let m1 = new Manager('bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);


