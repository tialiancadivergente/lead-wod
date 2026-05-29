export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120246,
  'm': 120246,
  'f': 120246,
  't': 120246,
  'o': 120246,
  'org': 120246
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[WOD][2025][TRAFEGO]',
  'm': '[WOD][2025][TRAFEGO]',
  'f': '[WOD][2025][TRAFEGO]',
  't': '[WOD][2025][TRAFEGO]',
  'o': '[WOD][2025][ORGANICO]',
  'org': '[WOD][2025][ORGANICO]'
};

export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

export const getTagByTemperatureOro = (temperature: string): string | null => {
  return TEMPERATURE_TAG_MAP_ORO[temperature] || null;
};

export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "org";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "m" ||
    rawValue === "t" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};
