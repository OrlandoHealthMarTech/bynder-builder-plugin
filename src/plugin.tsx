import React from "react";
import { Builder } from "@builder.io/react";
import AssetSelector from "@/components/ui";

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
  icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLjEgMC4xIDk1OS44MDAwMDAwMDAwMDAxIDcyMi43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NTkuOSAyMjguM2MwIDU3LjgtMjEuOCAxMTEuNy01Ni40IDE1MWwtMjg1IDI4NS4zYy0zNS40IDM2LjEtODQgNTguMi0xMzguMSA1OC4yaC0uMWMtNTQuMSAwLTEwMy41LTIyLjMtMTM4LjktNTguNGwtMTkuOC0xOS41IDk2LjctOTYuNSAyMC41IDIwLjRjMTAuNCAxMC45IDI0LjggMTcuNyA0MS4xIDE3LjggMTYuMi0uMSAzMS40LTYuMiA0MS43LTE3LjJsMjczLjUtMjczLjFjMTUuMS0xNyAyMy0zNy43IDIzLTYwLjkuMi01MS40LTQwLjgtOTIuNy05Mi4yLTkyLjktMjMuNSAwLTQ0IDgtNjEuMiAyMy4yTDI1My4yIDU3Ni42IDU2LjMgMzc5LjFDMjEuOCAzMzkuOC4xIDI4NiAuMSAyMjguMy4xIDEwMi4yIDEwMi43LjIgMjI4LjkuMiAyODkuNC4yIDM0NC44IDIzIDM4NS41IDYxLjRsMjggMjgtOTcuMSA5N3MtMTUuNi0xNi0yMS0yMC45Yy0xNy4xLTE1LjEtMzcuNi0yMi45LTYwLjktMjMtNTEuNCAwLTkyLjcgNDAuOS05Mi44IDkyLjIgMCAyMy40IDcuOSA0NC4zIDIzLjEgNjEuNWw4Ny44IDg3LjZMNTU5LjMgNzcuOUM2MDEuMiAzMC4zIDY2Mi43LjEgNzMxLjIuMWMxMjYuMyAwIDIyOC43IDEwMi4xIDIyOC43IDIyOC4yeiIvPjwvc3ZnPg==',
  component: AssetSelector,
});
