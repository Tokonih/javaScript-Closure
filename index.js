function points(){
    let points = 0;
    let counter = document.getElementById("counter")
    counter.innerHTML = points;

 

    const increasePoint = () => {
        points++;
        counter.innerHTML = points
    }

    const decrease = () => {
        if ( points > 0){
             points--;
             counter.innerHTML= points
        }

    }

    const reset = () =>{
        points = 0
        counter.innerHTML = points
    }

   

   

    return {increasePoint, decrease,reset };

}
let {increasePoint, decrease, reset} = points();

document.getElementById("increaseBtn").onclick = function() {
    increasePoint()
}

document.getElementById("decrease").onclick = function() {
    decrease()
}

document.getElementById("reset").onclick = function() {
    reset()
}