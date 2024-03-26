import { useState, useContext, useEffect } from "react";
import { NotificationManager } from "react-notifications";

import { LoadingContext } from "../../Context/LoadingContext";
import { ButtonContext } from "../../Context/ButtonContext";

import Card from "./Components/Card";

import { getVehicle } from '../../Data/index'
import { CATCH_ERROR } from '../../Helper/Error';

const Vehicle = () => {
    const [dataList, setDataList] = useState([]);

    const { dispatchLoading } = useContext(LoadingContext);
    const { dispatch } = useContext(ButtonContext);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const { message: { data } } = await getVehicle();
  
          setDataList(data);
        } catch (err) {
          NotificationManager.warning(CATCH_ERROR(err), "Terjadi Kesalahan", 5000);
        }
      };
  
      getData();
  
      dispatchLoading(false);
      dispatch({
        typeSwtich: "CHANGE_BUTTON",
        dataButtonList: [],
      });
    }, [dispatch, dispatchLoading]);

    return (
        <div className="row">
            {
                dataList.map(({
                    acc, plate, expired_gsm: expiredGsm, speed, gsm_no: gsmNo, satellite, battery,
                    imei, vehicle_type: vehicleType, device_name: deviceName, last_update: lastUpdate,
                }, idx) => (
                    <div className="col-md-6" key={idx}>
                        <Card
                            accStatus={acc}
                            plateNumber={plate}
                            expiredGsm={expiredGsm}
                            speed={speed}
                            gsmNo={gsmNo}
                            satellite={satellite}
                            battery={battery}
                            vehicleType={vehicleType}
                            imei={imei}
                            deviceName={deviceName}
                            lastUpdate={lastUpdate}
                        />
                    </div>
                ))
            }
        </div>
    )
};
 
export default Vehicle;