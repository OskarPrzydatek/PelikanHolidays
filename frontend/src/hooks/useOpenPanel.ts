import React from "react";

export default function useOpenPanel(mobileWidth: number) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [openPanel, setOpenPanel] = React.useState<boolean>(true);

  const handleisMobile = React.useCallback(() => {
    window.innerWidth < mobileWidth ? setIsMobile(true) : setIsMobile(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleisMobile);

    isMobile ? setOpenPanel(false) : setOpenPanel(true);
  }, [isMobile]);

  return [openPanel, setOpenPanel] as const;
}
