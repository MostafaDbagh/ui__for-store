import React,{useRef,useEffect,useState} from 'react';
import './index.css'

let delay = 5000;

const cases = [
    { one: 0, two: 0, three: 0 },
    { one: 0, two: 1, three: 0 },
    { one: 0, two: 0, three: 1 }
]
const Silder = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const [state, setState] = useState({
        one: 0,
        two: 0,
        three: 0
    })
  
useEffect(()=>{
   const timeout = setTimeout(()=>{
         setIndex(cn=> cn +=1)
    },5000)
   

return ()=>{
    clearInterval(timeout);
}

},[index])
    return (
        <>
            <div className='slider' >
                {console.log(index)}
                <div className='slide' style={{ transform: `translate(-${state.one *100}%,0)` }}> </div>
                <div className='slide' style={{ transform: state.two ? `translate(-${state.two*100}%,0)` :''}}></div>
                <div className='slide' style={{ transform: state.three? `translate(-${state.three*200}%,0)`:'' }} ></div>
            </div>
        </>



    );
}

export default Silder;