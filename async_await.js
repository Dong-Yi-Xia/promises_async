


function makeRequest(location){
    return new Promise((resolve, reject) => {
        if(location === "Google"){
            resolve("Google says hi")
        } else {
            reject("We can only talk to Google")
        }
    })
}


function processRequest(response){
    return new Promise((resolve, reject) => {
        //No matter what always log out the processing response
        console.log("Processing response")

        //This is always true returning Resolve
        resolve(`Extra Information + ${response} `)
    })
}


// makeRequest("Google")
// .then(resp => {
//     console.log(resp)
//     console.log("Response Received")
//     return processRequest(resp)
// }).then(processedResp => {
//     console.log(processedResp)
//    }).catch(err => {
//     console.log(err)
// })



// ## helper methods for callback
let googleResolve = (resp) => {
    console.log(resp)
    console.log("Response Received")
    return processRequest(resp)
}

let googleReject = (err) => {
    console.log(err)
}

let processResolve = (processedResp) => {
    console.log(processedResp)
}

// ## refactor using helper
// makeRequest("Google")
// .then(googleResolve)
// .then(processResolve)
// .catch(googleReject)




// ## async and await
// write all resolve/sucess inside the try {}
// catch(){} for the reject/failure  
// to use async_await it MUST BE wrapped in a function with the "async" KEYWORD
// use the "await" KEYWORD to request a response. Save it to a variable
// without the "await" you get back the promise object. Not the response. 

async function doWork(){
    try{
        const without =  makeRequest("Google")
        console.log(without)

        const resp = await makeRequest("Google")
        console.log(resp)
        console.log("Response Received")
        const processedResp = await processRequest(resp)
        console.log(processedResp)
    } catch (err) {
        console.log(err)
    }
}

doWork()