import { type CountryEnum, ImageHelper } from "@nexus/src/nexusExporter";
import React from "react";

type PropsType = {
  country: CountryEnum;
};

export const LanguageSelectorFlag = ({
  country,
}: PropsType): React.JSX.Element => {
  return (
    <img
      alt={`Country flag of ${country}`}
      src={ImageHelper.dynamicImageImporter(`languagesFlags/${country}.png`)}
    />
  );
};
