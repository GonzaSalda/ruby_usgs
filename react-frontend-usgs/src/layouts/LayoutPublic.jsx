import Navbar from '../components/Navbar'

const LayoutPublic = ({children }) => {
  return (
    <>
     <div>
      <Navbar />
      {children}
    </div>
    </>
  )
}

export default LayoutPublic