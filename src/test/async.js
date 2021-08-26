function demo () {
    new Promise(function (resolve, reject) {
           let num = Math.random()

           if (num > 0.5) {
               resolve(num) // 成功调用resolve方法
           } else {
               reject('失败了!') // 调用reject方法
           }
       })
       .then(res => console.log('成功!' + res))
       .catch(err => console.error(err) )
}
 
// 下面的代码等价于上面的代码       
async function asyncDemo() {
   try {
       let res = await new Promise(function (resolve, reject) {
       let num = Math.random()
       if (num > 0.5) {
               resolve(num) // 成功调用resolve方法
           } else {
               reject('失败了!') // 调用reject方法
           }
       })
       console.log(res, 'async')
      }
   catch (err) {
       console.log('Error:'+ err)
  }
}

asyncDemo()

function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();