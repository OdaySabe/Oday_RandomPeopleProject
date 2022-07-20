class APIManager {
  constructor() {
    this.data = {
      MainPerson: {},
      Frinds: [],
    };
  }
  loadData() {
    this.addPicture();
    this.addFrindes();
    this.addPekemon();
    this.addQuto();
    this.addIpsum();
  }
  addIpsum() {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=all-meta&paras=1",
      success: (data) => {
        this.GetIpsum(data);
      },
    });
  }
  GetIpsum(data) {
    let obj = data[0];
    this.data["Ipsum"] = obj;
  }
  addQuto() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      dataType: "json",
      success: (data) => {
        this.GetQuote(data);
      },
    });
  }
  GetQuote(data) {
    let quto = { qoute: data.quote };
    this.data["qoute"] = quto;
  }
  addPicture() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: (data) => {
        this.GetUserData(data);
      },
    });
  }
  addFrindes() {
    for (let i = 0; i < 6; i++) {
      $.ajax({
        method: "GET",
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: (data) => {
          this.GetFrinds(data);
        },
        error: function () {
          console.log("faild");
        },
      });
    }
  }
  GetFrinds(data) {
    let obj = {
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
    };
    this.data.Frinds.push(obj);
    if (this.data.Frinds.length == 6) console.log("done");
  }
  GetUserData(data) {
    let obj = {
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      city: data.results[0].location.city,
      state: data.results[0].location.state,
      imgSRC: data.results[0].picture.large,
    };
    this.data["MainPerson"] = obj;
  }
  addPekemon() {
    const id = Math.floor(Math.random() * 900);
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      success: (data) => {
        this.GetPoke(data);
      },
      error: function () {
        console.log("error");
      },
    });
  }
  GetPoke(data) {
    let obj = { name: data.name, image: data.sprites.front_default };
    this.data["Pekemon"] = obj;
  }
}
