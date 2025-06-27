import { useInView } from "framer-motion";
import { useRef } from "react";

export default function useSectionInView(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    ...options
  });

  return { ref, isInView };
}

export function useElementInView(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    ...options
  });

  return { ref, isInView };
} 