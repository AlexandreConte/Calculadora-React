import styled from "styled-components"

const TelaValue = styled.input`
  width: 230px;
  height: 60px;
  margin: 10px;
  padding: 10px;
  background-color: inherit;
  border: none;
  outline: 0;
  color: #fff;
  text-align: end;
  border-radius: 20px;
  font-size: ${(props) => props.fontSize};
  background-color: #07002c;
`

function Tela({ ans, fontSize }) {

  return (
    <TelaValue fontSize={fontSize} type="text" value={`${ans}`} readOnly />
  )
}

export default Tela
