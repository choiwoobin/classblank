import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import * as Action from 'store/modules/list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {List,Map,fromJS} from 'immutable';
import classNames from 'classnames/bind';
import styles from './Classroom.scss';
import Result from 'components/Result';
const cx = classNames.bind(styles);

class Classroom extends Component {
  state = {
    result: [],
    
  };



  onClickhandler = () =>{
    let classes = this.props.temp.toJS();
    classes= classes.daniel;
    console.log(classes);
    this.setState(()=>({result: classes}));
    console.log(this.state.result);
  };

  render(){
    // const List = this.state.result;
    // List.
    
    return(
      <div className = {cx('buttons')} >
      <Button.Group vertical className = {cx('button')} >
        <Button.Group >
        <Button onClick={this.onClickhandler} primary='blue'>국제교육관</Button>
        <Button primary='blue'>다니엘관</Button>
        <Button primary='blue'>디자인관</Button>
        </Button.Group>
        <Button.Group >
        <Button primary='blue'>바울관</Button>
        <Button primary='blue'>사무엘관</Button>
        <Button primary='blue'>신학관</Button>
        </Button.Group>
        <Button.Group >
        <Button primary>아트앤디자인</Button>
        <Button primary>에스라관</Button>
        <Button primary>요한관</Button>
        </Button.Group>
        <Button.Group >
        <Button primary>제1과학관</Button>
        <Button primary>제1실습관</Button>
        <Button primary>제2과학관</Button>
        </Button.Group>
        <Button.Group >
        <Button primary>제3과학관</Button>
        <Button primary>체육관</Button>
        <Button primary>온실</Button>
        </Button.Group>
      </Button.Group>
      <Result result ={this.state.result}/>
      </div>
      
    )
  }
}
export default connect(
  (state)=>({
    temp:state.list
  }),
  (dispatch)=>({
    Actions: bindActionCreators(Action,dispatch)
  })
)(Classroom)