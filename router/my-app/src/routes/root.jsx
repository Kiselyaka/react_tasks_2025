import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { getProducts } from '../forStorage';
import { getStudents } from '../forStorage';
import { createProduct } from '../forStorage';
import { createStudent } from '../forStorage';

export async function loader() {
  try {
    const products = await getProducts();
    const students = await getStudents(); 
    return { products, students }; 
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    throw error;
  }
}

export async function action() {
	const product = await createProduct();
  const student = await createStudent(); 
	return { product, student };
}

function Root() {
  const { products, students } = useLoaderData();
  
  return (
    <div id="main">
      <div id="menu">
        <Form method="post" action="/add-product">
          <button type="submit">Добавить продукт</button>
        </Form>

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
        
        <Form method="post" action="/add-student">
          <button type="submit">Добавить студента</button>
        </Form>

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
      </div>

      <div id="product">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;