import { Paragraph } from "../atoms";

export default function footer(imgSource, copyright){
    return (
        <section>
            <img src={imgSource} alt=""/>
            <Paragraph text={copyright}/>
        </section>
    )
}