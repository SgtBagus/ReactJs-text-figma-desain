
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from "../../Context/AuthContext";

import { API_BASE } from '../../Data/config/apiBase';

import { MENU_LIST, MENU_LIST_FOOTER } from '../Config';

export const SidebarComponents = ({ path: currentPath }) => {
    const { currentUser: { token } } = useContext(AuthContext);

    const navigate = useNavigate();
    const handelNavigate = (path) => {
        return navigate(path);
    }

    const logoutHanlder = async () => {
        const url = `${API_BASE}api/logout`;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post(url).then(() => {
            localStorage.removeItem("currentUser");
            
            window.location.href = "/login";
        });
    };

    return (
        <aside className="main-sidebar sidebar-white">
            <div className="brand-link text-center" style={{ height: '75px' }}>
                <span
                    className="font-primary fw-bold"
                    style={{
                    display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    GPS.ID TMS
                </span>
            </div>

            <div className="sidebar">
                <nav
                    className="my-2 d-flex flex-column justify-content-between" style={{ height: '85vh'}}>
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
                        {
                            MENU_LIST.map(({id, menuName, path, icon, imageIcon }) => (
                                <li className="nav-item" key={id}>
                                    <div
                                        className={`nav-link ${currentPath.toLowerCase() === path.toLowerCase() && 'active'}`}
                                        style={{ color: currentPath.toLowerCase() !== path.toLowerCase() && '#202224', cursor: 'pointer' }}
                                        onClick={() => handelNavigate(path)}
                                    >
                                        <img src={imageIcon} alt="iconMenu" className='mr-3' />
                                        <p>{menuName}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="nav nav-pills nav-sidebar flex-column nav-menu-footer" data-widget="treeview" role="menu" data-accordion="true">
                        {
                            MENU_LIST_FOOTER.map(({id, menuName, path, imageIcon }) => (
                                <li className="nav-item" key={id}>
                                    <div
                                        className={`nav-link ${currentPath.toLowerCase() === path.toLowerCase() && 'active'}`}
                                        style={{ color: currentPath.toLowerCase() !== path.toLowerCase() && '#202224', cursor: 'pointer' }}
                                        onClick={() => {
                                            if (path === '/logout') {
                                                logoutHanlder()
                                            } else {
                                                handelNavigate(path)
                                            }
                                        }}
                                    >
                                        <img src={imageIcon} alt="iconMenu" className='mr-3' />
                                        <p>{menuName}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </aside>
    )
}