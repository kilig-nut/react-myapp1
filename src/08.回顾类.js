class parent{
    constructor(name,age,hobby){//构造器
        this.name = name;
        this.age = age;
        this.hobby = hobby
    }
    static setTick(){//静态方法 和类一起被创建 实例化之后会被标记为“封闭”
        console.log("滴答滴答");//获取不到this 因为被创建时还没有实例化
    }
    sayHi(){//动态方法 实例化之后才能调用 否则报错
        console.log("sayHi");//实例化之后this才会正确指向当前实例
    }
}

//实例化
// let p1 = new parent("宋亚轩",17,"唱歌")
// console.log(p1);
// p1.sayHi()

// class child extends parent{}
// let c1 = new child()
// console.log(c1);//child { name: undefined, age: undefined, hobby: undefined }

// class child extends parent{
//     constructor(){//当使用了extends关键字并且子类用了自己的构造器
//         //就必须调用super()
//         super()
//         this.salary="14k"
//     }
// }
// let c1 = new child()
// console.log(c1);
// 输出：child {
//     name: undefined,
//     age: undefined,
//     hobby: undefined,
//     salary: '14k'
//   }

class child extends parent{
    constructor(){
        super("宋亚轩",17,"唱歌")//调用super()就相当于调用了父类的构造函数
        //super的作用：让子类获取正确的this指向，不允许在使用super之前调用this
        // console.log(super.age);//undefined
        super.sayHi()//sayHi super可以调用父类的动态方法
        this.sayHi()//sayHi this指向子实例
        //this的特点：谁调用就指向谁
        this.salary="14k"
    }
}
let c1 = new child()
console.log(c1);//child { name: '宋亚轩', age: 17, hobby: '唱歌', salary: '14k' }