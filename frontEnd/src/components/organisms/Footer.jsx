import { Paragraph } from "../atoms/Index.js";
import logo from "../../assets/logo.png";
import "./Footer.css";

export default function Footer({ imgSource, copyright }) {
    return (
        <footer className="footer">
            <img src={logo} alt="PetShop" className="footerLogo" />
            <Paragraph
                text="© 2026 PetShop. All rights reserved."
                className="footerCopyright"
            />
        </footer>
    )
}