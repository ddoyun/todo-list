import { url, headers } from '../store/store.js';

export async function getTodos() {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: headers
    });
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.log(error);
  }
}