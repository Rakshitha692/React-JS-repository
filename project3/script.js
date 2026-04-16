function createCounter(){
    let count = 0;
    return function(){
        count++;
        document.getElementById("count").innerText=count;
    };
    }

    const counter = createCounter();
    document.getElementById("btn").addEventListener("click",counter);
    //define closure : A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope even after it has returned. In the above code, the inner function returned by createCounter() forms a closure that retains access to the count variable, allowing it to increment and display the count each time the button is clicked.