const wrapper = document.querySelector(".wrapper2");
const Ap_link = "https://jsonplaceholder.typicode.com/albums";

async function getDate(api) {
  const responsiv = await fetch(api);

  responsiv
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err));
}
getDate(Ap_link);

function createCard(date) {
  date.forEach((post) => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <h3> ${post.title}</h3>
        
        `;
    wrapper.appendChild(div);
  });
}
