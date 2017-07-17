/**
 * Created by cuijiya on 17-7-17.
 */
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log('My name is ' + this.name + '. I am ' + this.age + ' years old.')
    }

}


class Student {
    constructor(name, age, klass) {
        this.name = name
        this.age = age
        this.klass = klass
    }

    introduce() {
        console.log('My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Student. I am at Class ' + this.klass + '.')
    }

}

new Person('Tom',10).introduce()
new Student('Tom',10,2).introduce()
