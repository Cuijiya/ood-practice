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

class klass{
    constructor(number){
        this.number=number
    }
}
var klassA= new klass(2)

class Student extends Person {
    constructor(name,age,klass){
        super(name,age)
        this.klass=klass
    }
    introduce(){
        var str=super.introduce()
        str+=' I am a Student. I am at Class '+ this.klass+'.'
        console.log(str)
    }

}

var studentA=new Student('Tom',10,klassA)

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
    introduceWith(studentA){
        var str=super.introduce()
        if (this.klass===studentA.klass.number){
            str+='I teach '+studentA.name+'.'
        }else{
            str+='I do not teach'+studentA.name+'.'
        }
        console.log(str)
    }
}


new Teacher('Mary',20,2).introduceWith(studentA)
new Teacher('Mary',20,1).introduceWith(studentA)