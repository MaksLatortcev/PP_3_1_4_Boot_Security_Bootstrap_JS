async function getDeletetUserForm(key, usersContent) {

    return deleteUserForm = `
            <button type="button" class="btn btn-danger" data-id="delete-modal" data-bs-toggle="modal"
                    data-bs-target=${'#deleteModal' + usersContent[key].id}>
                Delete
            </button>
            
            <div class="modal fade"
                 id=${'deleteModal' + usersContent[key].id}
                 tabindex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
            
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel">Delete user</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Закрыть"></button>
                        </div>
            
                        <div class="modal-body">
            
                            <div class="border-0 mx-auto px-4 py-4 bg-white text-dark col-md-8">
                                <form class="text-center"
                                      method="GET"
                                      action=""
                                      id=${'deleteForm' + usersContent[key].id}>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="delId" class="center">ID</label></b>
                                            <div class="m-2">
                                                <input type="hidden" class="align-content-md-center form-control" name="id"
                                                       value=${usersContent[key].id}>
                                                <input type="number" class="align-content-md-center form-control" name="id"
                                                       disabled="disabled"
                                                       value=${usersContent[key].id}
                                                       id="delId">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="delFirstName" class="center">First name</label></b>
                                            <div class="m-2">
                                                <input type="text" class="align-content-md-center form-control" name="firstName"
                                                       disabled="disabled"
                                                       value=${usersContent[key].firstName}
                                                       id="delFirstName">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="delLastName" class="center">Last name</label></b>
                                            <div class="m-2">
                                                <input type="text" class="align-content-md-center form-control" name="lastName"
                                                       disabled="disabled"
                                                       value=${usersContent[key].lastName}
                                                       id="delLastName">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="delAge" class="center">Age</label></b>
                                            <div class="m-2">
                                                <input type="number" class="align-content-md-center form-control" name="age"
                                                       disabled="disabled"
                                                       value=${usersContent[key].age}
                                                       id="delAge">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="delEmail" class="center">Email</label></b>
                                            <div class="m-2">
                                                <input type="email" class="align-content-md-center form-control" name="email"
                                                       disabled="disabled"
                                                       value=${usersContent[key].email}
                                                       id="delEmail">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="d-grid">
                                            <b><label for="delPassword" class="center">Password</label></b>
                                            <div class="m-2">
                                                <input type="password" class="align-content-md-center form-control" name="password"
                                                       disabled="disabled" value=""
                                                       id="delPassword">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mx-3">
                                        <div class="center">
                                            <b><label class="mb-2">Role</label></b>
                                            <div align="left">
                                                 ${await getRoles(true)}
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
                            <button class="btn btn-danger"
                                    form=${'deleteForm' + usersContent[key].id}
                                    type="submit"
                                    data-id="delete-user"
                                    onclick=deleteUserClick(${usersContent[key].id})>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
`
}