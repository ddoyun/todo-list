import { url, headers } from '../store/store.js';

export async function addTodo(title) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        title,
      })
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}