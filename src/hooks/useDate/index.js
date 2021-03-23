import { useState, useEffect } from "react";

export const useDate = (timezone) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Updates time every 1 second
    const interval = setInterval(() => {
      // The condition is within the interval to be able to clear it later, otherwise it only lives within the condition
      if (timezone) {
        const currentTime = new Date(),
          updatedTime = currentTime.toLocaleTimeString("en-US", {
            timeZone: timezone,
          }),
          updatedDate = currentTime.toLocaleDateString("en-US", {
            timeZone: timezone,
          });

        setTime(updatedTime);
        setDate(updatedDate);
      }
    }, 1000);
    return clearInterval(interval);
  }, [timezone]);

  return { time, date };
};
