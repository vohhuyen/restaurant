import Layout from '@/components/layout'
import React from 'react'

const news = () => {
  return (
    <Layout>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="x_panel">
              <div className="x_title d-flex justify-content-between">
                <div>
                  <h2><small>User Manager</small></h2>
                <button type="button" data-toggle="modal" data-target=".btn-create-user" className="btn btn-info mx-2">Create <i className="fa fa-plus"></i></button>

                <div className="modal fade btn-create-user" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Create user</h4>
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form id="demo-form" data-parsley-validate>
                          <div className="form-group">
                            <label htmlFor="fullname">Full Name * :</label>
                            <input type="text" id="fullname" className="form-control" name="fullname" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email * :</label>
                            <input type="email" id="email" className="form-control" name="email" data-parsley-trigger="change" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="heard">Phone :</label>
                            <input type="number" id="phone" className="form-control" name="phone" required />
                          </div>
                          <div className="form-group">
                            <label>Gender :</label>
                            <p>
                              M:
                              <input type="radio" className="flat" name="gender" id="genderM" value="M"/>
                              F:
                              <input type="radio" className="flat" name="gender" id="genderF" value="F" />
                            </p>
                          </div>

                          <div className="form-group">
                            <label htmlFor="message">Day of birth :</label>
                            <input className="date-picker form-control" type="date" required />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav navbar-right panel_toolbox">
                <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Settings 1</a>
                    <a className="dropdown-item" href="#">Settings 2</a>
                  </div>
                </li>
                <li><a className="close-link"><i className="fa fa-close"></i></a>
                </li>
              </ul>
            </div>
            <div className="x_content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box table-responsive">
                    <div className="row d-flex justify-content-between mx-2">
                      <div className="d-flex">
                        <div className="dataTables_length" id="datatable-checkbox_length">
                          <label className="d-flex align-items-center">
                            Show
                            <select name="datatable-checkbox_length" aria-controls="datatable-checkbox" className="form-control input-sm mx-2">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div id="datatable-checkbox_filter" className="dataTables_filter">
                          <label className="d-flex align-items-center">
                            Search:
                            <input type="search" className="form-control input-sm mx-3" placeholder="" aria-controls="datatable-checkbox" />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <table id="datatable-checkbox" className="table table-striped table-bordered bulk_action w-100">
                        <thead>
                          <tr>
                            <th>
                              <th><input type="checkbox" id="check-all" /></th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Day of birth</th>
                            <th>Action</th>
                          </tr>
                        </thead>


                        <tbody>
                          <tr>
                            <td>
                              <th><input type="checkbox" id="check-all" /></th>
                            </td>
                            <td>Tiger Nixon</td>
                            <td>SystemArchitect@gmail.com</td>
                            <td>0123456789</td>
                            <td>female</td>
                            <td>2011/04/25</td>
                            <td>
                              <button data-toggle="modal" data-target=".btn-update-user" type="button" className="btn btn-info btn-sm text-[13px]"><i className="fa fa-edit"></i></button>
                              <button type="button" className="btn btn-danger btn-sm text-[13px]"><i className="fa fa-trash"></i></button>

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
                                            <input type="radio" className="flat" name="gender" id="genderF" value="F"/>
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
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <th><input type="checkbox" id="check-all" /></th>
                            </td>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>
                              <button type="button" className="btn btn-info btn-sm text-[13px]"><i className="fa fa-edit"></i></button>
                              <button type="button" className="btn btn-danger btn-sm text-[13px]"><i className="fa fa-trash"></i></button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="row d-flex">
                      <div className="col-sm-5 d-flex">
                        <div className="dataTables_info" id="datatable-checkbox_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                      </div>
                      <div className="col-sm-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="datatable-checkbox_paginate">
                          <ul className="pagination">
                            <li className="paginate_button previous disabled" id="datatable-checkbox_previous">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="0" tabIndex={0}>Previous</a>
                            </li>
                            <li className="paginate_button active">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="1" tabIndex={0}>1</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="2" tabIndex={0}>2</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="3" tabIndex={0}>3</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="4" tabIndex={0}>4</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="5" tabIndex={0}>5</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="6" tabIndex={0}>6</a>
                            </li>
                            <li className="paginate_button next" id="datatable-checkbox_next">
                              <a href="#" aria-controls="datatable-checkbox" data-dt-idx="7" tabIndex={0}>Next</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default news
