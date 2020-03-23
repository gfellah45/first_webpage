const name = "Jerry Aaron";

const courses = ["node.js", "html, css, js", "design class"];


details = () => {
    console.log(name);
    courses.forEach( course => {
        console.log(`name: ${name} course: ${course}`)
    });
    
}
for (let i = 0; i <= 200; i++){
    if( i % 2 !== 0){
        console.log(i)
    }
}

console.log()