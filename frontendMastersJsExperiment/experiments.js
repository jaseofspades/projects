// class Bear {
//     constructor(name, favoriteChips) {
//         this.name = "Bear";
//         this.favoriteChips = "Funyuns";
//     }
// }


// class Car {
//     make = 'Toyota';
//     model = "Prius";
//     drive() {
//         console.log("vroom vroom!");
//     }
// }

// const x = {
//     isCool: true,
//     name: "Bob",
// };

// let myCar = new Car();

// myCar.drive();

// let myBear = new Bear();

// console.log(myBear.favoriteChips);

// const me = {
//     getAddress() {
//         return "123 fake st";
//     }
// }

// console.log(me.getAddress());

// const lol = me.getAddress;
// console.log(lol());

const arr = [1,2,3,4,5];

arr.forEach(function (number) {
    console.log(number);
});

const arr2 = {
    first: {
        name: 'bub',
        email: 'bub@bubby,com',
    },

    second: {
        name: 'abb',
        email: 'abbabb@booby.com',
    }
};

for (const key in arr2) {
    console.log('key: ' + key);
    console.log('values: ' + arr2[key].name + ' ' + arr2[key].email);
}