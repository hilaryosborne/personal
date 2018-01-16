import React from 'react';
import ReactDOM from 'react-dom';

import { RouterComponent } from "../containers/router";

$(document).ready(()=>{
    ReactDOM.render(<RouterComponent />, document.getElementById('root'));
});