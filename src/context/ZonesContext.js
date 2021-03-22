import React, { createContext, useEffect, useState } from "react";

export const ZonesContext = createContext();

export const ZonesContextProvider = ({ children }) => {
  // If there's data in local storage here i bring it, if not just initializes zones to an empty array
  const timezonesInLocalStorage = window.localStorage.getItem("timezones");
  const initialState = timezonesInLocalStorage
    ? JSON.parse(timezonesInLocalStorage)
    : [];

  const [zones, setZones] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("timezones", JSON.stringify(zones));
  }, [zones]);

  const addZone = (newZone) => {
    // Avoid storing a repeated zone
    if (!zones.find((zone) => zone === newZone)) {
      setZones((zones) => zones.concat(newZone));
    }
  };

  const removeZone = (zoneToRemove) => {
    setZones((zones) => zones.filter((zone) => zone !== zoneToRemove));
  };

  return (
    <ZonesContext.Provider value={{ zones, addZone, removeZone }}>
      {children}
    </ZonesContext.Provider>
  );
};
