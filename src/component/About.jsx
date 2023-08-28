import React from 'react'
import Common from './Common'
import img from '../images/about.png'

function About() {
  return (
    <>
    <Common title='Welcome to About Us page' details='We are here to help you please contact us' button='Contact' img={img} services='/addUser'/>
    </>
  )
}

export default About