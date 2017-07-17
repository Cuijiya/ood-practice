/**
 * Created by cuijiya on 17-7-17.
 */
class Person{
    constructor(name, age,id){
        this.name=name
        this.age=age
        this.id=id
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
    constructor(name,age,id,klass){
        super(name,age,id)
        this.klass=klass
    }
    introduce(){
        var str=super.introduce()
        str+=' I am a Student. I am at Class '+ this.klass+'.'
        console.log(str)
    }

}