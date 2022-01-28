import { useState } from "react";
import { Link } from "react-router-dom";

export type TabName = 'About Me' | 'Blog' | 'Project Highlights' | 'Language Study' | 'Contact' | 'None';
const TabList: TabName[] = ['About Me', 'Blog', 'Project Highlights', 'Contact'];

export const TabBar = () => {
    return (
        <div style={{
            backgroundColor: 'white',//'#e085ff',
            position: 'relative',
            top: '0',
            minHeight: '36px',
            padding: '8px 0px',
            boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: '945px',
            fontSize: '1.5rem'
            //-webkit-box-shadow: 0px 5px 7px -2px rgba(0,0,0,0.63); 
        }}>
            {false && <div style={{ flexBasis: '50%', fontWeight: '600' }}><Link to="home">it's ya boy</Link></div>}
            <div style={{ margin: 'auto', maxWidth: '50%', display: 'flex', flexGrow: '1', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {TabList.map((tabName: TabName) => {
                    return (
                        <Link to={tabName === 'About Me' ? '/' :  tabName.toLowerCase().replace(' ', '')}
                            style={{ cursor: 'pointer', fontWeight: 400 }} //activeTab === (tabName) ? 800 : 400 }}
                        >
                            {tabName}
                        </Link>
                    )
                })}
                <a href="https://berniemarger.com/static/BernieMarger_TechnicalResume.pdf" target="_blank">Download My Resume</a>
            </div>
        </div>
    )
}