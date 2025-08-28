import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

const GamePlay = () => {
    return(
        <MainContainer>

            <div className="top-section">
               <TotalScore/>
               <NumberSelector/>
            </div>

        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.main`
      padding-top: 70px;
      
     .top-section{
        display: flex;
        align-items:end;
        justify-content: space-around;
     }
    
`;