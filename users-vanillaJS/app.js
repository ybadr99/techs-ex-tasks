const formEl = document.querySelector("#form");
const formBtn = document.querySelector("#formBtn");
const status = document.querySelector("#status").checked
  ? "active"
  : "inactive";
const heads = ["name", "age"];

const users = getUsers();

render();

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = formBtn.textContent.trim();
  console.log(value);
  if (value === "submit") {
    const user = {};
    user.id = Date.now().toString();
    heads.forEach((h) => (user[h] = formEl.elements[h].value));
    user.status = status;
    users.push(user);
    saveUsers(users);

    heads.forEach((h) => (formEl.elements[h].value = ""));
    render();
  } else {
    const id = document.querySelector("#id").value;
    const selectedUser = users.find((u) => u.id === id);
    console.log(selectedUser);
    selectedUser.name = document.querySelector("#name").value;
    selectedUser.age = document.querySelector("#age").value;
    selectedUser.status = status;

    console.log(selectedUser);
    saveUsers(users);
    render();

    heads.forEach((h) => (formEl.elements[h].value = ""));
    formBtn.textContent = "submit";
  }
});
