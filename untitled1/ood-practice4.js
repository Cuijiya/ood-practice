/**
 * Created by cuijiya on 17-7-17.
 */
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log('My name is '+ this.name+'. I am ' + this.age+ ' years old.')
    }

}

class Student extends Person {
    constructor(name, age,klass){
        super(name, age)
        this.klass=klass
    }

    introduce(){
        console.log('My name is '+ this.name+'. I am ' + this.age+ ' years old. I am a student. I am at class '+this.klass
            +'.')
    }
}

class Worker extends Person{
    constructor(name,age){
        super(name,age)
    }
    introduce() {
        console.log('My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Worker. I have a job')
    }
}

new Person('Tom',10).introduce()
new Student('Tom',10,2).introduce()
new Worker('Tom',10).introduce()