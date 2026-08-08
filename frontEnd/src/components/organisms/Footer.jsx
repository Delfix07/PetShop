import { Paragraph } from "../atoms/Index.js";

export default function footer(imgSource, copyright){
    return (
        <section>
            <img src={imgSource} alt=""/>
            <Paragraph text={copyright}/>
        </section>
    )
}