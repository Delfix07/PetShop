import {Heading} from "../atoms/Index.js";
import {InputLabel} from "../molecules/Index.js";

export default function Form({
    formTitle= "form",
    buttonText="Send",
    inputs= [],
    className= "",
    formSubmit=()=>{},
}) {
    return (
        <form className={className} onSubmit={formSubmit}>
            <Heading size="h2" text={formTitle}/>
            {inputs.length ? inputs.map((input)=>(
                <InputLabel
                    key={input.inputId}
                    {...input}
                />
            ))
        :null}
        <button type="submit">{buttonText}</button>
        </form>
    );
}

