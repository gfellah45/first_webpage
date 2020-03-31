// java script task 2


// variabels
const items = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
    
]

// initiating function
intrestCalculator = (arr) => {
    const localArr = [...arr];
    localArr.forEach(ele => {
        const { principal, time} = ele;
        let answer = principal >= 2500 ? 'yes': 'no';

        switch(answer){
            case 'yes':
                time > 1 && time <= 3 ? ele.rate = 3 :
                time >= 3 ? ele.rate = 4 : ele.rate = 1;
                break;
            case 'no' || time <= 1:
                ele.rate = 2;
                break;
            default:
                return 'no match';

        }
    })

    const intrestData = localArr.map( each => {
        const {principal, rate, time} = each;
        each.intrest = (principal * rate * time) / 100; 
        return each;
    });
    
    console.log(intrestData)

    return intrestData;

}

// calling function
intrestCalculator(items);

































// task 1

// const name = "Jerry Aaron";

// const courses = ["node.js", "html, css, js", "design class"];


// details = () => {
//     console.log(name);
//     courses.forEach( course => {
//         console.log(`name: ${name} course: ${course}`)
//     });
    
// }
// for (let i = 0; i <= 200; i++){
//     if( i % 2 !== 0){
//         console.log(i)
//     }
// }

// console.log()