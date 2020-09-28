const url_api = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
var users = [];

<<<<<<< HEAD

function loadUsers() {
=======
async function getUsersFromApi() {
>>>>>>> d865082b1602f639c3d734d20367318460328ee2
    fetch(url_api, {
        method: 'get',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
<<<<<<< HEAD
        })
    }).then(async (api_response) => {
        var response = await api_response.json();
        users = response.results.map(({ gender, name, picture, dob }) =>
            ({ "gender": gender, "name": name.first + " " + name.last, "picture": picture.medium, "age": dob.age }));
=======
          })
    }).then(response => {
        response.text();
>>>>>>> d865082b1602f639c3d734d20367318460328ee2
    }).catch(function (err) {
        console.error(err);
    });
}

function showUsers(users){

}

function searchUsers(event) {

}