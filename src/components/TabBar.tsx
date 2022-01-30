import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export type TabName = 'About Me' | 'Blog' | 'Projects' | 'Language Study' | 'Contact' | 'None';
const TabList: TabName[] = ['About Me', 'Blog', 'Projects'];

export const TabBar = () => {
    const { pathname: activePathName } = useLocation();

    console.log(activePathName)

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
                    let tabPath = tabName.toLowerCase().replace(' ','');
                    if (tabName === 'About Me') {
                        tabPath = ''
                    }

                    return (
                        <Link className={`tab ${`/${tabPath}` === activePathName ? `activeTab` : ``}`} to={`/${tabPath}`}>
                            {tabName}
                        </Link>
                    )
                })}
                <a className='tab' href="/static/TechnicalResume_2022.pdf" target="_blank">Download My Resume</a>
            </div>
        </div>
    )
}