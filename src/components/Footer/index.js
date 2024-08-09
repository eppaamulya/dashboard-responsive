import './index.css'
import AppContext from '../../context/AppContext';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <AppContext.Consumer>
            {value => {
                const {isDarkTheme} = value
                return (
                    <>
                        {isDarkTheme ? (
                            <footer className='footer-dark'>
                                <div className='foot-div'>
                                    <FaRegCopyright className='icony'/>
                                    <h1 className='foot-main'>2024 Bare Kaab. All Rights Reserved. Made with love by simmmmple!</h1>
                                </div>
                                <ul className='foot-list'>
                                    <li className='foot-list-item'>Marketplace</li>
                                    <li className='foot-list-item'>License</li>
                                    <li className='foot-list-item'>Terms of Use</li>
                                    <li className='foot-list-item'>Blog</li>
                                </ul>
                            </footer>
                            ) : (
                            <footer className='footer-light'>
                                <div className='foot-div'>
                                    <FaRegCopyright className='icony'/>
                                    <h1 className='foot-main'>2024 Bare kaab. All Rights Reserved. Made with love by simmmmple!</h1>
                                </div>
                                <ul className='foot-list'>
                                    <li className='foot-list-item'>Marketplace</li>
                                    <li className='foot-list-item'>License</li>
                                    <li className='foot-list-item'>Terms of Use</li>
                                    <li className='foot-list-item'>Blog</li>
                                </ul>
                            </footer>
                        )}
                    </>
                )
            }}
        </AppContext.Consumer>
        
    )
}

export default Footer