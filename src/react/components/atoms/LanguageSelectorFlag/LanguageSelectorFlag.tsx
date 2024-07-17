import { type CountryEnum, ImageHelper } from "@nexus/src/nexusExporter";
import type React from "react";

type PropsTypes = {
  country: CountryEnum;
};

export const LanguageSelectorFlag = ({
  country,
}: PropsTypes): React.ReactElement => {
  return (
    <img
      alt={`Country flag of ${country}`}
      src={ImageHelper.dynamicImageImporter(`languagesFlags/${country}.png`)}
    />
  );
};
