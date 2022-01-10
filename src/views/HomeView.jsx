import { FormContainer } from "./views.styled";
import image from '../img/Hand holding mobile phone with chat messages on screen.jpg';
import { Image} from "./views.styled";

export default function HomeView() {

    return(
        <FormContainer>
            <h1>Keep your contacts safe and organised!</h1>

               <Image src={image} alt="hand holding a mobile phone"/> 

            
        </FormContainer>
    )

}