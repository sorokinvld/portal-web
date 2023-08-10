import React from "react";
import {VercelLogo} from "@components";
import {Link, Text} from "@nextui-org/react";
import {darkTheme, lightTheme} from "@theme/shared";

const VercelCallout: React.FC<unknown> = () => {
  return (
    <Link
      css={{
        mt: "$6",
        d: "flex",
        jc: "flex-end",
        ai: "center",
        "& svg": {
          [`.${darkTheme} &`]: {
            color: "$white",
          },
          [`.${lightTheme} &`]: {
            color: "$black",
          },
        },
      }}
      href="https://prtl.cc"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Text b css={{my: 0, mr: "$4"}}>
        Power
      </Text>
      <VercelLogo height={18} />
    </Link>
  );
};

export default VercelCallout;
