import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{fontSize: 14, marginTop: 40, paddingTop: 15, borderTop: '1px solid #d3d3d3'}}>
          ©{new Date().getFullYear()} Weather Genie Inc.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
