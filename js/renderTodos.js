import { els } from '../store/store.js';
import { deleteTodo } from './deleteTodo.js';
import { editTodo } from './editTodo.js';

export function renderTodos(todos) {
  for (const todo of todos) {

    // 날짜 자르기
    const yeartext = todo.createdAt;
    let createdtodo = yeartext.slice(0, 10);

    const el = document.createElement("li");
    el.innerHTML = /* html */ `
      <input type="checkbox" id="check${todo.id}">
      <label for="check${todo.id}"></label>
      <input type="text" value="${todo.title}">
      <p>${createdtodo}</p>
      <button class="deleteBtn" id="${todo.id}">삭제</button>
    `

    // 로드시 투두 완료 체크
    if (todo.done === true) {
      el.children[0].classList.add("check");
      el.children[2].disabled = true;
      el.children[0].checked = true;
    }

    // TO-DO 완료
    el.children[1].addEventListener('click', () => {
      const title = todo.title;
      const id = todo.id;
      let classCheck;
      if (el.children[0].checked === false) {
        el.children[0].classList.add("check");
        el.children[2].disabled = true;
        classCheck = true;
      } else if (el.children[0].checked === true) {
        el.children[0].classList.remove("check");
        el.children[2].disabled = false;
        classCheck = false;
      }
      editTodo({ title, done: classCheck, id });
    });

    // TO-DO 내용 수정
    el.children[2].addEventListener('keyup', event => {
      const title = event.target.value;
      const classCheck = todo.done;
      const id = todo.id;
      if (event.key === 'Enter' && !event.isComposing) {
        editTodo({ title, done: classCheck, id });
        el.children[2].blur();
      }
      editTodo({ title, done: classCheck, id });
    });

    // TO-DO 삭제
    el.children[4].addEventListener('click', event => {
      deleteTodo(todo.id);
      event.currentTarget.parentNode.remove();
    });

    // TO-DO 렌더
    els.todoList.append(el);
  }
}