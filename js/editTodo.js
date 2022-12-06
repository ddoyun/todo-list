import { url, headers } from '../store/store.js';

export async function editTodo({ title, done = true, id }) {
  try {
    const res = await fetch(url + `/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        title,
        done
      })
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}