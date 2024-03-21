import { BrowserRouter, NavLink, Route, Routes } from 
"react-router-dom";
import './App.css';
import Product from './Routing/Product';
import AboutUs from './Routing/AboutUs';
import Home from "./Routing/home";
import NoPageFound from "./Routing/noPagefound";
import AboutEmployee from "./Routing/nestedRouting/aboutEmployee";
import AboutCompany from "./Routing/nestedRouting/aboutCompany";
import TableData from "./components/tableData";
import UserDetail from "./Routing/nestedRouting/userDetail";
import Counter from "./components/counter";
import UserEdit from "./Routing/userEdit";
import CounterRedux from "./redux/counterRedux";

export default function App() {
  return (<div className="App">
    {/* React Routing */}
  <br/>
  <BrowserRouter>
   <ul>
    <li>
      <NavLink to="/">Home</NavLink>
      {/* <a  className="active" href="/">Home</a> */}
    </li>
    <li>
    <NavLink to="/prod">Product</NavLink>
      {/* <a href="/prod">Product</a> */}
    </li>
    <li>
      <NavLink to="/apiData">API Data</NavLink>
    </li>
    <li>
    <NavLink to="/aboutUs">About Us</NavLink>
      {/* <a href="/aboutUs">About Us</a> */}
    </li>
    <li>
    <NavLink to="/counterwithstate">Counter With State</NavLink>
      {/* <a href="/aboutUs">About Us</a> */}
    </li>
    {/* <li>
    <NavLink to="/useredit">User Edit</NavLink>
    </li> */}
    <li>
    <NavLink to="/counterwithredux">Counter With Redux</NavLink>
     
    </li>
   </ul>
  <Routes>
  <Route exact path="/" element = {<Home/>}/> 
    
    <Route exact path="prod" element = {<Product/>}/> 
    {/* <Route exact path="prod/details/:userId" element = {<Details/>}/>  */}
    <Route exact path="counterwithstate" element = {<Counter/>}/> 
    {/* <Route exact path="useredit" element = {<UserEdit/>}/>  */}
    <Route exact path="counterwithredux" element = {<CounterRedux/>}/> 
    <Route exact path="apiData" element = {<TableData/>}/> 
    <Route exact path="apiData/details/:userId" element = {<UserDetail/>}/> 
    <Route exact path="apiData/edit/:userId" element = {<UserEdit/>}/> 
    <Route exact path="aboutUS" element = {<AboutUs/>}> 
     <Route path="employee" element = {<AboutEmployee/>}/> 
      <Route path="company" element = {<AboutCompany/>} /> 
    </Route> 
    <Route exact path="/*" element = {<NoPageFound/>}/> 
  </Routes>
  </BrowserRouter>
  </div>
  )
}
// Link- Page not refreshed while swicthing between links
// NavLink - className="active" will highlight current selected tab
// * represents wildcard route
// Outlet- To load data of child components