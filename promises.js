

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if(a === 2){
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })


// p.then((message) => {
//     console.log("This is in the THEN --->" + message)
// }).catch((message) => {
//     console.log("This is in the CATCH --->" + message)
// })



// ########################################
//Using CallBack

// let userLeft = true
// let userWatchingCatMeme = false

//  // Each callback has one parameter that is an object {} 

// function watchingTutorialCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'user left',
//             message: 'sad'
//         })
//     } else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'watching cat meme',
//             message: "cat are the best"
//         })
//     } else {
//         callback("thumbs up")
//     }
// }

// let success = (message) => {
//     console.log("success " + message)
// }

// let failure = (errorMessage) => {
//     console.log(JSON.stringify(errorMessage))
//     console.log(errorMessage.name + " " + errorMessage.message)
// }


// watchingTutorialCallback(success, failure)




// ########################################
//Using Promise

let userLeft = false
let userWatchingCatMeme = false

function watchingTutorialPromise(){
    return new Promise((resolve,reject) => {
        if(userLeft){
            reject({
                name: 'user left',
                message: 'sad'
            })
        } else if(userWatchingCatMeme){
            reject({
                name: 'watching cat meme',
                message: "cat are the best"
            })
        } else {
            resolve("thumbs up")
        }
    })
}

let success = (message) => {
    console.log("success " + message)
}

let failure = (errorMessage) => {
    console.log(JSON.stringify(errorMessage))
    console.log(errorMessage.name + " " + errorMessage.message)
}


watchingTutorialPromise()
.then(success)
.catch(failure)



// ########################################
//Using Promise all and race

const newVideo1 = new Promise((resolve,reject) => {
    resolve("video 1")
})

const newVideo2 = new Promise((resolve,reject) => {
    resolve("video 2")
})

const newVideo3 = new Promise((resolve,reject) => {
    resolve("video 3")
})

//return all when they finished
Promise.all([
    newVideo1,
    newVideo2,
    newVideo3
]).then((messages) =>{
    console.log(messages)
})


//return the first one that is finish
Promise.race([
    newVideo1,
    newVideo2,
    newVideo3
]).then((message) =>{
    console.log(message)
})