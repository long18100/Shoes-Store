
let userName = document.getElementById('user-login_input')
let password = document.getElementById('password-login_input')
let login = (data) =>{
    let currentUser = {}
    data.forEach(user => {
        if (user.username == userName && user.password == password) {
            currentUser = user
        }
    });
    return currentUser
}