import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

function Portal({portalName = "root", children}){
  const portal = document.getElementById("portal-" + portalName);
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    portal.appendChild(el);
    return () => portal.removeChild(el);
  }, [el, portal]);

  return createPortal(children, el)
}

export default Portal;