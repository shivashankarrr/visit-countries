import {Component} from 'react'

import CountryItem from '../CountryItem'
import VisitCountries from '../VisitCountries'

import {
  BgContainer,
  MainHeading,
  CountriesList,
  VisitedCountriesList,
  NoCountries,
} from './styledComponents'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: true,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: false,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: false,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6f',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6e',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Countries extends Component {
  state = {countriesList: initialCountriesList}

  deleteCountriesList = id => {
    const {countriesList} = this.state
    const filteredList = countriesList.filter(
      eachCountry => eachCountry.id !== id,
    )
    this.setState({countriesList: filteredList})
  }

  addVisitedCountry = id => {
    const {countriesList} = this.state
    const visitCountry = countriesList.map(eachCountry => {
      if (eachCountry.id === id) {
        const updatedList = {...eachCountry, isVisited: !eachCountry.isVisited}
        return updatedList
      }
      return eachCountry
    })
    this.setState({countriesList: visitCountry})
  }

  render() {
    const {countriesList} = this.state
    const filteredCountiresList = countriesList.filter(
      country => country.isVisited,
    )
    return (
      <BgContainer>
        <MainHeading>Countries</MainHeading>
        <CountriesList>
          {countriesList.map(eachCountry => (
            <CountryItem
              key={eachCountry.id}
              countryDetails={eachCountry}
              addVisitedCountry={this.addVisitedCountry}
            />
          ))}
        </CountriesList>
        <MainHeading>Visited Countries</MainHeading>
        <VisitedCountriesList>
          {filteredCountiresList.length === 0 ? (
            <NoCountries>No Countries Visited Yet</NoCountries>
          ) : (
            filteredCountiresList.map(eachCountry => (
              <VisitCountries
                key={eachCountry.id}
                visitCountriesDetails={eachCountry}
                deleteCountriesList={this.deleteCountriesList}
              />
            ))
          )}
        </VisitedCountriesList>
      </BgContainer>
    )
  }
}

export default Countries
