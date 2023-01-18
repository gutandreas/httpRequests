function enableBody(enable){
    if (enable){
        document.getElementById("requestbody").disabled = false
    }
    else {
        document.getElementById("requestbody").disabled = true
    }
}

function sendRequest(){

    if (document.getElementById("radioget").checked){
        sendGetRequest()
    }
    else {
        sendPostRequest()
    }



}

function sendGetRequest(){
    console.log(document.getElementById("requestbody").value)
    fetch("/get", {
        method: 'GET'
    })
        .then(res => res.text())
        .then(responseData => {
            console.log(responseData)
            document.getElementById("answer").value = responseData
        })
}

function sendPostRequest(){
    console.log(document.getElementById("requestbody").value)
    fetch("/post", {
        method: 'POST',
        body: document.getElementById("requestbody").value,
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.text())
        .then(responseData => {
            console.log(responseData)
            document.getElementById("answer").value = responseData
        })
}