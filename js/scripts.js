const url_api = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
var usersFull = [];
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
        createUserList(response.results);
    }).catch(function (err) {
        console.error(err);
    });
}

function createUserList(results) {
    usersFull = results.map(({ gender, name, picture, dob }) =>
        ({ "gender": gender, "name": name.first + " " + name.last, "picture": picture.medium, "age": dob.age }));
}

function showUsers(users) {
    var divFirst = document.createElement("div");
    divFirst.classList = "row left-align";
    divFirst.id = "divFirst";

    users.forEach(user => {
        var div = document.createElement("div");
        div.classList = "col s12 l8";
        var div2 = document.createElement("div");
        div2.classList = "card-panel grey darken-1 z-depth-1";
        var div3 = document.createElement("div");
        div3.classList = "row valign-wrapper";

        var divImgUser = document.createElement("div");
        divImgUser.classList = "col s2";
        divImgUser.id = "imageUser";

        var divInfoUser = document.createElement("div");
        divInfoUser.classList = "col s10 white-text";
        divInfoUser.id = "infoUser";

        div.appendChild(div2);
        div2.appendChild(div3);
        div3.appendChild(divImgUser);
        div3.appendChild(divInfoUser);

        var imgTag = document.createElement("img");
        imgTag.src = user.picture;
        imgTag.classList = "circle responsive-img";
        divImgUser.appendChild(imgTag);

        var spanTag = document.createElement("span");
        spanTag.innerText = user.name + ", " + user.age + " anos";
        spanTag.classList = "col s10 white-text";
        divInfoUser.appendChild(spanTag);

        divFirst.appendChild(div);
        var divMain = document.getElementById("idMain");
        divMain.appendChild(divFirst);
    });
}

function cleanUsers() {
    user = [];
    var div1 = document.getElementById("divFirst");
    var div2 = document.getElementById("userCount");
    if (div1 != null) div1.remove();
    if (div2 != null) div2.remove();
}

function searchUsers() {
    cleanUsers();
    var search = document.getElementById("inpSearch").value;
    if (search != "") {
        users = usersFull.filter(u => u.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
        showUsers(users);

        var userCount;
        if (document.getElementById("userCount") == null) {
            userCount = document.getElementById("userCountWrap");
            var span = document.createElement("span");
            span.id = "userCount";
            userCount.appendChild(span);
        }

        if (users.length == 1) userCount.innerText = users.length + " usuario encontrado";
        else userCount.innerText = users.length + " usuarios encontrados";
    } else {
        var spanCount = document.getElementById("userCountWrap");
        spanCount.innerText = "";
    }
}

