import React, { useEffect, useMemo, useRef, useState } from "react";
import { type Data, Network } from "vis-network";
import { useShallow } from "zustand/react/shallow";

import { GraphFactoryLineDirectionEnum as GraphDirection } from "../../../enums/graphFactoryLineDirection.enum";
import { GraphFactoryLineSizeEnum as GraphSize } from "../../../enums/graphFactoryLineSize.enum";
import { useCombinedStore } from "../../../store/combined.store";
import { useCalculateFactoryLine } from "../../hooks/useCalculateFactoryLine";
import { useGetDiagramData } from "../../hooks/useGetDiagramData";
import { useGetDiagramOptions } from "../../hooks/useGetDiagramOptions";
import { GraphHandlerButtons } from "./GraphHandlerButtons";
import { GraphSummary } from "./GraphSummary";
import styles from "./styles.module.scss";

export const GraphContainer = (): React.JSX.Element | null => {
  const [
    factoryLine,
    factoryLineData,
    selectedFactoryLineData,
    setFactoryLine,
    setFactoryLineData,
  ] = useCombinedStore(
    useShallow((state) => [
      state.factoryLine,
      state.factoryLineData,
      state.selectedFactoryLineData,
      state.setFactoryLine,
      state.setFactoryLineData,
    ]),
  );

  const [graphSize, setGraphSize] = useState<GraphSize>(GraphSize.NORMAL);
  const [graphDirection, setGraphDirection] = useState<GraphDirection>(
    GraphDirection.RIGHT_TO_LEFT,
  );
  const [graphHorizontalSpacing, setGraphHorizontalSpacing] =
    useState<number>(0);

  useCalculateFactoryLine({
    selectedFactoryLineData,
    setFactoryLine,
    setFactoryLineData,
  });

  const visJsRef = useRef<HTMLDivElement>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);

  const { nodes, edges } = useGetDiagramData({
    factoryLine,
    graphHorizontalSpacing,
    setGraphHorizontalSpacing,
  });
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
    graphHorizontalSpacing,
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
      <GraphHandlerButtons
        graphSize={graphSize}
        setGraphSize={setGraphSize}
        graphDirection={graphDirection}
        setGraphDirection={setGraphDirection}
      />
      {factoryLineData && <GraphSummary />}
    </div>
  );
};
