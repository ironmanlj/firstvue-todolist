/* 
let isremmember=false
let getmoney=new Promise((resolve,reject)=>{
    if(isremmember){
        let lv={
            color:'red',
            price:'9999'
        }
        //得到相关信息
        resolve(lv)
    }else{
        let err=new Error('我就是不想买')
        reject(err)
    }
})

let testfn=function(){
    getmoney.then((fulfilled1)=>{
        console.log(fulfilled1)
    }).catch((rejected2)=>{
        console.log(rejected2.message)
    })
}

testfn() */


function promiseClick(){
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*20); //生成1-10的随机数
            console.log('随机数生成的值：',num)
            if(num<=10){
                resolve(num);
            }
            else{
                reject('数字太于10了即将执行失败回调');
            }
        }, 2000);
       })
       return p
   }

promiseClick().then(
    function(data){
        console.log('resolved成功回调');
        console.log('成功回调接受的值：',data);
		console.log(noData);
    }
).catch((reason,data)=>{
        console.log(data);
        console.log(reason)
})

