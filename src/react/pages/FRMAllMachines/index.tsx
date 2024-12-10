import { roundNumber } from "@nexus/nexusExporter";
import React from "react";

import { EndpointEnum } from "../../../enums/endpoint.enum";
import type { ExtractorDto } from "../../../types/satisfactory/apis/dataTransferObject/extractorDto.type";
import type { FactoryDto } from "../../../types/satisfactory/apis/dataTransferObject/factoryDto.type";
import type { GeneratorDto } from "../../../types/satisfactory/apis/dataTransferObject/generatorsDto.type";
import type { ExtractorFm } from "../../../types/satisfactory/apis/frontModel/extractorFm.type";
import type { FactoryFm } from "../../../types/satisfactory/apis/frontModel/factoryFm.type";
import type { GeneratorFm } from "../../../types/satisfactory/apis/frontModel/generatorsFm.type";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";

export const FRMAllMachines = (): React.JSX.Element => {
  const { data: extractors } = useAutoRefetch<ExtractorDto[], ExtractorFm[]>(
    EndpointEnum.EXTRACTOR,
  );
  const { data: factories } = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.FACTORY,
  );
  const { data: generators } = useAutoRefetch<GeneratorDto[], GeneratorFm[]>(
    EndpointEnum.GENERATOR,
  );

  const allData = [
    ...(extractors ?? []),
    ...(factories ?? []),
    ...(generators ?? []),
  ];

  return (
    <div className="full-h overflow-hidden">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr>
            <th>Name</th>
            <th>Overclocking</th>
            <th>Efficiency</th>
            <th>Power Consumption</th>
            <th>Power Production</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {allData.map((oneMachine) => {
            if ("powerConsumption" in oneMachine) {
              return (
                <tr key={oneMachine.id}>
                  <td className="text-center">{oneMachine.name}</td>
                  <td className="text-center">
                    {roundNumber(oneMachine.overclocking, 2)} %
                  </td>
                  <td className="text-center">
                    {roundNumber(oneMachine.efficiency, 2)} %
                  </td>
                  <td className="text-center">
                    {roundNumber(oneMachine.powerConsumption, 2)} Mw
                  </td>
                  <td className="text-center">N/A</td>
                  <td className="text-center">{`${roundNumber(oneMachine.location.x / 100, 2)}, ${roundNumber(oneMachine.location.y / 100, 2)}`}</td>
                </tr>
              );
            }

            if ("powerProduction" in oneMachine) {
              return (
                <tr key={oneMachine.id}>
                  <td className="text-center">{oneMachine.name}</td>
                  <td className="text-center">
                    {roundNumber(oneMachine.overclocking, 2)} %
                  </td>
                  <td className="text-center">
                    {oneMachine.isAtFullSpeed ? "100 %" : "0 %"}
                  </td>
                  <td className="text-center">N/A</td>
                  <td className="text-center">
                    {roundNumber(oneMachine.powerProduction, 2)} Mw
                  </td>
                  <td className="text-center">{`${roundNumber(oneMachine.location.x / 100, 2)}, ${roundNumber(oneMachine.location.y / 100, 2)}`}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};
