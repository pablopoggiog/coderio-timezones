import React, { createContext, useEffect, useState } from "react";

export const ZonesContext = createContext();

export const ZonesContextProvider = ({ children }) => {
  const [zones, setZones] = useState([]);

  const addZone = (newZone) => {
    if (!zones.includes(newZone)) setZones((zones) => zones.concat(newZone));
  };

  const removeZone = (zoneToRemove) => {
    setZones((zones) => zones.filter((zone) => zone !== zoneToRemove));
  };

  useEffect(() => {
    console.log("the zones are ", zones);
  }, [zones]);

  return (
    <ZonesContext.Provider value={{ zones, addZone, removeZone }}>
      {children}
    </ZonesContext.Provider>
  );
};
