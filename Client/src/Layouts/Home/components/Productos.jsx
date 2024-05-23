import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  
  export function ProductListCard({
    img,
    name,
    price,
  }) {
    return (
      <Card shadow={false} className="border border-gray-300">
        <CardBody className="pb-0">
          <img src={img} alt={img} className="min-w-[280px] w-full" />
          <div className="flex justify-between">
            <div>
              <Typography className="mb-2" color="blue-gray" variant="h5">
                {name}
              </Typography>
              <div className="mb-5 flex items-center gap-2">
                <div className="h-5 w-5 rounded border border-gray-900 bg-brown-300 "></div>
                <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
                <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
              </div>
            </div>
            <Typography
              variant="h5"
              className="text-gray-600"
            >
              {price}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  const CONTENTS = [
    {
      img: "https://www.tierragro.com/cdn/shop/files/mil-b_ppal_200x.png?v=1684443102",
      name: "Edo Mil B ",
      price: "$2,500"
    },
    {
      img: "https://www.tierragro.com/cdn/shop/products/azium-inyectable-x-10-ml_993f45c4-bb12-47cd-9b6c-36d21a2e2c73_200x.jpg?v=1596329424",
      name: "Azium inyectable x 10 ml",
      price: "$2,300"
    },
    {
      img: "https://www.tierragro.com/cdn/shop/products/catosal-b12-100-ml_c1c9e803-7066-4325-bf13-1acc64cc218d_200x.jpg?v=1596331324",
      name: "Catosal B12 x 100 ml",
      price: "$1,240"
    },
  ];
  
  export function ProductListSection4() {
    return (
      <section className="py-10 px-8">
        <div className="mx-auto text-center mb-16">
          <Typography className="font-medium text-lg">
          Búsqueda de productos a medida
          </Typography>
          <Typography variant="h1" className="my-4 text-4xl">
            Encuentra lo que necesitas
          </Typography>
          <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Simplifique su experiencia de compra con nuestro intuitivo sistema de filtrado.
          Ya sea que esté buscando características específicas, rangos de precios o marcas.
          </Typography>
        </div>
        <div className="mx-auto container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {CONTENTS.map(({ img, name, price }, index) => (
              <ProductListCard
                key={index}
                img={img}
                name={name}
                price={price}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProductListSection4;