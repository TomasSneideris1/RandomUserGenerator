var url = 'https://randomuser.me/api/'
fetchInformation(url);
function fetchInformation(url) {
    fetch(url)
        .then((response) => (response.json()))
        .then(function (data) {

            data.results.forEach(person => {
                user_photo = `<div class="well1">
                <img src="${person.picture.medium}" class="img-circle"/>
                </div>
                `;
                user_fullname = `<div class="well2">
                <span>${person.name.first}</span>
                <span>${person.name.last}</span>
                </div>
                `;
                user_email = `<div class="well3">
                <span>${person.email}</span>
                </div>
                `;
                user_age = `<div class="well4">
                <span>${person.dob.age}</span>
                </div>
                `;
                user_password = `<div class="well5">
                <span>${person.login.password}</span>
                </div>
                `;
                $("#user_photo").append(user_photo);
                document.getElementById('user_title').innerHTML = 'Hi, my name is';
                $("#user_value").append(user_fullname);
            })
        })
};

function onButtonClick() {
    document.getElementById('user_value').innerHTML = ' ';
    document.getElementById('user_title').innerHTML = ' ';
    $("#user_photo").empty();
    $("#user_fullname").empty();
    $("#user_email").empty();
    $("#user_age").empty();
    $("#user_password").empty();
    hideButton();
    fetchInformation(url);
}

function myEnterFunction() {
    document.getElementById('newUserButton').style.display = 'block';
}
function hideButton() {
    document.getElementById('newUserButton').style.display = 'none';
}
function myLeaveFunction() {
    setTimeout(hideButton, 500);
}

function showEmail() {
    document.getElementById('user_value').innerHTML = ' ';
    document.getElementById('user_title').innerHTML = 'My email address is';
    $("#user_fullname").empty();
    $("#user_age").empty();
    $("#user_password").empty();
    $("#user_value").append(user_email);
}

function showAge() {
    document.getElementById('user_value').innerHTML = ' ';
    document.getElementById('user_title').innerHTML = 'My age is';
    $("#user_fullname").empty();
    $("#user_password").empty();
    $("#user_email").empty();
    $("#user_value").append(user_age);
}

function showFullname() {
    document.getElementById('user_value').innerHTML = ' ';
    document.getElementById('user_title').innerHTML = 'Hi, my name is';
    $("#user_password").empty();
    $("#user_email").empty();
    $("#user_age").empty();
    $("#user_value").append(user_fullname);
}

function showPassword() {
    document.getElementById('user_value').innerHTML = ' ';
    document.getElementById('user_title').innerHTML = 'My password is';
    $("#user_fullname").empty();
    $("#user_email").empty();
    $("#user_age").empty();
    $("#user_value").append(user_password);
}