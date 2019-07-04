import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import logo from './image.png' 

const cx = classNames.bind(styles);

const Header = () => (
    <header className = {cx('header')}>
    <div className={cx('header-content')}>
        <div className = {cx('brand')}>
            <img src = {logo} style={{width: '3rem'}}/>            
        </div>       
        <div className={cx('middle')}>
       Empty Classroom
        </div>
        </div>
    </header>
)

export default Header;