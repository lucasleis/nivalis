import { useTransform, MotionValue } from "framer-motion";
import { useSmoothScroll } from "./ScrollProvider";

/**
 * Hook universal para aplicar parallax suave.
 *
 * @param options.range - Rango del scroll que afecta el movimiento
 * @param options.offset - Intensidad del desplazamiento (px)
 * @param options.axis - "y" (default) | "x"
 * @param options.from - Valor inicial (normalmente 0)
 * @param options.to - Valor final (si se desea animación custom)
 *
 * @returns MotionValue<number>
 *
 * Ejemplo:
 *  const y = useParallax({ range: 600, offset: 40 })
 *  <motion.div style={{ y }} />
 */
export function useParallax({
  range = 400,
  offset = 20,
  //axis = "y",
  from,
  to,
}: {
  range?: number;
  offset?: number;
  axis?: "y" | "x";
  from?: number;
  to?: number;
} = {}) {
  const { smoothScrollY } = useSmoothScroll();

  const input = [0, range];
  const output = [from ?? 0, to ?? offset];

  const value: MotionValue<number> = useTransform(smoothScrollY, input, output);
  return value;
}
