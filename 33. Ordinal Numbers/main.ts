// • Store the numbers 1 through 9 in a array.
let numbers:number[] = [1,2,3,4,5,6,7,8,9];

// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
numbers.forEach((_val) => {
    if(_val === 1){
        console.log(_val+"st");
    }else if(_val === 2){
        console.log(_val+"nd");
    }else if(_val === 3){
        console.log(_val+"rd");
    }else{
        console.log(_val+"th")
    }
})
