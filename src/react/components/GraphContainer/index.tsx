import { IconContainer, IconTokenEnum } from "@nexus/nexusExporter";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { type Data, Network } from "vis-network";
import { useShallow } from "zustand/react/shallow";

import { GraphFactoryLineDirectionEnum as GraphDirection } from "../../../enums/graphFactoryLineDirection.enum";
import { GraphFactoryLineSizeEnum as GraphSize } from "../../../enums/graphFactoryLineSize.enum";
import { stringRemoveEndPxHelper } from "../../../helpers/stringRemoveEndPx.helper";
import { useCombinedStore } from "../../../store/combined.store";
import { theme } from "../../../styles/theme";
import { useCalculateFactoryLine } from "../../hooks/useCalculateFactoryLine";
import { useGetDiagramData } from "../../hooks/useGetDiagramData";
import { useGetDiagramOptions } from "../../hooks/useGetDiagramOptions";
import styles from "./styles.module.scss";

export const GraphContainer = (): React.JSX.Element | null => {
  const [factoryLine, selectedFactoryLineData, setFactoryLine] =
    useCombinedStore(
      useShallow((state) => [
        state.factoryLine,
        state.selectedFactoryLineData,
        state.setFactoryLine,
      ]),
    );

  const [graphSize, setGraphSize] = useState<GraphSize>(GraphSize.NORMAL);
  const [graphDirection, setGraphDirection] = useState<GraphDirection>(
    GraphDirection.RIGHT_TO_LEFT,
  );

  useCalculateFactoryLine({ selectedFactoryLineData, setFactoryLine });

  const visJsRef = useRef<HTMLDivElement>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);

  const { nodes, edges } = useGetDiagramData({ factoryLine });
  const data: Data = useMemo(
    () => ({
      nodes,
      edges,
    }),
    [nodes, edges],
  );

  const options = useGetDiagramOptions({
    graphSize,
    graphDirection,
    graphContainer: graphContainerRef,
  });

  useEffect(() => {
    if (visJsRef.current) {
      // eslint-disable-next-line no-new
      new Network(visJsRef.current, data, options);
    }
  }, [visJsRef, nodes, edges, data, options]);

  if (!factoryLine) return null;

  return (
    <div
      className={`${styles.graph_container} ${graphSize === GraphSize.FULLSCREEN ? styles.fullscreen : ""}`}
      ref={graphContainerRef}
    >
      <div ref={visJsRef} />
      {/* TODO T => Sortir les boutons d'ici */}
      <div className={styles.graph_button_container}>
        <button
          aria-label="fullscreen graph button"
          type="button"
          onClick={() => {
            setGraphSize(
              graphSize === GraphSize.NORMAL
                ? GraphSize.FULLSCREEN
                : GraphSize.NORMAL,
            );
          }}
        >
          <IconContainer
            size={2 * stringRemoveEndPxHelper(theme.spaceXL)}
            iconToken={
              graphSize === GraphSize.FULLSCREEN
                ? IconTokenEnum.Collapse
                : IconTokenEnum.Expand
            }
            color={theme.colorSecondaryContent}
          />
        </button>
        <button
          aria-label="fullscreen graph button"
          type="button"
          onClick={() => {
            switch (graphDirection) {
              case GraphDirection.LEFT_TO_RIGHT:
                setGraphDirection(GraphDirection.TOP_TO_BOTTOM);
                break;
              case GraphDirection.TOP_TO_BOTTOM:
                setGraphDirection(GraphDirection.RIGHT_TO_LEFT);
                break;
              case GraphDirection.RIGHT_TO_LEFT:
                setGraphDirection(GraphDirection.BOTTOM_TO_TOP);
                break;
              case GraphDirection.BOTTOM_TO_TOP:
                setGraphDirection(GraphDirection.LEFT_TO_RIGHT);
                break;
              default:
                break;
            }
          }}
        >
          <div
            className={styles.arrow_button_rotator_container}
            data-direction={graphDirection}
          >
            <IconContainer
              size={2 * stringRemoveEndPxHelper(theme.spaceXL)}
              iconToken={IconTokenEnum.Arrow}
              color={theme.colorSecondaryContent}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
