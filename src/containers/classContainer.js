import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';

import * as listActions from '../store/modules/list';
import pageTemplate from 'components/common/pageTemplate';



class classContainer extends Component {
    render() {
        return (
         
               <pageTemplate/>                 
         
        );
    }
}



export default connect(
    (state) => ({
        class : state.class
    }),
    (dispatch)=>({
        ListActions : bindActionCreators(listActions,dispatch)
    })
)(classContainer)