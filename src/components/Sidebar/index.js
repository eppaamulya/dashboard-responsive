// import './index.css'
// import { IoMdHome } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { IoIosStats } from "react-icons/io";

// import { BsKanban } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// import { FaLock } from "react-icons/fa";
// import AppContext from '../../context/AppContext';

// import { Component } from 'react';


// class Sidebar extends Component  {
//     render() {
//         const {isVisible} = this.props

//     return (
//     <AppContext.Consumer>
//     {value => {
//       const {isDarkTheme} = value
//       return (
//         <>
//             {isDarkTheme ? (
//             <sidebar className={`sidebar-dark ${isVisible ? 'visible': ''}`}>
//             <div className='side-top-div'>
                
//                 <h1 className='head-1-dark'>HORIZON <span>FREE</span></h1>
//             </div>
//             <ul>
//                 <div>
//                     <IoMdHome className='icon'/>
//                     <li className='listy-dark'>Dashboard</li>
//                 </div>
//                 <div>
//                     <IoCartOutline className='icon' />
//                     <li className='listy-dark'>NFT Marketplace</li>
                    
//                 </div>
//                 <div>
//                     <IoIosStats className='icon' />
//                     <li className='listy-dark'>Tables</li>
//                 </div>
//                 <div>
//                     <BsKanban className='icon' />
//                     <li className='listy-dark'>Kanban</li>
//                 </div>
//                 <div>
//                     <CgProfile className='icon' />
//                     <li className='listy-dark'>Profile</li>
//                 </div>
//                 <div>
//                     <FaLock className='icon' />
//                     <li className='listy-dark'>Sign in</li>
//                 </div>
                
//             </ul>
//             <div className='bottom-sidebar-dark'>
//                 <h1 className='box-head'>Upgrade to PRO</h1>
//                 <p className='box-para'>to get access to all features!<br /> Connect with Venus World!</p>
//             </div>
//         </sidebar>) : (
//             <sidebar className={`sidebar-light ${isVisible ? 'visible': ''}`}>
//             <div className='side-top-div'>
                
//                 <h1 className='head-1-light'>HORIZON<span>FREE</span></h1>
//             </div>
//             <ul>
//                 <div>
//                     <IoMdHome className='icon'/> 
//                     <li>Dashboard</li>
//                 </div>
//                 <div>
//                     <IoCartOutline className='icon' />
//                     <li>NFT Marketplace</li>
//                 </div>
//                 <div>
//                     <IoIosStats className='icon' />
//                     <li>Tables</li>
//                 </div>
//                 <div>
//                     <BsKanban className='icon' />
//                     <li>Kanban</li>
//                 </div>
//                 <div>
//                     <CgProfile className='icon' />
//                     <li>Profile</li>
//                 </div>
//                 <div>
//                     <FaLock className='icon' />
//                     <li>Sign in</li>
//                 </div>
                
//             </ul>
//             <div className='bottom-sidebar-light'>
//                 <h1 className='box-head'>Upgrade to PRO</h1>
//                 <p className='box-para'>to get access to all features!<br /> Connect with Venus World!</p>
//             </div>
//         </sidebar>)}
//         </>
        
//       )
//     }}
//     </AppContext.Consumer>
//     )
// }
// }

// export default Sidebar

import './index.css'
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { BsKanban } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import AppContext from '../../context/AppContext';
import { Component } from 'react';
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon-1' />
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div  className='sidey-div'>
                                    <IoCartOutline className='icon' />
                                    <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>NFT Marketplace</li>
                                    </div>
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon' />
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <IoIosStats className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Tables</li>
                                    </div>
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon-1' />
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <BsKanban className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Kanban</li>
                                    </div>
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon-1' />
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <CgProfile className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Profile</li>
                                    </div>
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon-1' />
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <FaLock className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Sign in</li>
                                    </div>
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon-1' />
                                    </div>
                                </div>
                                <div className='side-list-div'>
                                    <div className='sidey-div'>
                                        <IoSettingsOutline className='icon' />
                                        <li className={`listy-${isDarkTheme ? 'dark' : 'light'}`}>Settings</li>
                                    </div>
                                    <div className='sidey-div-1'>
                                        <IoIosArrowForward className='icon-1' />
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
