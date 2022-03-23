const cars = [
  {
    id: 1,
    name: "Kijang Innova",
    image_src: "/images/car.png",
    price: "Rp. 430.000",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "5 Jan 2020, 10.00",
  },
  {
    id: 2,
    name: "Pajero",
    image_src: "/images/car.png",
    price: "Rp. 730.000",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "6 Jan 2020, 10.00",
  },
  {
    id: 3,
    name: "Fortuner",
    image_src: "/images/car.png",
    price: "Rp. 680.000",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "7 Jan 2020, 10.00",
  },
  {
    id: 4,
    name: "Avanza",
    image_src: "/images/car.png",
    price: "Rp. 455.000",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "7 Jan 2020, 10.00",
  },
  {
    id: 5,
    name: "Zenia",
    image_src: "/images/car.png",
    price: "Rp. 380.000",
    start_rent: "2020-01-01",
    finish_rent: "2020-01-02",
    updated_at: "7 Jan 2020, 10.00",
  },
];

module.exports = {
  findAll: () => Promise.resolve(cars),
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
