import { FormContainer, Image } from "./Views.styled";
import image from '../img/Hand holding mobile phone with chat messages on screen.jpg';

export default function HomeView() {

    return(
        <FormContainer>
            <h1>Keep your contacts safe and organised!</h1>

               <Image src={image} alt="hand holding a mobile phone"/> 

            
        </FormContainer>
    )

}