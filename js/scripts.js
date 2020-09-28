const url_api = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
const users = [];

function getUsersFromApi() {
    fetch(url_api, {
        method: 'get',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    }).then(response => {
        debugger;
        response.text();
    }).catch(function (err) {
        console.error(err);
    });

    /*let response = await fetch(url_api, {
        method: 'get',
        mode: 'cors'
    });
    let usersFat = JSON.parse(await response.text()).results;*/
    //users = usersFat.map(({ gender, name, picture, dob }) => ({ gender, name, picture, dob }))
}

function loadUsers(event) {

}
