import { useState, useEffect } from "react";

export const useDate = (timezone) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Updates time every 1 second
    if (timezone)
      setInterval(() => {
        const currentTime = new Date(),
          updatedTime = currentTime.toLocaleTimeString("en-US", {
            timeZone: timezone,
          }),
          updatedDate = currentTime.toLocaleDateString("en-US", {
            timeZone: timezone,
          });

        setTime(updatedTime);
        setDate(updatedDate);
      }, 1000);
  }, [timezone]);

  return { time, date };
};
