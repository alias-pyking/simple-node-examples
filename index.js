const rect = require('./rectangle');
const solveRectangle=(l,b)=>{
    console.log(`Solving for rectangle with l=${l} and b=${b}`);
    if(l <= 0 || b <= 0) {
        console.error("Rectangle dim should be greater than 0\n");
    } else{
        console.log(`Area of the rectangle is ${rect.area(l,b)}`);
        console.log(`Perimeter of the rectangle is ${rect.perimeter(l,b)}\n`);
    }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(9,0);
solveRectangle(-3,4);