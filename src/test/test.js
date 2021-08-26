/* let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);

let person = { name: 'zhangsan', age: 20 }; 
let { name, age } = person;
console.log(name); // 'zhangsan' 
console.log(age); // 20

let {name: myName, age: myAge} = person; // myName myAge 属于别名
console.log(myName); // 'zhangsan' 
console.log(myAge); // 20
 */


/* const sum=a=>{a*a}
console.log(sum(2))



const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(items);
 */

/* const greet = name => console.log(`Hello ${name}!`);
greet('liangun')
 */

/* function foo(something){
    console.log(this.a,something)
    return this.a+something
}
var obj={
    a:2
}
var bar=foo.bind(obj)
var b=bar(3)
console.log(b) */


function IceCream() {
    this.scoops = 0;
}

// 为 IceCream 添加 addScoop 方法
IceCream.prototype.addScoop = function() {

    setTimeout(()=> {
        this.scoops++;
        console.log('scoop added!');
        console.log(this.scoops); // undefined+1=NaN
        console.log(dessert.scoops); //0
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop();

