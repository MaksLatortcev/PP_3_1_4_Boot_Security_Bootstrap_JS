async function getEditUserForm(key, usersContent) {

    return editUserForm = `
            <button type="button" class="btn btn-info" data-id="edit-modal" data-bs-toggle="modal"
                    data-bs-target=${'#editModal' + usersContent[key].id}>
                Edit
            </button>
        
            <div class="modal fade"
                 id=${'editModal' + usersContent[key].id}
                 tabindex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
        
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Edit user</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Закрыть"></button>
                        </div>
        
                        <div class="modal-body">
      
                            <div class="border-0 mx-auto px-4 py-4 bg-white text-dark col-md-8" id="editUserForm">
                                <form class="text-center"
                                      method="PUT"
                                      action=""
                                      id=${'editForm' + usersContent[key].id}>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="editId" class="center">ID</label></b>
                                            <div class="m-2">
                                            <input type="hidden" class="align-content-md-center form-control" name="id"
                                                   value=${usersContent[key].id}>
                                                <input type="number" class="align-content-md-center form-control" name="id"
                                                       disabled="disabled"
                                                       value=${usersContent[key].id}
                                                       id="editId">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="editFirstName" class="center">First name</label></b>
                                            <div class="m-2">
                                                <input type="text" class="align-content-md-center form-control" name="firstName"
                                                       value=${usersContent[key].firstName}
                                                       id="editFirstName">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="editLastName" class="center">Last name</label></b>
                                            <div class="m-2">
                                                <input type="text" class="align-content-md-center form-control" name="lastName"
                                                       value=${usersContent[key].lastName}
                                                       id="editLastName">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b> <label for="editAge" class="center">Age</label></b>
                                            <div class="m-2">
                                                <input type="number" class="align-content-md-center form-control" name="age"
                                                       value=${usersContent[key].age} id="editAge">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b> <label for="editEmail" class="center">Email</label></b>
                                            <div class="m-2">
                                                <input type="email" class="align-content-md-center form-control" name="email"
                                                       value=${usersContent[key].email} id="editEmail">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b> <label for="editPassword" class="center">Password</label></b>
                                            <div class="m-2">
                                                <input type="password" class="align-content-md-center form-control"
                                                       name="password"
                                                       value="*****" id="editPassword">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mx-3">
                                        <div class="center">
                                            <b><label class="mb-2">Role</label></b>
                                            <div align="left">
                                                ${await getRoles(false)}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
        
                        </div>
        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button class="btn btn-primary"
                                    form=${'editForm' + usersContent[key].id}
                                    type="submit"
                                    data-id="edit-user"
                                    onclick=editUserClick(${usersContent[key].id})>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
`
}