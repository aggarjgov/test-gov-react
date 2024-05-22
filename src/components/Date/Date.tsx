import { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input/Input";
import FormGroup from "../FormGroup/FormGroup";
import Label from "../Label/Label";
import type { Labels, Props } from "./types";
import type { DateDigit } from "../../types";

export const labels: Labels = {
  dd: "Day",
  mm: "Month",
  yyyy: "Year"
} as const;

export default function Date({
  format = "dd/mm/yyyy",
  hideLabels,
  anchorId,
  value,
  seperator = "/",
  onChange,
  error
}: Props) {
  const id = "datefield-";

  const arrFormat = format.toLowerCase().split("/") as DateDigit[];
  const [date, setDate] = useState<string[]>(String(value || "").split(seperator));

  useEffect(() => {
    if (!value) setDate([]);
  }, [value]);

  const setValue = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value || "";
    const newDate: string[] = arrFormat.map((_digit, i) => date[i] || "");
    newDate[index] = value.trim();
    setDate(newDate);
    if (typeof onChange === "function") onChange(newDate.join(seperator));
  };

  const renderInput = (digit: DateDigit, index: number) => {
    const idInput = anchorId && index === 0 ? anchorId : `${id}${digit}`;
    const label = labels[digit];
    return (
      <div className="govuk-date-input__item" key={idInput}>
        <FormGroup>
          {!hideLabels && (
            <Label className="govuk-label govuk-date-input__label" htmlFor={idInput}>
              {label}
            </Label>
          )}
          <Input
            characters={digit.length > 2 ? 4 : 2}
            error={!!error}
            id={idInput}
            aria-label={hideLabels ? label : undefined}
            name={digit}
            type="text"
            inputMode="numeric"
            value={date[index] || ""}
            onChange={(e) => setValue(index, e)}
          />
        </FormGroup>
      </div>
    );
  };

  return <div className="govuk-date-input">{arrFormat.map(renderInput)}</div>;
}
