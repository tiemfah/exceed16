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
    let isBoss = confirm("Are you doctor?");
    if (isBoss) {
        return local_data;
    } else {
        fail;
    }
    
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