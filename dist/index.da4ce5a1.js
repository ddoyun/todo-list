const t="https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",o={"content-type":"application/json",apikey:"FcKdtJs202209",username:"KDT3_JeonSoYun"},e={loading:document.querySelector(".loading"),todoInput:document.querySelector(".todo-input"),todoAddBtn:document.querySelector(".todo-button"),todoList:document.querySelector(".todo-list")};async function n(e){try{const n=await fetch(t,{method:"POST",headers:o,body:JSON.stringify({title:e})}),c=await n.json();return console.log(c),c}catch(t){console.log(t)}}async function c(){try{const e=await fetch(t,{method:"GET",headers:o}),n=await e.json();return console.log(n),n}catch(t){console.log(t)}}async function a(e){console.log(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:${e}`);try{const n=await fetch(t`/:${e}`,{method:"DELETE",headers:o});return await n.json()}catch(t){console.log(t)}}async function i(e,n=!0,c){console.log(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:${c}`);try{const a=await fetch(t`/:${c}`,{method:"PUT",headers:o,body:JSON.stringify({title:e,done:n})});return await a.json()}catch(t){console.log(t)}}function s(t){for(const o of t){let t=o.createdAt.slice(0,10);const n=document.createElement("li");n.innerHTML=`\n      <input type="checkbox" id="check${o.id}">\n      <label for="check${o.id}"></label>\n      <input type="text" value="${o.title}">\n      <p>${t}</p>\n      <button class="deleteBtn" id="${o.id}">삭제</button>\n    `,n.children[1].addEventListener("click",(function(t){const e=document.querySelector(`#check${o.id}`).checked;i(o.title,done=e,o.id)})),n.children[4].addEventListener("click",(function(t){a(o.id),console.log(o.id)})),e.todoList.append(n)}}!async function(){e.loading.classList.add("show"),s(await c()),e.loading.classList.remove("show")}(),e.todoAddBtn.addEventListener("click",(async()=>{let t=e.todoInput.value;""!==t?(e.loading.classList.add("show"),await n(t),e.todoInput.innerHTML="",s(await c()),e.loading.classList.remove("show")):alert("제목을 입력해주세요!")}));
//# sourceMappingURL=index.da4ce5a1.js.map