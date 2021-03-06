/**
 * Created by cuijiya on 17-7-17.
 */
class Person {
    constructor(name, age, id) {
        this.name = name
        this.age = age
        this.id = id
    }

    introduce() {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
    }
}

var Tom = new Person('Tom', 10, 201701).introduce()
console.log(Tom)//测试

class klass {
    constructor(number) {
        this.number = number
    }

    assignLeader(studentName) {
        this.leader = studentName
    }
}

class Student extends Person {
    constructor(name, age, id, klass) {
        super(name, age, id)
        this.klass = klass
    }

    introduce() {
        var str = super.introduce() + 'I am a Student. '
        if (this.klass.leader === this.name) {
            str += 'I am Leader of Class ' + this.klass.number + '.'
        }
        else {
            str += 'I am at Class ' + this.klass.number + '.'
        }
        console.log(str)
    }
}

var Class = new klass(2)
Class.assignLeader('Tom')
var studentA = new Student('Tom', 10, 201701, Class)
studentA.introduce()
var studentB = new Student('Mary', 11, 201702, Class)
studentB.introduce()

class Teacher
    extends Person {
    constructor(name, age, klass) {
        super(name, age)
        this.klass = klass
    }

    introduce() {
        var str = super.introduce()
        if (this.klass !== null) {
            str += 'I am a Teacher. I teach Class ' + this.klass + '.'
        } else {
            str += 'I am a Teacher. I teach No Class.'
        }
        console.log(str)
    }

    introduceWith(student) {
        var str = super.introduce()
        if (this.klass === student.klass.number) {
            str += 'I teach ' + student.name + '.'
        } else {
            str += 'I do not teach' + student.name + '.'
        }
        console.log(str)
    }
}

new Teacher('Ma', 20, 2).introduceWith(studentA)
new Teacher('Ma', 20, 1).introduceWith(studentA)