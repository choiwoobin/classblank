import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import {  Divider } from 'semantic-ui-react'
import styles from './Result.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Result extends Component{
  
  render(){
    let result = this.props.result;
    console.log(result);
    let List = result.map(
      (name,index)=>(<Label key={index}>{name.ho}</Label>)
    )  
    return(
          <div className = {cx('rocation')}>
            <Divider style={{ margin: '0.3rem', marginBottom: '2rem', marginRight: '1rem' }} /> 
            {List}
            
          </div>
    )
  }
}

export default Result;