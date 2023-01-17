import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

export default function (Node: ReactNode) {
  return (targetDiv: Element) => {
    const root = createRoot(targetDiv);
    return {
      render: (props: any) => {
        // @ts-ignore
        root.render(<Node {...props} />);
      },
      destroy: () => {
        root.unmount();
      },
    };
  };
}
