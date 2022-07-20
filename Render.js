class Render {
  constructor(dataFromApiManager) {
    this.data = dataFromApiManager;
  }
  main() {
    this.RenderMainPersonData(this.data.MainPerson);
    this.RenderFrindsData(this.data.Frinds);
    this.RenderPokemon(this.data.Pekemon);
    this.RenderQuote(this.data.qoute);
    this.RenderFetchIpsum(this.data.Ipsum);
  }
  RenderMainPersonData(data) {
    const source = $("#RenderMainPersonData").html();
    const temp = Handlebars.compile(source);
    let picture = temp({
      imgSRC: data.imgSRC,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      state: data.state,
    });
    $(".user-container").append(picture);
  }
  RenderFrindsData(data) {
    const source = $("#RenderFriends").html();
    const temp = Handlebars.compile(source);
    let frinds = temp(data);
    $(".friends-container").append(frinds);
  }
  RenderPokemon(data) {
    const source = $("#RenderPekomenData").html();
    const temp = Handlebars.compile(source);
    console.log(data);
    let poke = temp({ name: data.name, image: data.image });
    $(".pokemon-container").append(poke);
  }
  RenderFetchIpsum(data) {
    const source = $("#RenderFetchIpsum").html();
    const temp = Handlebars.compile(source);
    let Ipsum = temp({ Ipsum: data });
    $(".meat-container").append(Ipsum);
  }
  RenderQuote(data) {
    const source = $("#RenderQutoData").html();
    const temp = Handlebars.compile(source);
    let qoute = temp({ Quote: data.qoute });
    $(".quote-container").append(qoute);
  }
}
