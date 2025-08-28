import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = ({toggle}) => {
    return(
        <Container>

            <div>
                <img src="/images/dices.png" alt="dices-Image" />
            </div>

            <div className="content">
                <h1>DICE GAME</h1>
                {/* passing toggle to the button */}
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    justify-content: center;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
    /* font-weight: 700; */
    
  }
`;

