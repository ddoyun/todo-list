import { url, headers } from '../store/store.js';

export async function deleteTodo(id) {
  try {
    const res = await fetch(url + `/${id}`, {
      method: 'DELETE',
      headers: headers
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}