declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
  }
declare module "*.svg" {
    import React from "react";

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
  declare module "*.png"
  declare module "*.jpeg"
  declare module "*.jpg"

declare const __IS_DEV__: boolean;
declare const __STORYBOOK__: boolean;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
