import React from "react";
import appState from '@builder.io/app-context';
import {
  AdditionalInfo,
  CompactView,
  CompactViewProps,
  Login,
  Modal,
  type selectionMode,
} from '@bynder/compact-view';
import { useState, useMemo, useEffect } from 'react';
import { Button, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { IconCloudUpload } from '@tabler/icons-react';
import { partial } from 'filesize';

import type {
  BuilderPluginProps,
  BynderAsset,
  BynderAssetFile,
  BynderCompactViewProps,
  RenderSinglePreviewProps,
} from './types';

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
} from './utils';

const filesize = partial({ standard: 'jedec' });

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
