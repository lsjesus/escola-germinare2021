import styled from "styled-components"

export const Title = styled.div `

`

export const Header = ({ className, children }) => (
    <div id="Header">
    <p className="track-text"> <a  className="track-home">Home</a>/ {children}</p>
    <h1></h1>
    </div>
  )