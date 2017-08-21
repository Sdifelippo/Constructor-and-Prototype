let adrian = {
name: 'adrian',
focus: 'react',
dancer: true
}

adrian.sayHello = function () {
return "hi"
}
adrian.sayHello()  //hi

adrian.describeSelf = function () {
return `Hi, my name is ${adrian.name}', and I am studying ${adrian.focus}`
}
adrian.dscribeSelf()

adrian.genericDescribeSelf = function () {
return `Hi my name is ${this.name}, and I am studying ${this.focus}`
}
adrian.genericDecribeSelf()

let steven = {
  name: 'adrian',
  focus: 'react',
  dancer: false
}

function Person(name, focus, canDance) {
  this.name = name;
  this.focus  = focus;
  this.dancer = canDance;
  this.genericDecribeSelf = function(){
    return `Hi, I'm ${this.name} and I ${canDance ? 'can' : 'cannot'} dance`
  }
}
let adrianShortcut = new Person('adrian', 'react', 'true');
let stevenShortcut = new Person('steven', 'react', 'false');
