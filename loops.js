const practiceLoop = (n) => {
    // 1st expression executes one-time before execution of code block
    // 2nd expression defines the condition for executing the code block
    // 3rd expression is executed every time after code block execution
    for ( let i = 0 ; i < n ; i += 2 ) {
    console.log(i);
    }
    }
    // practiceLoop(4);
    // count from 1 to n
    const countFrom1ToN = (n) => {
    // for (let i=1; i <= n; i++) {
    // console.log(i);
    // }

    // let i = 1;
    // while (i <= n)  {
    //     console.log(i);
    //     i++;
    // }  

    let i = 1; 
    do {
        console.log(i);
        i++;
    } while (i <= n);

    }
    countFrom1ToN(5);
    // count from n to 1
    const countFromNto1 = (n) => {
    for(let i=n; i >= 1; i--) {
    console.log(i);
    }
    }
    // countFromNto1(20);
    // count from x to y
    // given that x < y
    const countFromXtoY = (x, y) => {
    for (let i=x; i <= y; i++) {
    console.log(i);
    }
    }
    // countFromXtoY(5, 8);
    // output even numbers from 1 to n
    const printEvenNumbersFrom1ToN = (n) => {
    for (let i=1; i <= n; i++) {
    // check if even number
    if (i%2 === 0) {
    console.log(i);
    }
    }
    }
    // even numbers are numbers divisible by 2
    // printEvenNumbersFrom1ToN(10);
    // const arr = [5, 3, 0, 1];
    // console.log(arr.length);
    // output all elements in an array

    
    const printArrayElements = (arr) => {
        for (let i=0; i < arr.length; i++) {
        console.log(arr[i]);
        }
        }
        // printArrayElements(['apple', 'banana', 'mango']);
        // apple arr[0]
        // banana arr[1]
        // mango arr[2]
        // greet all names in an array
        const greetNames = (names) => {
        // for (let i=0; i < names.length; i++) {
        // console.log(`Hello ${names[i]}`);
        // }

        const personObj = {
            firstName: 'Maricar',
            lastName: 'Rubio',
            gender: 'f',
        }

        // for (key in personObj) {
        //     console.log(key);
        //     console.log(personObj[key]);
        // }

        for (value of names) {
            console.log(`Hello ${value}`);
        }

        }
        // greetNames(['Wanda', 'Klane', 'Dave', 'Dom', 'Ernelle']);
        // Hello Wanda Hello names[0]
        // Hello Klane Hello names[1]
        // Hello Dave Hello names[2]
        // Hello Dom Hello names[3]
        // Hello Ernelle Hello names[4]
        