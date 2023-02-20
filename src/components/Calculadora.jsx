import styled from "styled-components"
import Button from "./Button"

const CalculadoraContainer = styled.div`
  width: 250px;
  height: 320px;
  background-color: #000;
`

function Calculadora() {
  return (
    <CalculadoraContainer>
      Calculadora
      <Button value={3} />
    </CalculadoraContainer>
  )
}

export default Calculadora
