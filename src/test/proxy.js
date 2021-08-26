

let person={
    name:'梁俊',
    age:15
}


let proxy1=new Proxy(person,get)

console(person.name)