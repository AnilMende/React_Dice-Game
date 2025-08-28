import styled from "styled-components";

const StartGame = () => {
    return(
        <Container>

            <div>
                <img src="/images/dices.png" alt="dices-Image" />
            </div>

            <div className="content">
                <h1>DICE GAME</h1>
                <Button>Play Now</Button>
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

const Button = styled.button`
   border:none;
   min-width: 220px;
   background-color: black;
   color: white;
   padding: 10px 18px;
   border-radius: 5px;
   font-size: 16px;
   border: 1px solid transparent;
   cursor: pointer;
   transition: 0.4s background ease-in;

   /* for hover */
   &:hover{
     background-color: white;
     border: 1px solid black;
     color: black;
     transition: 0.3s background ease-in;
   }
   `;