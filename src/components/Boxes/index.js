import React, { useContext } from "react";
import { Box } from "src/components";
import { ZonesContext } from "src/context";
import { Container } from "./styles";

export const Boxes = () => {
  const { zones, removeZone } = useContext(ZonesContext);

  return (
    <Container>
      {zones &&
        zones.map((zone) => (
          <Box
            key={zone}
            zone={zone}
            date={"date"}
            time={"time"}
            remove={() => removeZone(zone)}
          />
        ))}
    </Container>
  );
};
