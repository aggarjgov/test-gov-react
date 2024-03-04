import { ComponentPropsWithRef, forwardRef } from "react";

const FileUpload = forwardRef<
  HTMLInputElement,
  { label?: string } & ComponentPropsWithRef<"input">
>(({ label, ...props }, ref) => (
  <div className="govuk-form-group">
    {label && (
      <label className="govuk-label" htmlFor="file-upload-1">
        {label}
      </label>
    )}
    <input {...props} className="govuk-file-upload" type="file" ref={ref} />
  </div>
));

FileUpload.displayName = "FileUpload";

export default FileUpload;
