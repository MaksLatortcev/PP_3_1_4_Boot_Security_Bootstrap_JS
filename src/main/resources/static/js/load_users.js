// Получиние списка юзеров и заполнние таблицы
async function getUsers() {
    let users = await fetch('http://localhost:8080/v1/users');
    let usersContent = await users.json()

    for (let key in usersContent) {
        let listUsers = document.querySelector('#id')
        listUsers.innerHTML += `
        <tr>
            <td class="align-top">${usersContent[key].id}</td>
            <td class="align-top">${usersContent[key].firstName}</td>
            <td class="align-top">${usersContent[key].lastName}</td>
            <td class="align-top">${usersContent[key].age}</td>
            <td class="align-top">${usersContent[key].email}</td>  
            <td class="align-top">${getUsersRoles(usersContent[key].roles)}</td>  
            <td class="align-top">${await getEditUserForm(key, usersContent)}</td>
            <td class="align-top">${await getDeletetUserForm(key, usersContent)}</td>
        </tr>
   `
    }
}

function claenUsersTable() {
    let listUsers = document.querySelector('#id')
    listUsers.innerHTML = `<tr></tr>`
}

getUsers()

// Обновление таблицы юзеров по клику на кнопку
function getUsersClick() {
    claenUsersTable()
    getUsers()
}

// Удаление юзера по клику на кнопку
async function deleteUserClick(id) {
    console.log(id)
    await fetch(`http://localhost:8080/v1/admin/delete?id=${id}`);
}

// Изменение юзера по клику на кнопку
async function editUserClick(id) {

    const form = document.getElementById('editForm' + id)

    const firstName = form.querySelector('[name="firstName"]')
    const lastName = form.querySelector('[name="lastName"]')
    const age = form.querySelector('[name="age"]')
    const email = form.querySelector('[name="email"]')
    const password = form.querySelector('[name="password"]')
    const admin = form.querySelector('[name="ADMIN"]')
    const user = form.querySelector('[name="USER"]')

    let roles = [];

    if (admin.checked) {
        roles.push({
            id: +admin.value,
            roleName: 'ADMIN'
        })
    }

    if (user.checked) {
        roles.push({
            id: +user.value,
            roleName: 'USER'
        })
    }

    const userData = {
        id: id,
        firstName: `${firstName.value}`,
        lastName: `${lastName.value}`,
        age: +age.value,
        email: `${email.value}`,
        password: `${password.value}`,
        roles: roles
    }

    await fetch('http://localhost:8080/v1/admin/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    });
}

// Сохранение юзера по событию
const form = document.getElementById("new_user")

async function retrieveFormValue(ev) {
    ev.preventDefault();

    const firstName = form.querySelector('[name="firstName"]')
    const lastName = form.querySelector('[name="lastName"]')
    const age = form.querySelector('[name="age"]')
    const email = form.querySelector('[name="email"]')
    const password = form.querySelector('[name="password"]')
    const admin = form.querySelector('[name="ADMIN"]')
    const user = form.querySelector('[name="USER"]')

    let roles = [];

    if (admin.checked) {
        roles.push({
            id: +admin.value,
            roleName: 'ADMIN'
        })
    }

    if (user.checked) {
        roles.push({
            id: +user.value,
            roleName: 'USER'
        })
    }

    const userData = {
        id: 0,
        firstName: `${firstName.value}`,
        lastName: `${lastName.value}`,
        age: +age.value,
        email: `${email.value}`,
        password: `${password.value}`,
        roles: roles
    }

    await fetch('http://localhost:8080/v1/admin/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    });

    alert("Новый пользователь успешно добавлен")
}

form.addEventListener('submit', retrieveFormValue)
