import React, { useState } from "react";
import update from "immutability-helper";

import InputText from "../../Components/Form/InputText";

import ukFlag from "./assets/uk-flag.png"

export const HeaderComponents = () => {
    const [form, setForm] = useState({
      search: "",
    });

    const changeInputHandler = async (type, val) => {
        const newForm = update(form, {
          [type]: { $set: val },
        });
    
        await setForm(newForm);
    };

    const { search } = form;

    return (
        <div className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav mx-3 d-flex align-items-center">
                <li className="nav-item" id="clickerMenu">
                    <div className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars"></i>
                    </div>
                </li>
                <li className="nav-item mx-3">
                    <InputText
                        type="email"
                        value={search}
                        placeholder="&#xF002; Search"
                        changeEvent={(val, e) => changeInputHandler("search", val, e)}
                        style={{
                            borderRadius: "25px",
                            fontFamily: "Arial, FontAwesome",
                        }}
                    />
                </li>
            </ul>
            <ul className="navbar-nav ml-auto mr-3 d-flex align-items-center">
                <li className="nav-item">
                    <button type="button" className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="far fa-bell" />
                        <span className="badge badge-danger navbar-badge" style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            fontSize: '10px',
                            borderRadius: '100%',
                        }}>6</span>
                    </button>
                </li>
                <li className="nav-item">
                    <div className="mx-3">
                        <img src={ukFlag} alt="flag" className="mx-3"/>
                        English
                    </div>
                </li>
                <li className="nav-item">
                    <div className="user-panel d-flex align-items-center">
                        <div className="image">
                            <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" className="img-circle elevation-2" alt="User" style={{ width: '35px', height: '35px', objectFit: 'cover' }} />
                        </div>
                        <div className="info">
                            Aldy
                            <br />
                            <small>Admin</small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}