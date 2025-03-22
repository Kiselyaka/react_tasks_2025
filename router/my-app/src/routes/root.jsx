import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { getProducts, getStudents, createProduct, createStudent } from '../forStorage';

export async function loader() {
  try {
    const products = await getProducts();
    const students = await getStudents(); 
    return { products, students };
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    throw error;
  }
}

export async function action({ request }) {
  const formData = await request.formData();
  const actionType = formData.get('_action');

  if (actionType === 'add-product') {
    const product = await createProduct();
    return { product };
  } else if (actionType === 'add-student') {
    const student = await createStudent();
    return { student };
  }
}

function Root() {
  const { products, students } = useLoaderData();

  return (
    <div id="main">
      <div id="menu">
        <Form method="post">
          <input type="hidden" name="_action" value="add-product" />
          <button type="submit">Добавить продукт</button>
        </Form>
        
        {products.length ? (
          <nav>
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                {product.name}
              </Link>
            ))}
          </nav>
        ) : <p>Нет продуктов.</p>}

        <Form method="post">
          <input type="hidden" name="_action" value="add-student" />
          <button type="submit">Добавить студента</button>
        </Form>

        {students.length ? (
          <nav>
            {students.map((student) => (
              <Link key={student.id} to={`/students/${student.id}`}>
                {student.name}
              </Link>
            ))}
          </nav>
        ) : <p>Нет студентов.</p>}
      </div>

      <div id="details">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
