//1. Создайте класс `Person`, который содержит поля `name`, `age`, `isStudent`.
var Person = /** @class */ (function () {
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    return Person;
}());
//2. Создайте три экземпляра класса Person.
/*
const den = new Person('Den', 31, true);
const elena = new Person('Elena', 26, false);
const ivan = new Person('Ivan', 41, true);
*/
//3. Создайте внутри класса метод, который будут выводить в консоль значения полей и с его помощью выведите в консоль значения созданных выше экземпляров класса.
/*
class Person {
  name: string;
  age: number;
  isStudent: boolean;

  constructor(name: string,
  age: number,
  isStudent: boolean) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
  }
  console() {
      let message = this.isStudent
        ? `Меня зовут: ${this.name}, мне ${this.age}. Я студент`
        : `Меня зовут: ${this.name}, мне ${this.age}. Я не студент`
      console.log(message);
    }
}

const den = new Person('Den', 31, false);
const elena = new Person('Elena', 26, false);
const ivan = new Person('Ivan', 22, true);

den.console();
elena.console();
ivan.console();
*/
//4. Создайте пример наследования через абстрактный класс и через интерфейс, реализуйте класс `Student` и класс `Aspirant`, аспирант отличается от студента наличием некой научной работы.
// abstract class Learner {
//   constructor(
//       name: string,
//       age: number,
//       scholarship: number
//   ) {}
// }
// class Student extends Learner {
//     name: string;
//     age: number;
//     scholarship: number;
//     constructor(
//       name: string,
//       age: number,
//       scholarship: number
//   ) {
//     super(name, age, scholarship);
//     this.name = name;
//     this.age = age;
//     this.scholarship = scholarship;
//   }
// }
// const student = new Student('Den', 20, 3500);
// console.log(student);
// class Aspirant extends Learner {
//     name: string;
//     age: number;
//     scholarship: number
//     work: boolean;
// constructor(
//       work: boolean,
//       name: string,
//       age: number,
//       scholarship: number
//   ) {
//     super(name, age, scholarship);
//     this.name = name;
//     this.age = age;
//     this.scholarship = scholarship;
//     this.work = work;
//   }
// }
// const aspirant = new Aspirant(true, 'Ben', 24, 15000);
// console.log(aspirant);
//5. Создайте метод `getScholarship()` для класса `Student`, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 200, иначе 150. Переопределить этот метод в классе `Aspirant`. Если средняя оценка аспиранта равна 5, то сумма 300, иначе 250.
// abstract class Learner {
//   constructor(
//       name: string,
//       ball: number,
//     ) {}
//   abstract getScholarship() : number;
// }
// class Student extends Learner {
//     name: string;
//     ball: number;
//     constructor(
//       name: string,
//       ball: number,
//   ) {
//     super(name, ball);
//     this.name = name;
//     this.ball = ball;
//   }
//   getScholarship() {
//     let sum = this.ball === 5 ? 200 : 150;
//     return sum;
//   };
// }
// const student = new Student('Den', 4.5);
// console.log(student.getScholarship());
// class Aspirant extends Learner {
//     name: string;
//     ball: number;
//     work: boolean;
// constructor(
//       work: boolean,
//       name: string,
//       ball: number,
//   ) {
//     super(name, ball);
//     this.name = name;
//     this.ball = ball;
//     this.work = work;
//   }
//   getScholarship() {
//     let sum = this.ball === 5 ? 300 : 250;
//     return sum;
//   };
// }
// const aspirant = new Aspirant(true, 'Ben', 5);
// console.log(aspirant.getScholarship());
//6. Создайте классы для описания интернет-магазина. У него должны быть несколько категорий товаров (с названием и ценой), покупатели (которые для покупки должны зарегистрироваться, соответственно у покупателя будет пароль, логин и история покупок), корзина. Также должны быть методы: добавить в корзину, купить, зарегистрироваться, войти в аккаунт.
var Product = /** @class */ (function () {
    function Product(brand, name, img, price) {
        this.brand = brand;
        this.name = name;
        this.img = img;
        this.price = price;
    }
    Product.prototype.render = function () {
        var cardTitle = document.querySelector('.card-title');
        cardTitle.innerHTML = this.brand;
    };
    Product.prototype.addToCart = function () {
        console.log("\u043F\u043E\u0437\u0438\u0446\u0438\u044F ".concat(this.name, " \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C\u044E ").concat(this.price, " \u0440\u0443\u0431. \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"));
    };
    return Product;
}());
var laptop = new Product('Asus', 'Ноутбук Asus X515', 'path', 60000);
var laptop1 = new Product('frfr', 'Нfrefr15', 'path', 60000);
laptop.addToCart();
laptop.render();
laptop1.render();
// class Product {
//   constructor( brand: string, name: string, price: number ) {
//     this.brand = brand;
//     this.name = name;
//     this.price = price;
//   }
//   //addToCart() : void {};
// }
// class Laptop extends Product {
//   art: string;
//   name: string;
//   price: number;
//   constructor(art: string,
//     name: string,
//     price: number) {
//       super(art, name, price);
//       this.name = name;
//     this.art = art;
//     this.price = price;
//     }
//     addToCart() {
//       alert(`${this.name} добавлен в корзину`);
//     }
// }
// class Phone extends Product {
//   art: string;
//   name: string;
//   price: number;
//   constructor(art: string,
//     name: string,
//     price: number) {
//       super(art, name, price);
//       this.name = name;
//     this.art = art;
//     this.price = price;
//     }
//     addToCart() {
//       alert(`${this.name} добавлен в корзину`);
//     }
// }
// покупатели (пароль, логин, история, зарегистрироваться, войти в аккаунт)
// корзина (добавить в корзину)
