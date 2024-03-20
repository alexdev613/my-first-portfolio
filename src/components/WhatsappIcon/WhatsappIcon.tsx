import { Icon } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
    return (
        <Icon href="https://api.whatsapp.com/send?phone=5587981157269&text=Gostaria%20de%20mais%20informações%20sobre%20seu%20trabalho%20de%20programação%20web" target="_blank">
            <FaWhatsapp />
        </Icon>
    )
}

export default WhatsappIcon;