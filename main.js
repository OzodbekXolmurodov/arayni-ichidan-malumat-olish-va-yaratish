const wrapper = document.querySelector(".wrapper");
const Ap_link = "https://jsonplaceholder.typicode.com/posts";

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
         <p> ${post.body}</p>
        `;
    wrapper.appendChild(div);
  });
}
