//1. Создайте класс `Person`, который содержит поля `name`, `age`, `isStudent`.

// class Person {
//   name: string;
//   age: number;
//   isStudent: boolean;

//   constructor(name: string, age: number, isStudent: boolean) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//   }
// }

//2. Создайте три экземпляра класса Person.

/*
const den = new Person('Den', 31, true);
const elena = new Person('Elena', 26, false);
const ivan = new Person('Ivan', 41, true);
*/

//3. Создайте внутри класса метод, который будут выводить в консоль значения полей и с его помощью выведите в консоль значения созданных выше экземпляров класса.

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

abstract class Learner {
  constructor(
      name: string,
      ball: number,
    ) {}
  abstract getScholarship() : number;
}

class Student extends Learner {
    name: string;
    ball: number;
    constructor(
      name: string,
      ball: number,
  ) {
    super(name, ball);
    this.name = name;
    this.ball = ball;
  }
  getScholarship() {
    let sum = this.ball === 5 ? 200 : 150;
    return sum;
  };
}
const student = new Student('Den', 4.5);
console.log(student.getScholarship());

class Aspirant extends Learner {
    name: string;
    ball: number;
    work: boolean;
constructor(
      work: boolean,
      name: string,
      ball: number,
  ) {
    super(name, ball);
    this.name = name;
    this.ball = ball;
    this.work = work;
  }
  getScholarship() {
    let sum = this.ball === 5 ? 300 : 250;
    return sum;
  };
}
const aspirant = new Aspirant(true, 'Ben', 5);
console.log(aspirant.getScholarship());

//6. Создайте классы для описания интернет-магазина. У него должны быть несколько категорий товаров (с названием и ценой), покупатели (которые для покупки должны зарегистрироваться, соответственно у покупателя будет пароль, логин и история покупок), корзина. Также должны быть методы: добавить в корзину, купить, зарегистрироваться, войти в аккаунт.

// категорий товаров (с названием и ценой)

class Category {
  name: string;
  description: string;
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
const laptop = new Category("Ноутбуки", "каталог ноутбуков");
const smartphone = new Category("Смартфоны", "каталог смартфонов");
const tablet = new Category("Планшеты", "каталог планшетов");

class Product {
  brand: string;
  name: string;
  img: string;
  description: string;
  price: number;
  constructor(
    brand: string,
    name: string,
    img: string,
    description: string,
    price: number
  ) {
    this.brand = brand;
    this.name = name;
    this.img = img;
    this.description = description;
    this.price = price;
  }
  addToCart(): void {
    console.log(
      `позиция ${this.name} стоимостью ${this.price}руб. добавлена в корзину`
    );
  }
}

class Laptop extends Product {
  weight: string;
  constructor(
    brand: string,
    name: string,
    img: string,
    description: string,
    weight: string,
    price: number
  ) {
    super(brand, name, img, description, price);
    this.weight = weight;
  }
}

const asusX515 = new Laptop(
  "Asus",
  "Ноутбук Asus X515",
  "path",
  "подробное описание",
  "1.5 кг",
  60000
);
console.log(asusX515);
asusX515.addToCart();

class Smartphone extends Product {
  diagonal: string;
  constructor(
    brand: string,
    name: string,
    img: string,
    description: string,
    diagonal: string,
    price: number
  ) {
    super(brand, name, img, description, price);
    this.diagonal = diagonal;
  }
}

const samsungS22 = new Laptop(
  "Samsung",
  "Смартфон Samsung Galaxy S22",
  "path",
  "подробное описание",
  '3,5"',
  80000
);
samsungS22.addToCart();

// покупатели (пароль, логин, история, зарегистрироваться, войти в аккаунт)

class User {
  login: string;
  private password: string;
  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
  singIn(): void {
    console.log("Вы вошли");
  }
  singOut(): void {
    console.log("Вы вышли");
  }
}

class Buyer extends User {
  history: string;
  constructor(login: string, password: string, history: string) {
    super(login, password);
    this.history = history;
  }
  addFeedback() {
    console.log("ваш отзыв добавлен");
  }
}
const petr = new Buyer("Петр", "ed", "истроия заказов");
petr.addFeedback();

class Admin extends User {
  constructor(login: string, password: string) {
    super(login, password);
  }
  removeUser() : void {
    console.log("покупатель успешно удален");
  }
}

// корзина (добавить в корзину)

class Cart {
  name: string;
  img: string;
  price: number;
  total: number;
  constructor(
    name: string,
    img: string,
    price: number,
    total: number
  ) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.total = total;
  }
  
  addToCart() : void {
    console.log('позиция добавлена');
  }

  removeFromCart() : void {
    console.log('позиция удалена');
  }
}
