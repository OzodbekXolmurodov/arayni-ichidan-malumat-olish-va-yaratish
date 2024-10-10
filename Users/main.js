const wrapper = document.querySelector(".wrapper3");
const Ap_link = "https://jsonplaceholder.typicode.com/users";

async function getDate(api) {
  try {
    const responsiv = await fetch(api);
    const data = await responsiv.json();
    createCard(data);
  } catch (err) {
    console.log(err);
  }
}

getDate(Ap_link);

function createCard(data) {
  data.forEach((user) => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3> ${user.name}</h3>
      <p> <strong>Username:</strong> ${user.username}</p>
      <p> <strong>Email:</strong> ${user.email}</p>
      <p> <strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      <p> <strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
    `;

    wrapper.appendChild(div);
  });
}
