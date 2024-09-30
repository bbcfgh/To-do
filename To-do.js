// let input = document.querySelector(".form .input")
// let add = document.querySelector(".form .add")
// let tasks = document.querySelector(".tasks")

// window.onload = function(){
//     let results = JSON.parse(localStorage.getItem("results")) || []
//     if(results !== null && results.length > 0) {
//         input.value = ""
//         El()
//     }

// }

// add.onclick = function(){
//     if(input.value !== ""){
//         let results = JSON.parse(localStorage.getItem("results")) || []
//         results.push({"value": input.value})
//         localStorage.setItem("results" , JSON.stringify(results))
//         input.value = ""
//         El()
//     }
// }

// function El(){
//     tasks.innerHTML = ""
//     results.forEach((arr , index) => {
//         tasks.innerHTML += `
//         <div class="task">
//             <p>${arr.value}</p>
//             <button class="but" data-index="${index}">delete</button>
//         </div>
//         `
//     });

//     document.querySelectorAll(".but").forEach((button) => {
//         button.onclick = function(){
//             let index = button.getAttribute("data-index")
//             deleteTask(index)
//         }
//     })
// }

// function deleteTask(index){
//     let results = JSON.parse(localStorage.getItem("results")) || []
//     results.splice(index , 1)
//     localStorage.setItem("results" , JSON.stringify(results))
//     El()
// }


let input = document.querySelector(".input")
let add = document.querySelector(".add")
let tasks = document.querySelector(".tasks")

window.onload = function(){
    let results = JSON.parse(localStorage.getItem("results")) || []
    if(results !== null && results.length > 0){
        input.value = ""
        El()
    }
}

add.onclick = function(){
    if(input.value !== ""){
        let results = JSON.parse(localStorage.getItem("results")) || []
        results.push({"value": input.value})
        localStorage.setItem("results" , JSON.stringify(results))
        input.value = ""
        El()
    }
}

function El(){
    tasks.innerHTML = ""
    let results = JSON.parse(localStorage.getItem("results")) || []
    results.forEach((result , index) => {
        tasks.innerHTML += `
        <div class="task">
            <p>${result.value}</p>
            <button class="but" data-index="${index}">delete</button>
        </div>
        `
    });

    document.querySelectorAll(".but").forEach((button) => {
        button.onclick = function(){
            let index = button.getAttribute("data-index")
            deletetask(index)
        }
    })

}
function deletetask(index){
    let results = JSON.parse(localStorage.getItem("results")) || []
    results.splice(index , 1)
    localStorage.setItem("results" , JSON.stringify(results))
    El()
}
























