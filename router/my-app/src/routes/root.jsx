import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div id="main">
      <nav>
        <a href="/products/1">Product 1</a>
        <a href="/products/2">Product 2</a>
        <a href="/students/1">Student 1</a> 
        <a href="/students/2">Student 2</a> 
      </nav>
      <div id="product">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Root;