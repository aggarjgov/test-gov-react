import type { DateDigit } from "../../types";

export type Labels = Record<DateDigit, string>;

export type Props = {
  anchorId?: string;
  onChange?: (value: string) => void;
  format?: `${DateDigit}/${DateDigit}/${DateDigit}` | `${DateDigit}/${DateDigit}`;
  hideLabels?: boolean;
  value?: string;
  seperator?: string;
  error?: boolean;
};
