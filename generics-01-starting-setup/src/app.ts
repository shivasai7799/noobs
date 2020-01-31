// Code goes here!

const names : Array<string> = [];


// const promise: Promise<string> = new Promise((resolve,reject) => {
//   setTimeout(() => {
//       resolve('shiva');
//   },2000);
// });

// promise.then(data => {
//     data.split('');
// })

function merge<C extends object,D extends object>(objA : C , objB: D) {
    return Object.assign(objA , objB);
}

// console.log(merge({name : 'Shivasai'},{age : 30}));

const shiva = merge({name : 'Shivasai', hobbies : ['shivasai']},{age : 30});

console.log(shiva.age);
console.log(shiva.hobbies);


//Generic constraint : it is basically provides a extension(with extends Keyword) of the type but the whole data type should be the same overall

interface Lengthy {
    length : number ;
}

function countAndDescribe<T extends string>(element:T){
    let description = "got no value.";
    if(element.length === 1){
        description = 'got 1 value';
    } else if (element.length > 1){
        description = 'got ' + element.length + ' elements';
    }
    return [element,description];
}

console.log(countAndDescribe('Hello there!'));


function contrastAndError<A extends object,B extends keyof A>(obj:A,key : B) {
  return 'value'  + obj[key];
}
contrastAndError({NAME: 'MECHINENI'}, 'NAME');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item : T) {
    this.data.push(item);
    }

    removeItem(item : T) {
      this.data.splice(this.data.indexOf(item) , 1);
    }

    getItems() {
     return [...this.data];
    }
}


const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('Shivasai');
textStorage.removeItem('max');
textStorage.getItems();
console.log(textStorage.getItems());