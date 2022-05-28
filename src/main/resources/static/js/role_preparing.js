function getUsersRoles(roles) {
    let rolesStr = ""
    for (let i in roles) {
        rolesStr += roles[i].roleName
        rolesStr += " "
    }
    return rolesStr
}

async function getRoles(disabled) {
    let roles = await fetch('http://localhost:8080/v1/roles');
    let rolesContent = await roles.json()
    let html = ``

    for (let key in rolesContent) {
        if (disabled === true) {
            html += `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" disabled="disabled" value=${rolesContent[key].id}>
                    <label>${rolesContent[key].roleName}</label>
                </div>
        `
        } else {
            html += `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" 
                    name=${rolesContent[key].roleName} 
                    value=${rolesContent[key].id}>
                    
                    <label>${rolesContent[key].roleName}</label>
                </div>
        `
        }
    }
    return html;
}
