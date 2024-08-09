// import './index.css'
// import { FaSearch } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
// import { MdDarkMode } from "react-icons/md";
// import { IoIosInformationCircleOutline } from "react-icons/io";
// import AppContext from '../../context/AppContext';
// import { IoIosMenu } from 'react-icons/io';
// import { Component } from 'react';


// class Header extends Component {

//     render() {

//         const {toggleSidebar} = this.props

//   return (
//     <AppContext.Consumer>
//     {value => {
//       const {isDarkTheme, toggleTheme} = value

//       const onToggleTheme = () => {
//         toggleTheme()
//       }


//       return (
//           <>
//             {isDarkTheme ? (   
//                 <div className='header-container-dark'>
                    
//                 <header className='header-1-dark'>
                    
//                 <button type='button' className='button-icon' onClick={toggleSidebar}><IoIosMenu className='menu-icon'/></button>
//                 <div className='headings-container-dark'>
//                     <p className='para-dark'>Pages/Dashboard</p>
//                     <h1 className='heading'>Main Dashboard</h1>
//                 </div>
//                 <div className='details-container-dark'>
//                     <div className='div-1-dark'>
//                         <FaSearch className='icons' />
//                         <input type="search" placeholder='Search' className='input'  />
//                     </div>
//                     <button type='button'><IoIosNotifications className='icon-dark' /></button>
//                     <button type='button' onClick={onToggleTheme}><MdDarkMode className='icon-dark' /></button>
//                     <button type='button'><IoIosInformationCircleOutline className='icon-dark'/></button>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ1UtxSyeAnvsuw6XcSuB5C9Jx1Mi5x_Rcg&s" className='profile-pic' alt="profile-pic" />
//                 </div> 
                
//             </header>
//         </div>) : (   
//             <div className='header-container-light'>
            
//             <header className='header-1-light'>
//             <button type='button' className='button-icon' onClick={toggleSidebar}><IoIosMenu className='menu-icon-light'/></button>
//                 <div className='headings-container-light'>
//                     <p className='para-light'>Pages/Dashboard</p>
//                     <h1 className='heading'>Main Dashboard</h1>
//                 </div>
//                 <div className='details-container-light'>
//                     <div className='div-1-light'>
//                         <FaSearch className='icons' />
//                         <input type="search" placeholder='Search' className='input'  />
//                     </div>
//                     <button type='button'><IoIosNotifications className='icon-light' /></button>
//                     <button type='button' onClick={onToggleTheme}><MdDarkMode className='icon-light' /></button>
//                     <button type='button'><IoIosInformationCircleOutline className='icon-light'/></button>
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ1UtxSyeAnvsuw6XcSuB5C9Jx1Mi5x_Rcg&s" className='profile-pic' alt="profile-pic" />
//                 </div> 
                
//             </header>
//         </div>)}
//           </>
//       )
//     }}
//     </AppContext.Consumer>
   
//   )
// }     
// }  


// export default Header
            

import './index.css'
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoIosInformationCircleOutline, IoIosMenu } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import AppContext from '../../context/AppContext';
import { Component } from 'react';
import { HiMenuAlt2 } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoInvertMode } from "react-icons/io5";

class Header extends Component {
    render() {
        const { toggleSidebar } = this.props;

        return (
            <AppContext.Consumer>
                {value => {
                    const { isDarkTheme, toggleTheme } = value;

                    const onToggleTheme = () => {
                        toggleTheme();
                    };

                    return (
                        <>
                        {isDarkTheme ? (   
                            <div className='header-container-dark'>
                                <header className='header-1-dark'>
                                    <div className='headings-container-dark'>
                                        <button type='button' className='button-icon' onClick={toggleSidebar}><HiMenuAlt2 className='menu-icon'/></button>
                                        <div className='div-1-dark'>
                                            <FaSearch className='icons-dark' />
                                            <input type="search" placeholder='Search' className='input-dark'  />
                                        </div>
                                    </div>
                                    <div className='details-container-dark'>
                                        <button type='button'><IoChatbubbleOutline className='icon-light' /></button>
                                        <button type='button' onClick={onToggleTheme}><IoInvertMode className='icon-light-1' /></button>
                                        <button type='button'><IoNotificationsOutline className='icon-light'/></button>
                                        <div className='profile-container'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ1UtxSyeAnvsuw6XcSuB5C9Jx1Mi5x_Rcg&s" className='profile-pic' alt="profile-pic" />
                                            <div className='profile-content'>
                                                <p className='prof-name'>Admin</p>
                                                <p className='prof-mail'>Admin.com</p>
                                            </div>
                                        </div>    
                                    </div>   
                                </header>
                            </div>
                            ) : (   
                            <div className='header-container-light'>
                                <header className='header-1-light'>
                                    <div className='headings-container-light'>
                                        <button type='button' className='button-icon' onClick={toggleSidebar}><HiMenuAlt2 className='menu-icon-light'/></button>
                                        <div className='div-1-light'>
                                            <FaSearch className='icons' />
                                            <input type="search" placeholder='Search' className='input'  />
                                        </div>
                                    </div>
                                    <div className='details-container-light'>
                                        <button type='button'><IoChatbubbleOutline className='icon-light' /></button>
                                        <button type='button' onClick={onToggleTheme}><IoInvertMode className='icon-light-1' /></button>
                                        <button type='button'><IoNotificationsOutline className='icon-light'/></button>
                                        <div className='profile-container'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ1UtxSyeAnvsuw6XcSuB5C9Jx1Mi5x_Rcg&s" className='profile-pic' alt="profile-pic" />
                                            <div className='profile-content'>
                                                <p className='prof-name'>Admin</p>
                                                <p className='prof-mail'>Admin.com</p>
                                            </div>
                                        </div>    
                                    </div>    
                                </header>
                            </div>
                        )}
                        </>
                    );
                }}
            </AppContext.Consumer>
        );
    }
}

export default Header;
