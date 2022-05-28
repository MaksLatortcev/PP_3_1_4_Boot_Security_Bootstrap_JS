async function getUserInfo() {
    let user = await fetch('http://localhost:8080/v1/user');
    let userContent = await user.json()

    let listUsers = document.querySelector('#userInfo')
    listUsers.innerHTML = `
        <tr class="table-secondary">
            <td>${userContent.id}</td>
            <td>${userContent.firstName}</td>
            <td>${userContent.lastName}</td>
            <td>${userContent.age}</td>
            <td>${userContent.email}</td>  
            <td>${getUsersRoles(userContent.roles)}</td>  
        </tr>
        `
}

getUserInfo()
