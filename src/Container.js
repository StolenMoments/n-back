import styled from 'styled-components'
export default styled.div`
  display: grid;
  justify-content: center;
  margin-top: 12rem;
  grid-template-rows: 150px 150px 150px 150px;
  grid-template-columns: 115px 115px 115px 115px;
  grid-gap: 5px;
 
  div {
    border-style: solid;
    border-color: darkblue;
    border-width: 1px;
  }
  
  #id${props => props.num} {
    background: greenyellow;
  }
  
`