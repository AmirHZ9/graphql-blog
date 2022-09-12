import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center"}}>
      <TailSpin
        height="100"
        width="100"
        radius="9"
        color="grey"

   
      />
    </div>
  );
}
