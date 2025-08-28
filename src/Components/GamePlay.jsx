import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {

    const[score, setScore] = useState(0);

    const [selectedNumber, setSelectedNumber] = useState();

    const [currentDice, setCurrentDice] = useState(1);

    const [error, setError] = useState("");

    const[showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min))
        // To aviod the decimal values we are wrapping the random function inside Math.floor()
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rolldice = () => {
        // If user doesn't make any selection and directly rolls dice it will give below error and does not shows
        // any increment in the count
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        // comparing both selected and random number and adding to total score
        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }
        else{
            setScore((prev) => prev - 2);
        }

        // To unset after a comparison done betweeb the selected and random or clear the seleted number
        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0)
    }

    const toggleRules = () => {
        setShowRules((prev) => !prev)
    }

    return(
        <MainContainer>
            <div className="top-section">
                {/* passing score as prop to TotalScore */}

               <TotalScore score={score} />

               <NumberSelector
                 error={error}
                 setError={setError}
                 selectedNumber={selectedNumber} 
                 setSelectedNumber={setSelectedNumber}
                />

            </div>

            <RollDice currentDice={currentDice} rolldice={rolldice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>

                <Button onClick={toggleRules}>{showRules ? "Hide" : "Show"} Rules</Button>
            </div>

            {showRules && <Rules/>}

        </MainContainer>
    )
}

export default GamePlay;


const MainContainer = styled.main`
      padding-top: 20px;
      
     .top-section{
        display: flex;
        align-items:end;
        justify-content: space-around;
     }

     .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
     }
    
`;