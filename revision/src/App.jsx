import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ModeToggler } from './components/state/ModeToggler';
import FormInputComponent from './components/state/Form';
import ComplexStateComponent from './components/state/FormComplex';
import MultipleStatesComponent from './components/state/MultipleState';
// import PrevState from './components/state/PrevState';
import ObjState from './components/state/ObjState';
import CompleArray from './components/state/CompleArray';
import ReflectExample from './components/state/Update';
import EffectUse from './components/effect/EffectUse';
import SideEffect from './components/effect/SideEffect';
import RunOnce from './components/effect/RunOnce';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
			
		{/* <FormInputComponent/> */}
      {/* <div>
        
      </div> 
			<MultipleStatesComponent/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         
      </div>
      
			/* <ComplexStateComponent/> */

			/* <ModeToggler/>  */}
     {/* <PrevState/> */}
		 {/* <ObjState/>
		 <CompleArray/>
		 <ReflectExample/>
			<h1>mbj</h1> */}
  {/* <EffectUse/>
<SideEffect/> */}
<RunOnce/>
    </div>
  )
}

export default App
