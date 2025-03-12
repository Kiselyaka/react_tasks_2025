import { Outlet, Link, useLoaderData } from 'react-router-dom';
import { getProducts } from '../forStorage'
import { getStudents } from '../forStorage';

export async function loader() {
	const products = await getProducts();
  const students = await getStudents(); 
  return { products, students }; 
}

function Root() {
  const { products, students } = useLoaderData();
  return (
    <div id="main">
      <h1>Продукты</h1>
      {products.length ? (
        <nav>
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              {product.name ? product.name : <i>Unnamed</i>}
            </Link>
          ))}
        </nav>
      ) : (
        <p><i>no products here ...</i></p>
      )}

      <h1>Студенты</h1>
      {students.length ? (
        <nav>
          {students.map((student) => (
            <Link key={student.id} to={`/students/${student.id}`}>
              {student.name ? student.name : <i>Unnamed</i>}
            </Link>
          ))}
        </nav>
      ) : (
        <p><i>no students here ...</i></p>
      )}

      <div id="product">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
