import localforage from 'localforage';
import { nanoid } from 'nanoid';

// Конфигурация localforage
localforage.config({
  name: 'myApp',
  storeName: 'dataStore',
});

// Получение списка студентов
export async function getStudents() {
  await someNetwork();
  let students = await localforage.getItem('students');
  return students || [];
}

// Получение студента по id
export async function getStudent(id) {
  await someNetwork(`student:${id}`);
  const students = await localforage.getItem('students') || [];
  const student = students.find((student) => student.id === id);
  return student ?? null;
}

// Создание студента
export async function createStudent() {
  await someNetwork();
  const id = nanoid(6);
  const student = { id, name: `Студент ${id}` };
  const students = await getStudents();
  students.unshift(student);
  await setStudents(students);
  return student;
}

// Обновление списка студентов
function setStudents(students) {
  return localforage.setItem('students', students);
}

// Получение списка продуктов
export async function getProducts() {
  await someNetwork();
  let products = await localforage.getItem('products');
  return products || [];
}

// Получение продукта по id
export async function getProduct(id) {
  await someNetwork(`product:${id}`);
  const products = await localforage.getItem('products') || [];
  const product = products.find((product) => product.id === id);
  return product ?? null;
}

// Создание продукта
export async function createProduct() {
  await someNetwork();
  const id = nanoid(6);
  const product = { id, name: `Продукт ${id}` };
  const products = await getProducts();
  products.unshift(product);
  await setProducts(products);
  return product;
}

// Обновление списка продуктов
function setProducts(products) {
  return localforage.setItem('products', products);
}

// Симуляция сетевого запроса
let someCache = {};

async function someNetwork(key) {
  if (!key) someCache = {};
  if (someCache[key]) return;

  someCache[key] = true;
  return new Promise((res) => setTimeout(res, Math.random() * 500));
}
