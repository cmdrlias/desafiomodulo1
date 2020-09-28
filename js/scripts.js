const url_api = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
var users = [];


function loadUsers() {
    fetch(url_api, {
        method: 'get',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(async (api_response) => {
        var response = await api_response.json();
        users = response.results.map(({ gender, name, picture, dob }) =>
            ({ "gender": gender, "name": name.first + " " + name.last, "picture": picture.medium, "age": dob.age }));
    }).catch(function (err) {
        console.error(err);
    });
}

function showUsers(users){

}

function searchUsers(event) {

}