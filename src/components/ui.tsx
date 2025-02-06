
import React from "react";
import appState from "@builder.io/app-context";
import {
  AdditionalInfo,
  CompactView,
  CompactViewProps,
  Login,
  Modal,
  type selectionMode,
} from "@bynder/compact-view";
import { useState, useMemo, useEffect } from "react";
import { Button, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { IconCloudUpload } from "@tabler/icons-react";
import { partial } from "filesize";

import type {
  BuilderPluginProps,
  BynderAsset,
  BynderAssetFile,
  BynderCompactViewProps,
  RenderSinglePreviewProps,
} from "./types";

import {
  ASSET_FIELD_SELECTION,
  AssetTypes,
  BYNDER_LANGUAGE,
  BYNDER_URL,
  SHOW_ASSET_FIELD_SELECTION,
  SupportedLanguage,
  SupportedLanguages,
  fastClone,
  pluginId,
} from "./utils";

const filesize = partial({ standard: "jedec" });

export const AssetSelector = () => {
  return <div>AssetSelector</div>;
};

export default AssetSelector;
