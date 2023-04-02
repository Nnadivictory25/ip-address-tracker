import { useEffect, useState } from "react"

const useWindowWide = (size: number) => {
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      
      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [width])
    
    return width > size
}
  
export default useWindowWide