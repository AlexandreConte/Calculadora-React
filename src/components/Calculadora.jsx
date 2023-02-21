import { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "./Button"
import Tela from "./Tela"

const CalculadoraContainer = styled.div`
  width: 250px;
  height: 380px;
  background-color: #212153;
  border-radius: 20px;
  color: #fff;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Calculadora() {
  const [display, setDisplay] = useState("0")
  const [fontSize, setFontSize] = useState("3rem")
  const [hasBeenAlerted, setHasBeenAlerted] = useState(false)

  function handleClick(value) {

    const isOperation = (value === "C" || value === "=" || value === "*" || value === "+" || value === "-" || value === "/" || value === "(" || value === ")" || value === "+/-")
    const isNotOperation = !isOperation

    if (value === "C") {
      setDisplay("0")
      setHasBeenAlerted(false)
      return
    }

    if (display === "0" && isNotOperation) {
      setDisplay(value)
      return
    }

    if (display.length > 10 && !hasBeenAlerted && isNotOperation) {
      alert("Aviso: Você só pode inserir mais dois caracteres")
      setHasBeenAlerted(true)
    }

    if (display.length > 13) {
      alert("Número máximo de caracteres atingido.\nA Calculadora foi resetada.")
      setDisplay("0")
      setHasBeenAlerted(false)
      return
    }

    if (value === "+/-") {
      setDisplay(eval(`${-display}`))
    } else if (value !== "=" && display !== "0/0") {
      setDisplay(`${display}${value}`)
    } else if (display === "0/0") {
      alert("Formato Inválido")
      setDisplay("0")
    } else {
      if (display[display.length - 1] === "0" && display[display.length -2] === "/") {
        alert("Divisão por zero não é permitida!")
        setDisplay(0)
        setHasBeenAlerted(false)
        return
      }
      setDisplay(eval(`${display}`))
    }
  }

  useEffect(() => {

    switch (display.length) {

      case 8:
        setFontSize("2.8rem")
        break

      case 9:
        setFontSize("2.6rem")
        break

      case 10:
        setFontSize("2.3rem")
        break

      case 11:
        setFontSize("2rem")
        break

      case 12:
        setFontSize("1.8rem")
        break

      case 13:
        setFontSize("1.7rem")
        break

      case 14:
        setFontSize("1.6rem")
        break

      case 15:
        setFontSize("1.4rem")
        break

      default:
        setFontSize("3rem")
        break;
    }
  }, [display])

  return (
    <CalculadoraContainer>
      <Tela ans={display} fontSize={fontSize} />
      <ButtonsContainer>
        <Button isReset value={"C"} handleClick={handleClick} />
        <Button isOperation value={"("} handleClick={handleClick} />
        <Button isOperation value={")"} handleClick={handleClick} />
        <Button isOperation value={"/"} handleClick={handleClick} />
      </ButtonsContainer>
      <ButtonsContainer>
        <Button value={"7"} handleClick={handleClick} />
        <Button value={"8"} handleClick={handleClick} />
        <Button value={"9"} handleClick={handleClick} />
        <Button isOperation value={"*"} handleClick={handleClick} />
      </ButtonsContainer>
      <ButtonsContainer>
        <Button value={"4"} handleClick={handleClick} />
        <Button value={"5"} handleClick={handleClick} />
        <Button value={"6"} handleClick={handleClick} />
        <Button isOperation value={"-"} handleClick={handleClick} />
      </ButtonsContainer>
      <ButtonsContainer>
        <Button value={"1"} handleClick={handleClick} />
        <Button value={"2"} handleClick={handleClick} />
        <Button value={"3"} handleClick={handleClick} />
        <Button isOperation value={"+"} handleClick={handleClick} />
      </ButtonsContainer>
      <ButtonsContainer>
        <Button isOperation value={"+/-"} handleClick={handleClick} />
        <Button value={"0"} handleClick={handleClick} />
        <Button value={"."} handleClick={handleClick} />
        <Button isOperation value={"="} handleClick={handleClick} />
      </ButtonsContainer>
    </CalculadoraContainer>
  )
}

export default Calculadora
