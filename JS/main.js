// 1) Створити масив з 20 чисел та:

    let arrNum = [3, 999, 84, -1, 552, 86, 30, 0, -9, 101, 23, 47, 83, 38, 15, 106, 317, 18, 65, 9];

//     a) відсортувати його від меншого до більшого.

    // let arrNumSort = arrNum.sort((a, b) => a - b);
    // console.log(arrNumSort);

//     b) відсортувати його від більшого до меншого.

    // console.log(arrNum.sort((a, b) => b - a));

// c) Відфілтрувати числа які є кратними 3.

    // let arrNumFiltr = arrNum.filter(value => value % 3 === 0);
    // console.log(arrNumFiltr);

// d) Відфілтрувати числа які є більшими за 10.

    // let NumFiltr = arrNum.filter(value => value > 10);
    // console.log(NumFiltr);

// e) Проітерувати його forEach та вивести кожен елмент за допомогою document.write

   // arrNum.forEach(value => document.write(value));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

    // let numMultiplay = arrNum.map(value => value * 3);
    // console.log(numMultiplay);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)

    // let numReduce = arrNum.reduce((acc, currentValue) => acc + currentValue);
    // console.log(numReduce);

// 2) Створити масив з 20 стрічок та:

    let arrStr = ['ice', 'skate', 'jump', 'spin', 'twizzle', 'Apple', 'Makeup', 'Panama', 'Rozetka', 'bread', 'World', 'travel', 'competition', 'work', 'winner', 'actor', 'developer', 'scene', 'light', 'friend'];

//     a) Відсортувати його в алфавітному порядку

    // let arrStrSort = arrStr.sort((a, b) => {
    //     let strA = a.toUpperCase();
    //     let strB = b.toUpperCase();
    //     if (strA > strB) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // });
    // console.log(arrStrSort);

// b) Відсортувати в зворотньому порядку

    // let strSortRev = arrStr.sort((a, b) => {
    //     let strA = a.toUpperCase();
    //     let strB = b.toUpperCase();
    //     if (strA < strB) {
    //         return 1
    //     }
    //     return -1
    // });
    // console.log(strSortRev);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

    // let strFiltr = arrStr.filter(value => value.length > 4);
    // console.log(strFiltr);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

    // let strWithSay = arrStr.map(value => `Sam says ${value}`);
    // console.log(strWithSay);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

    // let ageSortUp = users.sort((a, b) => a.age - b.age);
    // console.log(ageSortUp);

    // let ageSortDown = users.sort((a, b) => b.age - a.age);
    // console.log(ageSortDown);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

    // let nameLengthUp = users.sort((a, b) => a.name.length - b.name.length);
    // console.log(nameLengthUp);
    //
    // let nameLengthDown = users.sort((a, b) => b.name.length - a.name.length);
    // console.log(nameLengthDown);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

    // let temp = JSON.parse(JSON.stringify(users));
    //
    // let userWithId = temp.map((value, index) =>{
    //     value.id = index+1;
    //     return value;
    // })
    // console.log(users);
    // console.log(userWithId);

// d) відсортувати його за індентифікатором
//     let userTemp = JSON.parse(JSON.stringify(userWithId))
//
//     let userSortId = userTemp.sort((a, b) => a.id - b.id);
//     console.log(userTemp);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

    // let userAddApartment = users.reduce((acc, value) => {
    //     if (value.isMarried === true) {
    //         value.apartment = true;
    //
    //         acc.push(value);
    //     }
    //     console.log(acc);
    //     return acc;
    // }, []);
    //

// ____________________________  РОБОТА В АУДИТОРІЇ _________________

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

    // let volumFiltr = cars.filter(value => value.volume > 3);
    // console.log(volumFiltr);

// - двигун = 2л

    // let volumeFiltr2 = cars.filter(value => value.volume === 2);
    // console.log(volumeFiltr2);

// - виробник мерс

    // let produceFiltr = cars.filter(value => value.producer === 'mercedes');
    // console.log(produceFiltr);

// - двигун більше 3х літрів + виробник мерседес

    // let volumeWithProduceFiltr = cars.filter(value => value.volume > 3 && value.producer === 'mercedes');
    // console.log(volumeWithProduceFiltr);

// - двигун більше 3х літрів + виробник субару

    // console.log(cars.filter(value => value.volume > 3 && value.producer === 'subaru'));

// - сили більше ніж 300

    // console.log(cars.filter(value => value.power > 300));

// - сили більше ніж 300 + виробник субару

    // console.log(cars.filter(value => value.power > 300 && value.producer === 'subaru'));

// - мотор серіі ej

    // console.log(cars.filter(value => value.engine.startsWith('ej')));

// - сили більше ніж 300 + виробник субару + мотор серіі ej

    // console.log(cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')));

// - двигун меньше 3х літрів + виробник мерседес

    // console.log(cars.filter(value => value.volume < 3 && value.producer === 'mercedes'));

// - двигун більше 2л + сили більше 250

    // console.log(cars.filter(value => value.volume > 2 && value.power > 250));

// - сили більше 250  + виробник бмв

    // console.log(cars.filter(value => value.power > 250 && value.producer === 'bmw'));

// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
//
// -- Відсортувати їх по ID

    let usersTemp = JSON.parse(JSON.stringify(usersWithAddress));

    // let usersSortId = usersTemp.sort((a, b) => a.id - b.id);
    // console.log(usersSortId);

// -- Відсортувати їх по ID в зворотньому порядку

    // let usersSortIdReverce = usersTemp.sort((a, b) => b.id - a.id);
    // console.log(usersSortIdReverce);

// -- Відсортувати по віку

    // let usersSortAge = usersTemp.sort((a, b) => a.age - b.age);
    // console.log(usersSortAge);

// -- Відсортувати по віку в зворотньому порядку

    // let usersSortAgeReverce = usersTemp.sort((a, b) => b.age - a.age);
    // console.log(usersSortAgeReverce);

// -- Відсорутвати по імені

    // let usersSortName = usersTemp.sort((a, b) => {
    //     if (a.name > b.name) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // });
    // console.log(usersSortName);

// -- Відсорутвати по назві вулиці

    // let usersSortStreet = usersTemp.sort((a, b) => {
    //     if (a.address.street > b.address.street) {
    //         return 1
    //     }
    //     return  -1
    // });
    //
    // console.log(usersSortStreet);

// -- Відсорутвати по номеру будинку

    // let usersSortNumber = usersTemp.sort((a, b) => a.address.number - b.address.number);
    // console.log(usersSortNumber);

// -- Залишити тільки тих, хто молодший ніж 30 (filter)

    // let usersFilterYoung = usersTemp.filter(value => value.age < 30);
    // console.log(usersFilterYoung);

// -- Залишити тільки одружених

    // console.log(usersTemp.filter(value => value.isMarried === true));

// -- Залишити тільки одружених, які молодні за 30

    // console.log(usersTemp.filter(value => value.isMarried === true && value.age < 30));

// -- Залишити лише тих, в кого парні номери будинків.

    // console.log(usersTemp.filter(value => value.address.number % 2 === 0));

// -- Порахувати загальний вік всіх людей. (reduce)

    // let usersAgeSum = usersTemp.reduce((acc, currentValue) => {
    //     return acc + currentValue.age;
    // }, 0);
    // console.log(usersAgeSum);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

    // let usersAddChild = usersTemp.reduce((acc, value) => {
    //     if (value.isMarried === true && value.age > 30) {
    //         value.child = true;
    //
    //         acc.push(value);
    //     }
    //     console.log(acc);
    //     return acc;
    // }, []);




