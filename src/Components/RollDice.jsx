import { useState } from "react"
import styled from "styled-components"


const RollDice = ({rolldice, currentDice}) => {

    // const [currentDice, setCurrentDice] = useState(1);

    return(
        <DiceContainer>
            <div className="dice" onClick={rolldice}>

                <img src={`/images/dice-${currentDice}.png`} alt="" />

            </div>
            <p>Click On Dice TO Roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-top: 25px;

       .dice{
        cursor: pointer;
       }
`;