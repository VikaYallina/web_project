const items = {
    1: {
        category: "sport",
        date_added: "2021-12-11T22:26:20.975+00:00",
        description: "Baseball bat with f**kface logo",
        id: 1,
        price: 12.12,
        title: "Bat"
    },
    2:{
        category: "food",
        date_added: "2021-12-11T22:27:00.455+00:00",
        description: "Good for scrumping!",
        id: 2,
        price: 67.12,
        title: "Cosmic Crisp apple"
    }
  };
  
  export default function request(url) {
    return new Promise((resolve, reject) => {
      const id = parseInt(url.substr('/item/'.length), 10);
      process.nextTick(() =>
        items[id]
          ? resolve(items[id])
          : reject({
              error: 'Cannot find item with id ' + userID ,
            }),
      );
    });
  }