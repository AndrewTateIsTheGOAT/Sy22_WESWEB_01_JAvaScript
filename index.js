import 'dotenv/config';

let thisIsMyVariable = "shvcdsavjcg";

thisIsMyVariable = 4;

console.log('Hello world!');

let numArray = [1, 2, 3, 4, 5];

// for(let i = 0; i < myArray.length;i++){
//     console.log(myArray[i]);
// }

// numArray.push(6); //lägger till elementet 6 sist
// console.log(numArray);
// let removedFromEnd = numArray.pop(); //tar bort sista elementet
// console.log(numArray);
// console.log(removedFromEnd);

// = sätter ett värde
// == kollar ett värde(!=)
// === kollar ett värde OCH datatypen(!==)


// numArray.unshift(0); //lägger till elementet 0 först
// console.log(numArray);
// let removedFromStart = numArray.shift(); //tar bort första elementet
// console.log(numArray);
// console.log(removedFromStart);

// let variable1 = true;
// let variable2 = false;

// let falsy1 = false;
// let falsy2 = 0;
// let falsy3 = "";
// let falsy4 = null;
// let falsy5 = undefined;
// let falsy6 = NaN; // not a number

// let truthy1 = true;
// let truthy2 = 1;
// let truthy3 = -1;
// let truthy4 = "hej";

// if(variable1){
//     console.log("variable1");
// }
// if(variable2){
//     console.log("varable2");
// }

// if(!falsy2){
//     console.log(!!falsy2);
// }

function print(message){
    console.log(message);
}

print("skibidi toilet");


console.log(process.env.DATABASE_PASSWORD);