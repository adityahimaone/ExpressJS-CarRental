const orders = [
  {
    id: 1,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 2,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 3,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 4,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 5,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 6,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 7,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 8,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 9,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
  {
    id: 10,
    email: "email@mail.test",
    car: "Audi",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    price: "Rp. 500.000",
    status: "Pending",
  },
];

module.exports = {
  findAll: () => Promise.resolve(orders),
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