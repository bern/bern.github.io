import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export type TabName = 'About Me' | 'Blog' | 'Projects' | 'Language Study' | 'Contact' | 'None';
const TabList: TabName[] = ['About Me', 'Blog', 'Projects'];

export const TabBar = () => {
    const { pathname: activePathName } = useLocation();

    console.log(activePathName)

    return (
        <div className='tabBar'>
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