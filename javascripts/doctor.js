var url = 'https://exceed.superposition.pknn.dev/data/140';

let ask = "how many times?"
var local_data = {
    data: {
        "content": ""
    }
};
var local_data = {
    data: {
        "content": ""
    }
};
let userpwd = {
    "user1": "pwd1",
    "mek": "stronk!"
}


function getReview() {
    var local_data = {
        data: {
            "content": $("#doctorReview").val()
        }
    };
    return local_data;
}

function getNumber() {
    var play_count = {
        data: {
            "max_count": prompt("how many times?")
        }
    };
    return play_count
}

function mockLogin() {
    let user = prompt("Enter your username:")
    let pwd = prompt("Enter your password:")
    if (userpwd[user] == pwd) {
        $("#changable").prepend("<label>Write your review (for doctor : <span style='color:green;'>READY</span>)</label>");
        $("#logged").remove();
        $("#doctorReview").removeAttr("disabled");
        $("#doctorSubmitButton").removeAttr("disabled");
        $("#navbarSupportedContent").append("<button class='btn btn-primary btn-sm my-2 my-sm-0 mx-2' onclick='sendPlayReq()'>Set game count</button>")
        $("#navbarSupportedContent").append(`<a>Hello, Doctor ${user}</a>`);
        $("#regBtn").remove();
        $("#logBtn").remove();
        $("")
    } else {
        alert("wrong username or password")
        fail;
    }

}


function sendReview() {
    fetch('https://exceed.superposition.pknn.dev/data/kenmuayRV', {
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

function sendPlayReq() {
    fetch('https://exceed.superposition.pknn.dev/data/kenmuayMC', {
            method: 'POST',
            body: JSON.stringify(getNumber()),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {console.log('Success:', JSON.stringify(response));})
        .catch(error => console.error('Error:', error));
}