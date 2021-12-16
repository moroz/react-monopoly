import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "app-modal": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
