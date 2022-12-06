import { els } from './store/store.js';
import { addTodo } from './js/addTodo.js';
import { getTodos } from './js/getTodos.js';
import { renderTodos } from './js/renderTodos.js';

// 첫 로드시 TO-DO 렌더
async function init() {
  els.loading.classList.add('show');  // 로딩
  let todos = await getTodos();
  renderTodos(todos);
  els.loading.classList.remove('show');  // 로딩
};
init();

// TO-DO 등록 기능
els.todoAddBtn.addEventListener('click', async () => {
  const title = els.todoInput.value;
  if (title === '') {
    alert('제목을 입력해주세요!');
    return
  }
  els.loading.classList.add('show');  // 로딩

  // TO-DO 등록
  await addTodo(title);

  // 초기화
  els.todoList.innerHTML = "";
  els.todoInput.value = "";

  let todos = await getTodos();
  renderTodos(todos);

  els.loading.classList.remove('show');  // 로딩
});