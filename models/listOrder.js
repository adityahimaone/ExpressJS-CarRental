const Convert = require("./convertIDR");

const orders = [
  {
    id: 1,
    email: "email@mail.test",
    car: "Kijang Innova",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 500000,
    status: "Success",
  },
  {
    id: 2,
    email: "email@mail.test",
    car: "Avanza",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 300000,
    status: "Success",
  },
  {
    id: 3,
    email: "email@mail.test",
    car: "Avanza",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 450000,
    status: "Pending",
  },
  {
    id: 4,
    email: "email@mail.test",
    car: "Xenia",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 560000,
    status: "Pending",
  },
  {
    id: 5,
    email: "email@mail.test",
    car: "Fortuner",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 670000,
    status: "Success",
  },
  {
    id: 6,
    email: "email@mail.test",
    car: "Alphard",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 800000,
    status: "Pending",
  },
  {
    id: 7,
    email: "email@mail.test",
    car: "Pajero",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 780000,
    status: "Success",
  },
  {
    id: 8,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 500000,
    status: "Pending",
  },
  {
    id: 9,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 500000,
    status: "Pending",
  },
  {
    id: 10,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: 500000,
    status: "Success",
  },
];

module.exports = {
  findAll: () => {
    return Promise.resolve(
      orders.map((order) => {
        return {
          ...order,
          price: new Convert(order.price).convertToIDR(),
        };
      })
    );
  },
  create: ({ id, email, car, start_rent, finish_rent, price, status }) => {
    const no = orders[orders.length - 1].no + 1;
    const ordersData = {
      id,
      no,
      email,
      car,
      start_rent,
      finish_rent,
      price,
      status,
    };
    orders.push(ordersData);
    return Promise.resolve(orders);
  },
};
