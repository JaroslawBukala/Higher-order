const array = ['Better', 'Beyond', 'Bishop', 'Border', 'abandon', 'ability','absence', 'academy', 'account', 'accused'];


//higher order function myFilterFunction() takes and array arr and a hypopthecitcal function fn
let myFilterFunction = arr => fn => {

    const arrayAfterFiltering = []


    for (let i = 0; i < arr.length; i++) {
        //we apply the callback function fn to each element and the fn function returns bool based on whether the word is 6 letters long
        if(fn(arr[i].length == 6)) {
            arrayAfterFiltering.push(arr[i])
        }
      }

  return arrayAfterFiltering //returning new array

}
//we now use the HOF with an anonymous function as one of the arguments
const outputArray = myFilterFunction(array)(item => item)

//we now output the array to the console
console.log(outputArray); 