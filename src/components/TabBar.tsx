import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type TabName = 'About Me' | 'Blog' | 'Projects' | 'Language Study' | 'Contact' | 'None';
const TabList: TabName[] = ['About Me', 'Blog', 'Projects'];

export const TabBar = () => {
    const { pathname: activePathName } = useLocation();

    library.add(Icons.faArrowAltCircleDown);

    return (
        <div className='tabBar'>
            <div className='tabContainer'>
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
                <a className='tab' href="/static/TechnicalResume_2022.pdf" target="_blank">Download Resume</a>
            </div>
        </div>
    )
}