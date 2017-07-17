/**
 * Created by cuijiya on 17-7-17.
 */
class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    introduce(){
        return 'My name is '+ this.name+'. I am ' + this.age+ ' years old.'
    }

}

class Student extends Person{
    constructor(name, age, klass){
        super(name, age)
        this.klass=klass
    }
    introduce(){
        var str=super.introduce()
        str+=' I am a Student. I am at Class '+ this.klass+'.'
        console.log(str)
    }
}

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age)
        this.klass=klass
    }
    introduce(){
        var str=super.introduce()
        if (this.klass!==null) {
            str += 'I am a Teacher. I teach Class ' + this.klass + '.'
        }else{
            str+='I am a Teacher. I teach No Class.'
        }
        console.log(str)
    }
}


new Student('Tom',10,2).introduce()
new Teacher('Tom',10,null).introduce()
new Teacher('Mary',10,1).introduce()