import { FieldErrors, FieldValues } from "react-hook-form";

export type GenericFormProps<T extends FieldValues> = {
  onSubmit?: (formValues: T) => void;
  onSubmitErrors?: FieldErrors<T>;
  isSubmitting?: boolean;
} & Pick<React.ComponentPropsWithoutRef<"form">, "className">;
