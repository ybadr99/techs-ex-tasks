const getUsers = () => {
  const usersJSON = localStorage.getItem("users");
  try {
    return usersJSON ? JSON.parse(usersJSON) : [];
  } catch (e) {
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const render = () => {
  const userEl = document.querySelector("#users");
  userEl.innerHTML = "";

  users.forEach((user) => {
    userEl.appendChild(generateUser(user));
  });
};

const generateUser = (user) => {
  const container = document.createElement("div");
  container.classList.add("card");
  container.classList.add("mt-2");
  const newUser = document.createElement("div");
  newUser.classList.add("card-body");

  const btnsContainer = document.createElement("div");

  const deleteBtn = document.createElement("a");
  deleteBtn.className = "button btn btn-danger";
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", (e) => {
    // console.log(user.id);
    removeUser(user.id);
    saveUsers();
    render();
  });

  const editBtn = document.createElement("a");
  editBtn.textContent = "edit";
  editBtn.className = "button btn btn-primary";

  editBtn.addEventListener("click", (e) => {
    const singleUser = users.find((u) => u.id === user.id);
    document.querySelector("#name").value = singleUser.name;
    document.querySelector("#age").value = singleUser.age;
    document.querySelector("#id").value = singleUser.id;
    document.querySelector("#formBtn").textContent = "update";
  });

  btnsContainer.appendChild(deleteBtn);
  btnsContainer.appendChild(editBtn);

  container.appendChild(newUser);
  container.appendChild(btnsContainer);

  const nameEl = document.createElement("h4");
  const ageEl = document.createElement("span");

  nameEl.textContent = user.name;
  ageEl.textContent = user.age;

  newUser.appendChild(nameEl);
  newUser.appendChild(ageEl);

  return container;
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  console.log(index);
  if (index > -1) {
    users.splice(index, 1);
  }
};
