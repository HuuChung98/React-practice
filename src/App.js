// import './App.css';
// import { ExChangeCar } from "./BaiTap_Car";
// import Map from "./8_Map";
// import LifeCycle from './12_LifeCycle';  
// import DemoUseEffect from './13_Hooks/DemoUseEffect';
// import DemoUseState from './13_Hooks/DemoUseState';
// import TodoApp from './14_Ex_TodoApp';
// import Composition from './10_Composition';
// import UserManagement from './11_UserManagement';
// import ExchangeCar from './7_ExcerciseCar';
// import Map from './8_Map';
// import ProductCart from './9_Ex_ProductCart';
// import ProductCart from "./9_Ex_ProductCart";
// import Composition from './10_Composition';
// import DemoRedux from "./15_Redux";
// import ReduxCart from "./16_ReduxCart";
import ToDoApp from "./17_TodoAppRedux";
import MovieList from "./18_Router/MovieList";
import MovieDetail from "./18_Router/MovieDetail";

import { Routes, Route, Link } from "react-router-dom";

// import DemoUseRef from "./13_Hooks/DemoUseRef";

// function App() {
//   return (
//     // < ExchangeCar />
//     // < Map />
//     // < ProductCart />
//     // <Composition />
//     // <UserManagement />
//     // <LifeCycle />  

//     // Demo UseState 
//     // <DemoUseState /> 

//     // <DemoUseEffect />
        //  <TodoApp />
//     // <DemoRedux />
//     // <ReduxCart />
    // <ToDoApp />
//     // <DemoUseRef />
//     // Demo Mang dung Map
//     // <Map />
//     // <ProductCart />
//     // <Composition />
//     // <ProductDetail />
//   );
// };

function App() {
  return (
    <>
    {/* Sử dụng component Link để điều hướng đến Component mong muốn */}
      <Link to="/"> Home </Link >
      <Link to="/todo-app"> TodoApp</Link>
     {/* Cấu hình để react router render ra component tương ứng với URL */}
        <Routes>
          <Route path="/todo-app" element={<ToDoApp />} />
          <Route path="/movies" element={<MovieList />} />

          {/* sử dụng kix thuật paramId để xài một component nhưng khác nhau về data  */}
          <Route path="/movies/:movieId" element={<MovieDetail />}/>

          {/* Trường hợp mà element không trả về một component nào ta sẽ cài đặt là Not Found  */}
          <Route path="*"  element={<h1> Not Found </h1>} />
        </Routes>
      </>

      )
};

export default App;
