import Heading from "../atoms";
import InputLabel from "../molecules";

export default function Form({
    formTitle= "form",
    inputs= [],
    className= "",
    formSubmit=()=>{},
}) {
    return (
        <form className={className}>
            <Heading size="h2" text={formTitle} onSubmit={onSubmit}/>
            {inputs.length ? inputs.map((input)=>(
                <inputLabel className={input.className}
                    label={input.label}
                    inputId={input.inputId}
                    {...input}/>
            ))
        :null}
        <button type="submit">{formTitle}</button>
        </form>
    );
}

