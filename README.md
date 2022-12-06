# 📌 할 일 관리 To-Do App 만들기
<br>

## 🔗 배포 링크
👀 https://ddoyun.github.io/todo-list

<br>

## 🛠 사용 기술

<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat&logo=JAVASCRIPT&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=SASS&logoColor=white"/>

<br>

## 요구사항
### :exclamation: 필수

- [x] 할 일 목록(List)이 출력돼야 합니다.
- [x] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다.
- [x] 할 일 항목을 수정할 수 있어야 합니다.
- [x] 할 일 항목을 삭제할 수 있어야 합니다.
- [x] jQuery, React, Vue 등 JS 라이브러리와 프레임워크는 사용하지 않아야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

<br>

### :grey_question: 선택

- [ ] 가능하다면, 타입스크립트를 사용해보세요.
- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요.
- [ ] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 최신 수정일을 표시해보세요.
- [x] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 할 일과 관련된 기타 기능도 고려해보세요.

<br>

### 🙌 구현한 기능
- 삭제, 수정, 조회, 추가를 모듈화하여 적용
- store 에 DOM Element 와 api 정보 모듈화
- `renderTodos` 에서 todo를 생성하여 이벤트 리스너 적용

<br>

### 🧐 궁금한 내용
- 기능별로 모듈화를 적용해보았는데, `renderTodos` 같은 경우는 기능을 더 나눌 필요가 있는지 궁금합니다.
- `renderTodos` 에서 for문에서 `todos`가 생성이 되고 `todos` `Elements` 에 각각의 `addEventListener` 들을 적용해보았는데, 이런 방식이 좋을까요??(구글링하면서 이 구조로 적용하게 되었습니다..)
- 여유가 된다면 적용 못했던 남은 기능을 추가해볼까 하는데 현재 구조에서 효율적인 구조로 개선되면 좋을지도 알려주시면 감사하겠습니다.😊
