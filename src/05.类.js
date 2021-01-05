class Parent{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){//动态方法 实例化后可以使用
        console.log("sayHi");
    }
    static do(){//静态方法 只能由父类调用
        console.log("do");
    }
}