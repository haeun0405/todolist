//반복되는 컴포넌트
//Todo 컴포넌트
//각각 'Working.. 🔥','Done..! 🎉' 부분에서 사용

//첫 번째 부분 - 'Working.. 🔥'에서 진행 중인 할 일들을 렌더링
{workingTodos.map((todo) => (
  <Todo key={todo.id} todo={todo} toggleTodoStatus={toggleTodoStatus} deleteTodo={deleteTodo} />
))}

//두 번째 부분- 'Done..! 🎉'에서 완료된 할 일들을 렌더링
{doneTodos.map((todo) => (
  <Todo key={todo.id} todo={todo} toggleTodoStatus={toggleTodoStatus} deleteTodo={deleteTodo} />
))}
