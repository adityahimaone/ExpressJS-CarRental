const Convert = require("./convertIDR");

const cars = [
  {
    id: 1,
    name: "Kijang Innova",
    image_src: "/images/car.png",
    price: 430000,
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "5 Jan 2020, 10.00",
  },
  {
    id: 2,
    name: "Pajero",
    image_src: "/images/car.png",
    price: 730000,
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "6 Jan 2020, 10.00",
  },
  {
    id: 3,
    name: "Fortuner",
    image_src: "/images/car.png",
    price: 670000,
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "7 Jan 2020, 10.00",
  },
  {
    id: 4,
    name: "Avanza",
    image_src: "/images/car.png",
    price: 455000,
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "7 Jan 2020, 10.00",
  },
  {
    id: 5,
    name: "Zenia",
    image_src: "/images/car.png",
    price: 380000,
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "7 Jan 2020, 10.00",
  },
];

module.exports = {
  findAll: () => {
    return Promise.resolve(
      cars.map((car) => {
        return {
          ...car,
          price: new Convert(car.price).convertToIDR(),
        };
      })
    );
  },
  create: ({
    id,
    name,
    image_src,
    price,
    start_rent,
    finish_rent,
    updated_at,
  }) => {
    const no = cars[orders.length - 1].no + 1;
    const ordersData = {
      id,
      no,
      name,
      image_src,
      start_rent,
      finish_rent,
      price,
      updated_at,
    };
    orders.push(ordersData);
    return Promise.resolve(cars);
  },
};
