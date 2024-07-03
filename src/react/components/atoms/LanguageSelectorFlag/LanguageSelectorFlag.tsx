import { ImageHelper } from "@nexus/src/nexusExporter";
import type React from "react";

type PropsTypes = {
  country: string;
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
