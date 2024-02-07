import React, { useState } from 'react';
import './App.css';
import { SlCalculator } from "react-icons/sl";
const App = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="app">
            <div className="naming">
                <p className="description" style={{margin: 0, width:"50%", fontSize:"25px"}}>distributed calculator</p>
                <SlCalculator className="calculator-icon" size="55px" style={{paddingLeft:"100px"}}></SlCalculator>
            </div>

            <div className="tabs">
                <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</button>
                <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</button>
                <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</button>
            </div>
            <div className="content">
                {activeTab === 'tab1' && <p>Content for Tab 1</p>}
                {activeTab === 'tab2' && <p>Content for Tab 2</p>}
                {activeTab === 'tab3' && <p>Content for Tab 3</p>}
            </div>
        </div>
    );
};

export default App;