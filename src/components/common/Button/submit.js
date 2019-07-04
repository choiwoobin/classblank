import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import styles from './submit.scss'
import classNames from 'classnames/bind'
import * as Action from 'store/modules/list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Classroom from 'components/Classroom';
const cx = classNames.bind(styles);

class Submit extends Component{

  
    onClickHandler= async(e)=>{
        e.preventDefault();
        let {day,number} = this.props;
        const {Actions} = this.props;
        const date = {yoil:day,time:number}
        console.log(date);
        if(date.yoil==="now"){
            let timestamp = new Date().getHours();
            let week =['sun','mon','tue','wed','thu','fri','sat']
            let timestamp2 = week[new Date().getDay()];
            
            timestamp = timestamp-8;
            let now={"yoil":timestamp2,"time":timestamp};
            try{
                await Actions.initialize();
                await Actions.getPost(now);
                await Actions.config();
            }catch(e){
                console.log(e);
            }
            
        }
        else{
            try{
                await Actions.initialize();
                await Actions.getPost(date);
                await Actions.config();
            }catch(e){
                console.log(e);
            }
        }
        // let temp = this.props;
        // temp.array.forEach(element => {
        //     if(element.buiding==="daniel"){
                
        //     }
        //     else{

        //     }
        // });
        
    }
    


    render(){
        const onClickHandler= this.onClickHandler;
        return(
            <header className={cx("headers")}>
                <Button onClick={onClickHandler} basic color="grey" className={cx("button")} >검색</Button>
            </header>
        )
    }
}

export default connect(
    (state)=>({
        temp:state.class,
    }),
    (dispatch)=>({
        Actions: bindActionCreators(Action,dispatch)
    })
)(Submit)