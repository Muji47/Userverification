import { Typography } from "antd";
import React from "react";

function Showimgdata({ src, businessName, imageSize }) {
  const { Text } = Typography;

  return (
    <div className="card-style" style={{cursor: "pointer",padding:"5px 5px"}} >
      <img src={src} alt="business images" style={imageSize} />
      <Text style={{ display: "block", textAlign: "center",}}>
        {businessName}
      </Text>
    </div>
  );
}

export default Showimgdata;
