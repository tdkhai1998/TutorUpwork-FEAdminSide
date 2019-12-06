import { connect } from 'react-redux';
import app from '../App';

const mapStateToProps = state => {
  return {
    adminInfo: state.adminInfo,
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(app);
