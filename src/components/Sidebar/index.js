import './index.css'
import AppContext from '../../context/AppContext';

import { IoCartOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { BsKanban } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { Component } from 'react';
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";


class Sidebar extends Component {
    render() {
        const { isVisible } = this.props;

        return (
            <AppContext.Consumer>
                {value => {
                    const { isDarkTheme } = value;
                    return (
                        <div className={`sidebar ${isDarkTheme ? 'sidebar-dark' : 'sidebar-light'} ${isVisible ? 'visible' : ''}`}>
                            <div className="side-top-div">
                                <h1 className={`head-1-${isDarkTheme ? 'dark' : 'light'}`}>Bare kaab</h1>
                            </div>
                            <ul className='side-list'>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <RxDashboard className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Dashboard</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div  className='sidey-div'>
                                    <IoCartOutline className='icon' />
                                    <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Savings</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <IoIosStats className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Investments</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <BsKanban className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Budget Planning</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <TbReport className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Reports</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <CgProfile className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Profile</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <FaLock className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Sign in</li>
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <IoSettingsOutline className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Settings</li>
                                    </div>
                                </div>
                            </ul>
                           
                        </div>
                    );
                }}
            </AppContext.Consumer>
        );
    }
}

export default Sidebar;
