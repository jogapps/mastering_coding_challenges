let counter = 0;

const recursiveFunction = () => {
    if(counter > 10) {
        console.log("Done");
        return;
    }
    console.log("Hello");
    counter++;
    recursiveFunction();
}

recursiveFunction();