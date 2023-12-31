import axios from "axios";
import Swal from "sweetalert2";

// const baseURL = "http://localhost:8888";
const baseURL = "https://iamkoushik1999-todo-server.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(`${baseURL}/todo/list`).then(({ data }) => {
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseURL}/todo/create`, { text })
    .then((data) => setText(""), Swal.fire("To Do Added!"), getAllToDo(setToDo))
    .catch((err) => Swal.fire("Error Adding"));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseURL}/todo/update/${toDoId}`, { text })
    .then(
      (data) => setText(""),
      Swal.fire("To Do Updated!"),
      setIsUpdating(false),
      getAllToDo(setToDo)
    )
    .catch((err) => Swal.fire("Error updating"));
};

const deleteToDo = (toDoId, setToDo) => {
  axios
    .delete(`${baseURL}/todo/delete/${toDoId}`)
    .then((data) => getAllToDo(setToDo), Swal.fire("To Do Deleted!"))
    .catch((err) => Swal.fire("Error deleting"));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
