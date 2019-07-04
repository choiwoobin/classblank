import axios from 'axios';

export const findClass = ({yoil,time})=> axios.post('/api/find',{yoil,time});
