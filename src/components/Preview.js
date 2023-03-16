
import { useLocation } from 'react-router-dom'
import Home from './Home'
import Template1 from './Template1'
import Template2 from './Template2'
import Template3 from './Template3'
import Template4 from './Template4'

const Preview = () => {
  const location = useLocation()
  const data = location.state
  let tempId = location.state.temp
  console.log(tempId)

  switch(tempId){
    case 'template1':
        return(
            <Template1 data={data}/>
        )
    case 'template2':
        return(
            <Template2 data={data}/>
        )
    case 'template3':
        return(
            <Template3 data={data}/>
        )
    case 'template4':
        return(
            <Template4 data={data}/>
        )
    default:
        <Home/>
  }
}

export default Preview
