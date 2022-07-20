let api = new APIManager();
let render = new Render(api.data);

$("#loadData").on("click", function () {
  api.loadData();
});

$("#renderData").on("click", function () {
  if (api.data.qoute) render.main();
  else alert("No users loaded yet");
});
$("#saveLocalStorage").on("click", function () {
  if (api.data.qoute) localStorage["data"] = JSON.stringify(api.data);
  else alert("no users loaded yet");
});
$("#loadLocalStorage").on("click", function () {
  if (localStorage.data) {
    api.data = JSON.parse(localStorage.data);
    render = new Render(api.data);
    render.main();
  } else {
    alert("No users saved yet");
  }
});
