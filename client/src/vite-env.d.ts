/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { ImportMetaEnv } from "vite/types/importMeta";
import React from "react";

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "l-line-spinner": React.DetailedHTMLProps<any, HTMLElement>;
        }
    }
}
