// const test = {
//     prop: 42,
//     func: function () {
//       return this.prop;
//     },
//   };

//   console.log(test.func());




// const shorthandProperty = "shorthandValue";
// const expression = "dynamicProperty";
// const prototype = {};
// const spreadProperty = { spreadProp: "spreadValue" };

// const o = {
//     a: "foo",
//     b: 42,
//     c: {},
//     1: "number literal property",
//     "foo:bar": "string literal property",
//     shorthandProperty,
//     method(parameters) {
//     },
//     get property() {
//     },
//     set property(value) {

//     },
//     [expression]: "computed property",
//     __proto__: prototype,
//     ...spreadProperty,
// };

// console.log(o);




// const obj = {
//     log: ['a', 'b', 'c'],
//     get latest() {
//       return this.log[this.log.length - 1];

//     },
//   };

//   console.log(obj.latest);


// const obj={
//     list:[1,2,3,4,5,6,7],
//     get nagendra(){
//         console.log(this.list[this.list.length-2])
//     }
// }

// obj.nagendra


// class ClassWithGetSet {
//     #msg = "hello world";
//     get msg() {
//       return this.#msg;
//     }
//     set msg(x) {
//       this.#msg = `hello ${x}`;
//     }
//   }

//   const instance = new ClassWithGetSet();

//   console.log(instance.msg); // "hello world"

//   instance.msg = "cake";
//   console.log(instance.msg); // "hello cake"


// class nagendra{
//     name="Nagendra Yadav";
//     get msg(){
//         return this.name;

//     }
//     set msg(x){
//         this.name=`nilesh ${x}`
//     }
// }

// const obj=new nagendra()
// obj.msg="Khune";
// console.log(obj.msg)



// class ClassWithStaticMethod {
//     static staticProperty = 'someValue';
//     static staticMethod() {
//       return 'static method has been called.';
//     }
//     static {
//       console.log('Class static initialization block called');
//     }
//   }

//   console.log(ClassWithStaticMethod.staticProperty);
//   console.log(ClassWithStaticMethod.staticMethod());


// const a=new Date().toLocaleTimeString()
// console.log(a)

// "use strict"





// function nagendra(a,b=10=>() {
//     console.log(a)
//     console.log(b)
// }

// let a=10
// let b=15
// nagendra(a,b)




// const arr=[1,2,3,4,5,6,7]
// const p=arr.map(function(value,index,arr){
//     return value>4
// })
// console.log(p)


// const p=arr.forEach(function(value,index,arr){
//     return value
// })
// console.log(p)





async function fetchWeather(place) {
    const apiKey = 'be3d779f80a64c14b63122016242804'; 
    const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${place}&contentType=json&unitGroup=metric&shortColumnNames=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        console.log(response)
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // const data = await response.json();
        // const thisData = Object.values(data.locations)[0];
        // const weather = thisData.values[0];
        // return { weather, data };
    } catch (error) {
        // console.error('Error fetching weather:', error);
        // return null;
    }
}


const place = 'delhi';
fetchWeather(place)
    // .then(result => {
    //     console.log(result)
    //     // if (result) {
    //     //     console.log('Weather:', result.weather);
    //     //     console.log('All Data:', result.data);
    //     // } else {
    //     //     console.log('Weather data not available.');
    //     // }
    // })
    // .catch(error => console.error('Error fetching weather:', error));










