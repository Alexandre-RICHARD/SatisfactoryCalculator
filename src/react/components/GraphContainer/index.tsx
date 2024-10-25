import React, { useEffect, useMemo, useRef } from "react";
import { type Data, Network, type Options } from "vis-network";
import { useShallow } from "zustand/react/shallow";

import { stringRemoveEndPxHelper } from "../../../helpers/stringRemoveEndPx.helper";
import { useCombinedStore } from "../../../store/combined.store";
import { theme } from "../../../styles/theme";
import { useCalculateFactoryLine } from "../../hooks/useCalculateFactoryLine";
import { useGetDiagramData } from "../../hooks/useGetDiagramData";
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

  useCalculateFactoryLine({ selectedFactoryLineData, setFactoryLine });

  const { nodes, edges } = useGetDiagramData({ factoryLine });

  const data: Data = useMemo(
    () => ({
      nodes,
      edges,
    }),
    [nodes, edges],
  );

  const options: Options = useMemo(
    () => ({
      autoResize: true,
      height: "500px",
      width: "100%",
      layout: {
        hierarchical: {
          direction: "LR",
          sortMethod: "directed",
          levelSeparation: 700,
        },
      },
      nodes: {
        color: theme.colorPrimaryHue,
        shape: "box",
        borderWidth: 0,
        chosen: false,
        font: {
          color: theme.colorBlack,
          size: stringRemoveEndPxHelper(theme.sizeL),
        },
        margin: {
          bottom: stringRemoveEndPxHelper(theme.spaceXS),
          left: stringRemoveEndPxHelper(theme.spaceM),
          right: stringRemoveEndPxHelper(theme.spaceM),
          top: stringRemoveEndPxHelper(theme.spaceXS),
        },
        physics: false,
      },
      edges: {
        arrows: {
          to: {
            enabled: true,
          },
        },
        chosen: false,
        color: theme.colorNeutralLight,
        font: {
          align: "horizontal",
          strokeWidth: 0,
          color: theme.colorPrimaryContent,
          size: stringRemoveEndPxHelper(theme.spaceXL),
        },
        shadow: false,
        smooth: false,
        labelHighlightBold: false,
      },
      interaction: {
        tooltipDelay: 0,
      },
      physics: false,
    }),
    [],
  );

  const visJsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (visJsRef.current) {
      // eslint-disable-next-line no-new
      new Network(visJsRef.current, data, options);
    }
  }, [visJsRef, nodes, edges, data, options]);

  if (!factoryLine) return null;

  return (
    <div
      className={styles.graph_container}
      ref={visJsRef}
    />
  );
};
