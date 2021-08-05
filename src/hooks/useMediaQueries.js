import { useState, useEffect } from 'react';

// Usage:
// var desktop = useMediaQuery("(min-width: 777px)");
// var phone = useMediaQuery("(min-width: 440px)");
// desktop and phone variables will be true/false when matching the query

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;