import * as React from "react"

import { cn } from "@/lib/utils"
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form/dist/types"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, ...props }, ref) => {
    const id = React.useId()
    return (
      <fieldset className={className}>
        {label && <label htmlFor={id} className={`font-medium text-sm block mb-2 cursor-pointer ${error && "text-red-600"}`}>{label}</label>}
        <input
          type={type}
          id={id}
          className={cn(`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error && `focus-visible:ring-pink-500`}`)}
          ref={ref}
          {...props}
        />
        {helperText && <p className="text-sm text-muted-foreground mt-2">{helperText}</p>}
        {error && <span className="text-red-600 block mt-2 text-sm">{`${error}`}</span>}
      </fieldset>
    )
  }
)

Input.displayName = "Input"

export { Input }
