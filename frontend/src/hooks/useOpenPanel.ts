import React from "react";

export default function useOpenPanel(mobileWidth: number) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [openPanel, setOpenPanel] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Check width after render
    window.innerWidth < mobileWidth ? setIsMobile(true) : setIsMobile(false);

    // Set default value by render
    isMobile ? setOpenPanel(false) : setOpenPanel(true);
  }, [isMobile]);

  return [openPanel, setOpenPanel] as const;
}
