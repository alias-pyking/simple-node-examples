module.exports  = (x,y, callback)=> {
    if(x <= 0 || y <= 0) {
        setTimeout(()=>
            callback(new Error("Rectangle dim should be greater than 0\n"),
            null),
            2000);
    } else {
        setTimeout(()=>
            callback(null,{
                perimeter :(x, y)=>(2*(x+ y)),
                area :(x,y)=>(x*y)
            }),
            2000);
    }
    console.log("This statement is after the call to rect");
}


// perimeter = (x, y)=>(2*(x+ y));
// area =(x,y)=>(x*y);
