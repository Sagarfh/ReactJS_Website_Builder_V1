import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import * as FaIcons from "react-icons/fa";

import { grapesjs } from 'grapesjs';



function Dashboard () {
  const [ editor, setEditor ] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });
    setEditor(editor);
  }, []);

  return (
    <div className="Dashboard">
      <div id="editor"></div>
    </div>

  );
    
}





Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
