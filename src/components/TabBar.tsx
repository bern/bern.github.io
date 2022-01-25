import { useState } from "react";
import { Link } from "react-router-dom";

export type TabName = 'Blog' | 'Project Highlights' | 'Language Study' | 'Contact' | 'None';
const TabList: TabName[] = ['Blog', 'Project Highlights', 'Language Study', 'Contact'];

export const TabBar = ({onTabChange, activeTab}: {onTabChange: (tab: TabName) => void; activeTab: TabName}) => {
    return (
        <div style={{
            backgroundColor: '#e085ff',
            position: 'relative',
            top: '0',
            minHeight: '36px',
            padding: '8px 5%',
            boxShadow: '0px 5px 7px 1px rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: '945px'

            //-webkit-box-shadow: 0px 5px 7px -2px rgba(0,0,0,0.63); 
        }}>
            <div style={{ flexBasis: '50%', fontWeight: '600' }}><Link to="home">it's ya boy</Link></div>
            <div style={{ flexBasis: '50%', display: 'flex', flexGrow: '1', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {TabList.map((tabName: TabName) => {
                    return (
                        <Link to={tabName.toLowerCase().replace(' ', '')}
                            onClick={() => {
                                onTabChange(tabName);
                            }}
                            style={{ cursor: 'pointer', fontWeight: activeTab === (tabName) ? 800 : 400 }}
                        >
                            {tabName}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}