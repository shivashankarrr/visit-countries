import styled from 'styled-components'

// export const VisitCountriesBg = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `

export const VisitCountry = styled.li`
  display: flex;
  flex-direction: column;
  font-family: roboto;
  padding: 10px;
`

export const Image = styled.img`
  width: 200px;
`

export const CountryNameAndRemove = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CountryName = styled.p`
  font-family: roboto;
  color: #ffffff;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  margin: 10px;
  border-radius: 5px;
  color: #94a3b8;
  cursor: pointer;
`
