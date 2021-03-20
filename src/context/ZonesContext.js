import React, { createContext, useEffect, useState } from "react";

export const ZonesContext = createContext();

export const ZonesContextProvider = ({ children }) => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    if (zones.length > 0) {
      const timezones = zones.map((zone) => zone.timezone);
      window.localStorage.setItem("timezones", JSON.stringify(timezones));
    }
  }, [zones]);

  const addZone = (newZone) => {
    if (!zones.find((zone) => zone.timezone === newZone.timezone)) {
      setZones((zones) => zones.concat(newZone));
    }
  };

  const removeZone = (zoneToRemove) => {
    setZones((zones) => zones.filter((zone) => zone.timezone !== zoneToRemove));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (zones.length > 0) {
        const newZones = zones.map((zone) => {
          const time = new Date(zone.utc_datetime);

          return {
            ...zone,
            utc_datetime: Date(time.setSeconds(time.getSeconds() + 5)),
          };
        });

        setZones(newZones);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [zones]);

  return (
    <ZonesContext.Provider value={{ zones, addZone, removeZone }}>
      {children}
    </ZonesContext.Provider>
  );
};
