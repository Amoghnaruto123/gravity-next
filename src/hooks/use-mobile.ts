import { useMediaQuery } from "usehooks-ts";

/**
 * Hook to determine if the current viewport is mobile size
 * @returns boolean indicating if the viewport is mobile size
 */
export function useIsMobile(): boolean {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile;
} 