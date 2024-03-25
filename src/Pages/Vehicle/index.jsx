import { useContext, useEffect } from "react";

import { LoadingContext } from "../../Context/LoadingContext";
import { ButtonContext } from "../../Context/ButtonContext";


import Card from "./Components/Card";

const Vehicle = () => {
    const { dispatchLoading } = useContext(LoadingContext);
    const { dispatch } = useContext(ButtonContext);

    useEffect(() => {
      dispatchLoading(false);
      dispatch({
        typeSwtich: "CHANGE_BUTTON",
        dataButtonList: [],
      });
    }, [dispatch, dispatchLoading]);

    return (
        <div className="row">
            <div className="col-md-6">
                <Card />
            </div>
            <div className="col-md-6">
                <Card />
            </div>
            <div className="col-md-6">
                <Card />
            </div>
            <div className="col-md-6">
                <Card />
            </div>
            <div className="col-md-6">
                <Card />
            </div>
            <div className="col-md-6">
                <Card />
            </div>
        </div>
    )
};
 
export default Vehicle;