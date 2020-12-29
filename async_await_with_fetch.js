
// function loadUsers(){
//     fetch("http://localhost:3000/users")
//     .then(resp => resp.json())
//     .then(user => {
//         console.log(user)
//     })
//     .catch(err => {
//         console.error("ERROR " + err )
//     })
// }

// document.addEventListener("DOMContentLoaded", ()=>{
//     user = loadUsers() 
// })



async function loadUsers() {
    const resp = await fetch("http://localhost:3000/users")
    const users = await resp.json()
    return users
}



document.addEventListener("DOMContentLoaded", async () => {
    let users = []

    try{
        users = await loadUsers()
    } catch (err){
        console.log("errrrrror")
        console.log(err)
    }

    console.log(users)
})