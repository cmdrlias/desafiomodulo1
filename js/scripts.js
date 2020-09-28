const url_api = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
const users = [];


function getUsersFromApi() {
    fetch(url_api, {
        method: 'get',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    }).then(async (api_response) => {
        debugger;
        var response = await api_response.json();
        
        return response;
    }).catch(function (err) {
        console.error(err);
    });

    //let usersFat = JSON.parse(await response.text()).results;*/
    //users = usersFat.map(({ gender, name.first + name.last, picture, dob.age }) => ({ gender, name, picture, age }))
}

function loadUsers(event) {

}
