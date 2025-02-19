import { useEffect } from "react";
export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return null;
}
