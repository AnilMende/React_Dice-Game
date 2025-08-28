import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arr = [1,2,3,4,5,6];

    const numberselectorHandler = (value) => {
        setSelectedNumber(value)
        setError("");
    }

    // To selelct a particular number we are using state
    // const [selectedNumber, setSelectedNumber] = useState();
    // console.log(selectedNumber);

    return(
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">

               {arr.map((value,index) => (
                    <Box 
                       isselected = {value === selectedNumber}
                       key={index} 
                       onClick={() => numberselectorHandler(value)}
                    >
                    {value}
                    </Box>
                ))}
            </div>

            <p>Selected Number</p>

        </NumberSelectorContainer>

        //    <Box>1</Box>
        //     <Box>2</Box>
        //     <Box>3</Box>
        //     <Box>4</Box>
        //     <Box>5</Box>
        //     <Box>6</Box>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

     display: flex;
     flex-direction: column;
     align-items: end;
     
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
    }
`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;

    /* changing the number background and color when selected */
    background-color: ${(props) => (props.isselected ? "black" : "white")};
    color: ${(props) => (props.isselected ? "white" : "black")};
`;