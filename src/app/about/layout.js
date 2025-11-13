import Clients from '../components/Clients'
export default function pageLayout({children}){
    return (
        <>
               <Clients/>
               {children}
          </>
    )

}