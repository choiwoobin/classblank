import React from 'react'
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind';

import Header from 'components/common/Header';
import Classroom from 'components/Classroom';
import Result from 'components/Result';
import List from 'components/List'





const cx = classNames.bind(styles);

const PageTemplate = () => (
    <div className = {cx('page-template')}>
    <Header/>
    <List/>
    <Classroom/>
  

    
    

    </div>
)

export default PageTemplate;
