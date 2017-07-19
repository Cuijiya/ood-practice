/**
 * Created by cuijiya on 17-7-18.
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

class klass {
    constructor(number) {
        this.number = number
    }

    appendMember(student) {
        if (this.appdendMemberArr === undefined) {
            this.appendMemberArr = [student.id]
        } else {
            this.appendMemberArr.push(student.id)
        }
    }

    assignLeader(student) {
        if (this.appendMemberArr !== undefined) {
            for (var i of this.appendMemberArr) {
                if (student.id === i) {
                    this.leader = student.id
                } else {
                    console.log('It is not one of us.')
                }
            }
        } else {
            console.log('It is not one of us.')
        }
    }

    isIn(student) {
        if (this.appdendMemberArr !== undefined) {
            for (var i of this.appendMemberArr) {
                if (i === student.id) {
                    console.log('true')
                    return true
                    break
                }
            }
            console.log('false')
            return false
        }
        console.log('false')
        return false
    }
}

class Student extends Person {
    constructor(name, age, id, klass) {
        super(name, age, id)
        this.klass = klass
    }

    introduce() {
        var str = super.introduce() + 'I am a Student. '
        if (this.klass!==undefined) {
            if (this.klass.leader === this.id) {
            str += 'I am Leader of Class ' + this.klass.number + '.'
        }
        else {
            str += 'I am at Class ' + this.klass.number + '.'
        }}
        console.log(str)
    }
}

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age)
        this.klass = klass
    }

    introduce() {
        var str = super.introduce()
        if (this.klass.length !== 0 && this.klass !== undefined) {
            str += 'I am a Teacher. I teach Class ' + this.klass + '.'
        } else {
            str += 'I am a Teacher. I teach No Class.'
        }
        console.log(str)
    }

    isTeaching(student) {
        for (var i of this.klass) {
            if (student.klass.number === i) {
                return true
            }
        }
        return false
    }
}

var Class=new klass(2)
studentA=new Student('Tom',11,201701,Class)
studentB=new Student('Mary',12,201702)
Class.appendMember(studentA)
Class.assignLeader(studentA)
studentA.introduce()
studentB.introduce()
Class.isIn(studentA)
Class.isIn(studentB)