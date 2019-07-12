var url = 'https://exceed.superposition.pknn.dev/data/140';

var local_data = {
    data: {
        "content": ""
    }
};


function getReview() {
    var local_data = {
        data: {
            "content": $("#doctorReview").val()
        }
    };
    return local_data;
}

function mockLogin() {
    let user = prompt("user")
    let pwd = prompt("pwd")
    $("#changable").prepend("<label>Write your review (for doctor : <span style='color:green;'>READY</span>)</label>");
    $("#logged").remove()
    $("#doctorReview").removeAttr("disabled")
    $("#doctorSubmitButton").removeAttr("disabled")
    return user, pwd
}


function sendReview() {
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(getReview()),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            // console.log('Success:', JSON.stringify(response));
            $("#doctorReview").val('')
            alert("sent")
        })
        .catch(error => console.error('Error:', error));
}