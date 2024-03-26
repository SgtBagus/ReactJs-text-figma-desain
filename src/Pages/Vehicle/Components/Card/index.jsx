import React from "react";

import ICON_STATUS from "./assets/icon-status.png";
import TRUCK from "./assets/truck.png";
import CAR from "./assets/car.png";
import MOTORCYCLE from "./assets/motorcycle.png";

import ENGINE from "./assets/engine.png";
import SATELLITE from "./assets/satellite.png";
import BATTERY from "./assets/battery.png";

import "./custom.css";
import moment from "moment";

const ACC_ENUM = {
  ON: 'ON',
  OFF: 'OFF',
};

const VEHICLE_EMUM = {
  TRUCK: 'Truck',
  CAR: 'Car',
  MOTORCYCLE: 'Motorcycle',
}

const getStatus = (accStatus, speed) =>{
  let statusReturn = 'Error';

  if (accStatus === ACC_ENUM.ON && parseInt(speed) > 0 ) {
    statusReturn = 'Running';
  } else if (accStatus === ACC_ENUM.OFF && parseInt(speed) === 0 ) {
    statusReturn = 'Parking';
  } else if (accStatus === ACC_ENUM.ON && parseInt(speed) === 0 ) {
    statusReturn = 'Stop'
  }

  return statusReturn;
}

const getIconVehicle = (val) => {
  let iconRender = TRUCK;

  if (val === VEHICLE_EMUM.CAR) {
    iconRender = CAR; 
  } else if (val === VEHICLE_EMUM.MOTORCYCLE) {
    iconRender = MOTORCYCLE;
  }

  return iconRender;
}

const Card = ({
  accStatus, plateNumber, expiredGsm, speed, gsmNo, satellite, battery,
  vehicleType, imei, deviceName, lastUpdate,
}) => {
  return (
    <div className="card-custom-continer">
      <div className="card card-header-custom border-0 border-bottom shadow-sm m-0 d-flex flex-row">
        <label
          className="form-label fw-light mr-2 my-0"
          style={{ color: "#7A7A7A" }}
        >
          Status :
        </label>
        <div className="d-flex align-items-center">
          <img src={ICON_STATUS} alt="icon" className="mr-2" />
          <label
            className="form-label fw-bold m-0"
            style={{ color: "#1A1A1A" }}
          >
            {getStatus(accStatus, speed)}
          </label>
        </div>
      </div>
      <div className="card card-body-custom border-0 shadow-sm">
        <div className="card-body m-2">
          <div className="d-flex align-items-center">
            <div className="speed-box">
              <div className="speed-text d-flex flex-column align-items-center">
                <label
                  className="form-label fw-bold mr-2 my-0"
                  style={{ color: "#1A1A1A" }}
                >
                  {speed}km/h
                </label>
                <label
                  className="form-label fw-light mr-2 my-0"
                  style={{ color: "#7A7A7A", fontSize: "10px" }}
                >
                  Odo: 100km
                </label>
              </div>
            </div>
            <div className="w-100">
              <div className="speed-text d-flex flex-row align-items-center">
                <img
                  src={getIconVehicle(vehicleType)}
                  alt="icon"
                  className="mr-2"
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "65px",
                    height: "auto",
                  }}
                />
                <div className="speed-text d-flex flex-column">
                  <label
                    className="form-label fw-light mr-2 my-0"
                    style={{ color: "#7A7A7A" }}
                  >
                    Shipment Number
                    <label
                      className="form-label fw-normal ms-2 my-0"
                      style={{ color: "#1A1A1A" }}
                    >
                      {imei ? imei : 'Error'}
                    </label>
                  </label>
                  <label
                    className="form-label fw-bold mr-2 my-0"
                    style={{ color: "#1A1A1A", fontSize: "16px" }}
                  >
                    {plateNumber} - {vehicleType ? vehicleType.toUpperCase() : 'TRUCK'} {deviceName}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between my-3">
            <div>
              <img
                src={ENGINE}
                alt="icon"
                className="mr-2"
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <label
                className="form-label fw-bold mr-2 my-0"
                style={{ color: "#1A1A1A", fontSize: "16px" }}
              >
                ACC {accStatus}
              </label>
            </div>
            <div>
              <img
                src={SATELLITE}
                alt="icon"
                className="mr-2"
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <label
                className="form-label fw-bold mr-2 my-0"
                style={{ color: "#1A1A1A", fontSize: "16px" }}
              >
                {
                  !satellite ? 'N/A' : satellite
                }
              </label>
            </div>
            <div>
              <img
                src={BATTERY}
                alt="icon"
                className="mr-2"
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <label
                className="form-label fw-bold mr-2 my-0"
                style={{ color: "#1A1A1A", fontSize: "16px" }}
              >
                {battery}%  
              </label>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between p-2" style={{ backgroundColor: '#F5F6FA', fontSize: "10px"}}>
            <div>
              <label
                className="form-label fw-bold mr-2 my-0"
                style={{ color: "#1A1A1A" }}
              >
                Data Terakhir : 
                <label
                  className="form-label fw-normal ml-1 my-0"
                  style={{ color: "#7A7A7A" }}
                >
                  {moment(lastUpdate).format('DD-MM-YYYY HH:mm:ss')}
                </label>
              </label>
            </div>
            <div>
              <label
                className="form-label fw-bold mr-2 my-0"
                style={{ color: "#1A1A1A" }}
              >
                No GSM : 
                <label
                  className="form-label fw-normal ml-1 my-0"
                  style={{ color: "#7A7A7A" }}
                >
                  {gsmNo}
                </label>
              </label>
            </div>
            <div>
              <label
                className="form-label fw-bold mr-2 my-0"
                style={{ color: "#1A1A1A" }}
              >
                Expired : 
                <label
                  className="form-label fw-normal ml-1 my-0"
                  style={{ color: "#7A7A7A" }}
                >
                  {moment(expiredGsm).format('DD-MM-YYYY')}
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
