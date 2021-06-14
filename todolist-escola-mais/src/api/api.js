export const fetchUsers = async () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => json);
  };
  
  export const fetchTodosByUser = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  };
  
  export const fetchTodosById = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  };
  
  export const patchTodo = async (id, body) => {
    const requestConfig = {
      method: "PATCH",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  
    return fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      requestConfig
    )
      .then((response) => response.json())
      .then((json) => json);
  };
  
  
  export const postTodo = async (body) => {
    const requestConfig = {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  
    return fetch(
      `https://jsonplaceholder.typicode.com/todos`,
      requestConfig
    )
      .then((response) => response.json())
      .then((json) => json);
  };
  