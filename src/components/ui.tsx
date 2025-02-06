import React from "react";

interface AssetSelectorProps {
    value: string;
    onChange: (value: string) => void;
}

export const AssetSelector = (props: AssetSelectorProps) => {
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
};

export default AssetSelector;
