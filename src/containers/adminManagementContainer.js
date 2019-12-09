import { connect } from 'react-redux';
import AdminManagement from '../components/homepage/adminManagement/index';
import {
  addNewAdminRequest,
  getAdminsListRequest,
  removeAdminRequest,
} from '../actions/adminManagementAction';

const mapStateToProps = state => {
  return {
    adminRole: state.adminRole,
    adminsList: state.adminsList,
  };
};

const mapDispatchToProps = run => {
  const actions = {
    getAdminsList: token => run(getAdminsListRequest(token)),
    addNewAdmin: (token, email, password, name, cb) =>
      run(addNewAdminRequest(token, email, password, name, cb)),
    removeAdmin: (token, id) => run(removeAdminRequest(token, id)),
  };
  return actions;
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminManagement);
