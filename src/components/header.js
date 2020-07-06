import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { MdMenu } from "react-icons/md"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderImageQuery {
      file(relativePath: { eq: "Deliza-cake-art-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  //flex items-center justify-between
  return (
    <header className="flex items-center justify-between border-b border-gray-700 bg-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-40 ml-8 mr-4 py-3">
          <Link to="/" className="text-decoration-none ">
            <Img fluid={data.file.childImageSharp.fluid} />
          </Link>
        </div>
        {/* menu mobile */}
        <button
          className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <MdMenu className="material-icons text-black text-3xl" />
        </button>
        <nav
          id="navigation"
          className="hidden top-navbar w-full lg:w-auto"
        >
          <ul className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <li>
              <Link
                to="/"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Pasteles
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Sabores
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Sobre Mi
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Contactos
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}
//lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header