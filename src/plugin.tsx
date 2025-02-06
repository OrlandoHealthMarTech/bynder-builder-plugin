import React from "react";
import { Builder } from "@builder.io/react";

interface PluginExampleProps {
  value: string;
  onChange: (value: string) => void;
}

function PluginExample(props: PluginExampleProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <label style={{ gridColumn: "1 / 2" }}>First Input:</label>
      <input
        style={{ gridColumn: "2 / 3" }}
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <label style={{ gridColumn: "1 / 2" }}>Second Input:</label>
      <input
        style={{ gridColumn: "2 / 3" }}
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}

Builder.registerEditor({
  name: "DAMAssetSelector",
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEwSbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf4Sbf5iEzacAAAAEXRSTlMATmpgJkKy/+WQDflzyzOBF9ldCioAAACgSURBVHgBtdFRDoQgDATQImgLK7L3P+2mk1kb02/nRyYvoTXImylbbdFa3fa7HOox8m6oHWV8lCleT2XMm+k/k8YcIhWHOcPQPE0mbyhhTeTy7xKfyN1oXz923Ot1JJPqiH1qMvxel84pT1uKaUOhT0Mx3O5ZybTFMUy2sNBsHB9Ww0KThbqNKxsy8D69JyMbIBmXDMspIONimdd5yfv5AWOTCg2BQ0hHAAAAAElFTkSuQmCC",
  component: PluginExample,
});



