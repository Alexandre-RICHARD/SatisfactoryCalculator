import { Grid } from "@mui/joy";
import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { AwesomeSink } from "../../monitoring/components/awesomeSink";
import { Footer } from "../../monitoring/components/footer";
import { Sidebar } from "../../monitoring/components/sidebar";
import { ConnectionCheckerProvider } from "../../monitoring/context/connectionChecker";
import { Building } from "../../monitoring/views/building";
import { Drones } from "../../monitoring/views/drones";
import { DetailedFactoryView } from "../../monitoring/views/factoryView";
import { DetailedGeneratorView } from "../../monitoring/views/generatorView";
import { PowerMain } from "../../monitoring/views/powerMain";
import { FactorysSwitch } from "../../monitoring/views/production";
import { Settings } from "../../monitoring/views/settings";
import { Start } from "../../monitoring/views/start";
import { StorageView } from "../../monitoring/views/storageView";
import { SocketTestSite } from "../../monitoring/views/testingSocket";
import { Trains } from "../../monitoring/views/trains";
import { Vehicles } from "../../monitoring/views/vehicles";
// import styles from "./styles.module.scss";

export const Monitoring = (): React.JSX.Element => {
  return (
    <Grid
      container
      sx={{ position: "relative", height: "100%" }}
    >
      <Grid sx={{ minWidth: "50px" }}>
        <Sidebar />
      </Grid>
      <Grid
        xs
        sx={{ height: "100%" }}
      >
        <Box>
          <ConnectionCheckerProvider>
            <Routes>
              <Route
                path="/"
                element={<Start />}
              />
              <Route
                path="/power"
                element={<PowerMain />}
              />
              <Route
                path="/generator"
                element={<DetailedGeneratorView />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
              <Route
                path="/production"
                element={<FactorysSwitch />}
              />
              <Route
                path="/factory"
                element={<DetailedFactoryView />}
              />
              <Route
                path="/building"
                element={<Building />}
              />
              <Route
                path="/drones"
                element={<Drones />}
              />
              <Route
                path="/trains"
                element={<Trains />}
              />
              <Route
                path="/vehicles"
                element={<Vehicles />}
              />
              <Route
                path="/storageView"
                element={<StorageView />}
              />
              <Route
                path="/awesomeSink"
                element={<AwesomeSink />}
              />
              <Route
                path="/test"
                element={<SocketTestSite />}
              />
            </Routes>
          </ConnectionCheckerProvider>
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
};
