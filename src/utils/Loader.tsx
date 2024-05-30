import React from "react";
import { LoaderBox } from "../styles/LoaderStyles";
import { PiFlagBannerFoldFill } from "react-icons/pi";

const Loader = () => {
  return (
    <LoaderBox>
      <PiFlagBannerFoldFill />
      <p>Loader...</p>
    </LoaderBox>
  );
};

export default Loader;
