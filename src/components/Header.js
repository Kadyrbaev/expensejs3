import styled from "styled-components"

const Header = (props) => {
  return (
    <HeaderStyle>
      <h1>LOGO</h1>
      <Button onClick={props.onShowFormHandler}>ADD PRODUCTS</Button>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
  border: 2px solid;
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  padding: 8px 50px;
  background-color: bisque;
`
const Button = styled.button`
  padding: 6px 20px;
  border-radius: 6px;
`
