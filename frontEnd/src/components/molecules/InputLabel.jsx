import { Input, Label } from "../atoms";

export default function InputLabel({
    label,
    inputId,
    className = "",
    error = "",
    ...inputProps
}) {
    return (
        <div className={`inputGroup ${className}`}>
            <Label
                text={label}
                inputId={inputId}
            />
            <Input
                id={inputId}
                {...inputProps}
            />
            {error && (
                <p className="inputError">{error}</p>
            )}
        </div>
    )
}