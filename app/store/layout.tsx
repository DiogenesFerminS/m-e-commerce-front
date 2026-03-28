import Footer from "@/components/common/footer/footer"
import NavBar from "@/components/common/navBar/navBar"

interface Props {
    children: React.ReactNode
}

const StoreLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <NavBar/>
        <div className="grow pt-20">
            {children}
        </div>
      <Footer/>
    </div>
  )
}

export default StoreLayout