import { useState } from 'react';
import './App.css';
import UnControlledComp from './components/uncontrolledComp';
// import FormDemo from './components/formDemo';
// import FormDemo1 from './components/formDemo1';
// import FormDemo2 from './components/fornDemo2';
// import ControlledComp from './components/controlledComp';
// import ReactHookForm from './components/reactHookForm';
// import UseEffectCity from './components/useEffectCity';
// import LifeCycleDemo from './components/lifeCycleDemo';
// import UseHookEffect from './components/useEffectHook';
// import MapDemo from "./components/mapDemo" 
// import UseDemoEffect from './components/useEffectDemo';
// import UseDemoEffect2 from './components/useEffectDemo2';
// import UseDemoEffect1 from './components/useEffectDemo1';
// import TableData from './components/tableData';




function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <ControlledComp/> */}
      <UnControlledComp/>
      {/* <FormDemo/> */}
      {/* <FormDemo1/> */}
      {/* <FormDemo2/> */}
      {/* <ReactHookForm/> */}
      {/* <MapDemo/> */}
      {/* <UseDemoEffect/> */}
      {/* <UseDemoEffect1/> */}
      {/* <UseDemoEffect2/> */}
      {/* <TableData/> */}
      {/* <button onClick={()=> setShow(!show)}>{ show ? 'Change City' : 'Reset' }</button> */}
      {/* <UseEffectCity/>        */}
       {/* { show ? <UseHookEffect/> : "" } */}
      {/* <button onClick={() => setShow(!show)}>{ show ? 'Hide LifeCycleDemo' : 'Show LifeCycleDemo'}</button>
      { show ? <LifeCycleDemo abc="Nagpur"/> : ""} */}
</div>
  );
}

export default App;
// task- on button click, hide LifeCycleDemo Component 
