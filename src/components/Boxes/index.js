import React, { useContext } from "react";
import { Box } from "src/components";
import { ZonesContext } from "src/context";
import { Container } from "./styles";

export const Boxes = () => {
  const { zones, removeZone } = useContext(ZonesContext);

  return (
    <Container>
      {zones &&
        zones.map(({ timezone, utc_datetime }) => {
          // Formats the date and time
          const date = new Date(utc_datetime).toLocaleDateString();
          const time = new Date(utc_datetime).toLocaleTimeString("en-US", {
            timeZone: timezone,
          });

          return (
            <Box
              key={timezone + time}
              zone={timezone}
              date={date}
              time={time}
              remove={() => removeZone(timezone)}
            />
          );
        })}
    </Container>
  );
};
