import { useRef } from "react";

import uniqId from "uniqid";

export const useUniqueIds = counter => {
  const ids = useRef([...new Array(counter)].map(() => uniqId()));

  return ids.current;
};

export default useUniqueIds;
