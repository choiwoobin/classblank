import {createAction, handleActions} from 'redux-actions';
import {List,Map, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from '../../lib/api';

//action types
const INITIALIZE = 'INITIALIZE';
const GET_POST = 'GET_POST';
const CONFIG = 'config';
//action creators
export const initialize = createAction(INITIALIZE);
export const getPost = createAction(GET_POST,api.findClass);
export const config = createAction(CONFIG);

// initial state
const initialState = Map({
    data: List(),
    daniel:List(),
    kookje:List(),
    design:List(),
    bowl:List(),
    samuel:List(),
    jesus:List(),
    art:List(),
    esra:List(),
    yohan:List(),
    science1:List(),
    science2:List(),
    science3:List(),
    excercise:List(),
    onsil:List()
});

export default handleActions({
     [INITIALIZE] : (state,action) => initialState,
     [CONFIG]:(state,action)=>{
        let temp = state.toJS();
        temp= temp.data;
        console.log(temp);
        
        let daniel=List(Map({}));
        let kookje=List(Map({}));
        let design=List(Map({}));
        let bowl=List(Map({}));
        let samuel=List(Map({}));
        let jesus=List(Map({}));
        let art=List(Map({}));
        let esra=List(Map({}));
        let yohan=List(Map({}));
        let science1=List(Map({}));
        let science2=List(Map({}));
        let science3=List(Map({}));
        let excercise=List(Map({}));
        let onsil=List(Map({}));
        
        temp.forEach(element => {
            
            if(element.building==='daniel'){
                daniel = daniel.push(Map({ho: element.ho}))
               }
               else if (element.building==='kookje'){
                kookje = kookje.push(Map({ho: element.ho}))
               }
               else if (element.building==='design'){
                design = design.push(Map({ho: element.ho}))
               }
               else if (element.building==='bowl'){
                bowl = bowl.push(Map({ho: element.ho}))
               }
               else if (element.building==='samuel'){
                samuel = samuel.push(Map({ho: element.ho}))
               }
               else if (element.building==='jesus'){
                jesus = jesus.push(Map({ho: element.ho}))
               }
               else if (element.building==='art'){
                art = art.push(Map({ho: element.ho}))
               }
               else if (element.building==='esra'){
                esra = esra.push(Map({ho: element.ho}))
               }
               else if (element.building==='science1'){
                science1 = science1.push(Map({ho: element.ho}))
               }
               else if (element.building==='science2'){
                science2 = science2.push(Map({ho: element.ho}))
               }
               else if (element.building==='science3'){
                science3 = science3.push(Map({ho: element.ho}))
               }
               else if (element.building==='excercise'){
                excercise = excercise.push(Map({ho: element.ho}))
               }
               else if (element.building==='onsil'){
                onsil = onsil.push(Map({ho: element.ho}))
               }
               else if (element.building==='yohan'){
                yohan = yohan.push(Map({ho: element.ho}))
               }
             });
             
        return state.set('daniel',daniel).set('yohan',yohan)
        .set('art',art).set('bowl',bowl).set('design',design).
        set('esra',esra).set('excercise',excercise)
        .set('jesus',jesus).set('kookje',kookje).set('onsil',onsil)
        .set('samuel',samuel).set('science1',science1).set('science2',science2)
        .set('science3',science3);
        
     },
    ...pender({
        type: GET_POST,
        onSuccess: (state,action) =>{
            const go = action.payload.data;
            console.log(action.payload.data);
            return state.set('data',fromJS(action.payload.data))
            }
        })
    },initialState)
      