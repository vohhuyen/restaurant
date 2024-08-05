import React from 'react'

const FormUpdate = () => {
    return (
        <div>
            <button data-toggle="modal" data-target=".btn-update-user" type="button" className="btn btn-info btn-sm text-[13px]"><i className="fa fa-edit"></i></button>
            

            <div className="modal fade btn-update-user" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Update user</h4>
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4><b>User: Tiger Nixon</b></h4>
                            {/* <!-- start form for validation --> */}
                            <form id="demo-form" data-parsley-validate>
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name * :</label>
                                    <input type="text" id="fullname" className="form-control" name="fullname" value="Tiger Nixon" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email * :</label>
                                    <input type="email" id="email" className="form-control" name="email" value="SystemArchitect@gmail.com" data-parsley-trigger="change" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="heard">Phone :</label>
                                    <input type="number" id="phone" className="form-control" name="phone" value="0123456789" required />
                                </div>
                                <div className="form-group">
                                    <label>Gender :</label>
                                    <p>
                                        M:
                                        <input type="radio" className="flat" name="gender" id="genderM" value="M" />
                                        F:
                                        <input type="radio" className="flat" name="gender" id="genderF" value="F" />
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Day of birth :</label>
                                    <input className="date-picker form-control" type="date" value="2011-04-25" required />
                                </div>
                            </form>
                            {/* <!-- end form for validations --> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUpdate
