import styled from "styled-components";

const Rules = () => {
    return(
        <RulesContainer>
            <h2>How To Play Dice Game</h2>
            <div className="text">
                <p>Select Any Number</p>
                <p>Click on Dice Image</p>
                <p>After clicking on dice if selected number is equal to dice number 
                    you will get same points as dice {" "}
                </p>
                <p>If you guess wrong then 2 points will be deducted</p>
                
            </div>
        </RulesContainer>
    )
}

export default Rules;

const RulesContainer = styled.div`
      max-width: 800px;
      margin: 0 auto;
      margin-top: 16px;
      background-color: #fbf1f1;
      padding: 10px;
      border-radius: 10px;
      h2{
        font-size: 20px;
      }

      .text{
        margin-top: 10px;
      }
`;