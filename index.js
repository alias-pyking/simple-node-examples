const rect = require('./rectangle');
const solveRectangle=(l,b)=>{
    console.log(`Solving for rectangle with l=${l} and b=${b}`);
    rect(l,b,(err, rectangle) =>{
        if(err){
            console.log(`Error : ${err.message}`);
        } else{
            console.log(`Area of rectangle of dims of l = ${l} and b = ${b} is : ${rect.area}`);
            console.log(`Perimeter of rectangle is : ${rect.perimeter}\n`);
        }
    });
    console.log("This statement is after the call to rect");
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(9,0);
solveRectangle(-3,4);