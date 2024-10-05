import styled from 'styled-components'

export const MainNavContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`
