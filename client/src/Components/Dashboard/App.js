import React,{ useState, useEffect } from "react";
import grapesjs from "grapesjs";

//import './styles/main.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
//Plugins
import gjsPresetWebpage from "grapesjs-preset-webpage";
import customplplugin from "grapesjs-custom-code";


function App() {

  const [ editor, setEditor ] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage,customplplugin],
      pluginsOpts: {
        gjsPresetWebpage: {},
        customplplugin: {},
      },
    });
    setEditor(editor);
  }, []);

  
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}




export default App;