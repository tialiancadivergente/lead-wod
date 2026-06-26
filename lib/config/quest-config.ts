export const DEFAULT_QUEST_FORM_VERSION_ID =
  "e77bcb6c-f73b-4681-ad26-c7b982f73293";

const QUEST_WHATSAPP_URL_BY_TEMPERATURE = {
  f: "https://sendflow.click/i/wod-cap-2026",
  org: "https://sendflow.click/i/wod-cap-2026",
  m: "https://sendflow.click/i/wod-cap-2026",
  q: "https://sendflow.click/i/wod-cap-2026",
} as const;

type QuestTesteTemperatureKey = keyof typeof QUEST_WHATSAPP_URL_BY_TEMPERATURE;

export function resolveQuestTesteWhatsappUrl(temperature: string): string {
  const normalizedTemperature = temperature.toLowerCase().trim();
  const validKeys = Object.keys(
    QUEST_WHATSAPP_URL_BY_TEMPERATURE
  ) as QuestTesteTemperatureKey[];

  const resolvedKey = validKeys.includes(normalizedTemperature as QuestTesteTemperatureKey)
    ? (normalizedTemperature as QuestTesteTemperatureKey)
    : "f";

  return QUEST_WHATSAPP_URL_BY_TEMPERATURE[resolvedKey];
}
