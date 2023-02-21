import styled from "styled-components"

const ButtonContainer = styled.div`
  width: 52px;
  height: 52px;
  margin: 3px;
`

const ButtonStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  border: none;
  background: ${(props) => props.isOperation ? "#ff9047" : props.isReset ? "#ff5e00" : "white"};
  font-weight: 900;
  transition: background 0.2s ease-in-out;
  :hover {
    background-color: #a7b0ff;
  }
  :hover {
    background-color: ${(props) => props.isOperation ? "#ff6161" : props.isReset ? "#ff2f2f" : "#a7b0ff"}
  }
`

function Button({ value, handleClick, isOperation, isReset }) {
  return (
    <ButtonContainer>
      <ButtonStyled isOperation={isOperation} isReset={isReset} type="text" value={`${value}`} readOnly onClick={e => handleClick(e.target.value)} />
    </ButtonContainer>
  )
}

export default Button
