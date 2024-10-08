import './index.css';
import { Component } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Content from '../Content';
import AppContext from '../../context/AppContext';

class Home extends Component {
    state = {isSidebarVisible: false}

    toggleSidebar = () => {
        this.setState(prevState => ({isSidebarVisible : !prevState.isSidebarVisible}))
    };

    render() {
        const {isSidebarVisible} = this.state;
        return (
            <>
                <AppContext.Consumer>
                    {value => {
                        const {isDarkTheme} = value;
                        return (
                            <div className={isDarkTheme ? 'home-bg-container-dark' : 'home-bg-container-light'}>
                                <Header toggleSidebar={this.toggleSidebar} />
                                <div className={isDarkTheme ? 'home-div-dark' : 'home-div-light'}>
                                    <Sidebar isVisible={isSidebarVisible} />
                                    <div 
                                        className={`home-div-2-${isDarkTheme ? 'dark' : 'light'} ${isSidebarVisible ? 'sidebar-visible' : ''}`}
                                    >
                                        <Content />
                                        <Footer />
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </AppContext.Consumer>
            </>
        );
    }
}

export default Home;
