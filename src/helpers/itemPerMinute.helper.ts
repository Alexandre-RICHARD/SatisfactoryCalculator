import { roundNumber } from "../../nexus/src/nexusExporter";

type Args = {
  cycleDuration: number;
  cycleItemCount: number;
};

export const itemPerMinute = ({ cycleDuration, cycleItemCount }: Args) => {
  return roundNumber((60 / cycleDuration) * cycleItemCount, 2);
};
