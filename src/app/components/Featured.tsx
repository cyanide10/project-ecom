import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Featured = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];

  return (
    // 50% on small screens and 33% on larger screens.
    <div className="my-10 w-full flex flex-col items-center">
      <h1 className="w-[70vw] text-5xl font-semibold text-left">Featured</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[70vw] py-8"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div className="w-full mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Featured;

// {
//   products.map((product) => (
//     <div key={product.id} className="group relative">
//       <img
//         alt={product.imageAlt}
//         src={product.imageSrc}
//         className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//       />
//       <div className="mt-4 flex justify-between">
//         <div>
//           <h3 className="text-sm text-gray-700">
//             <a href={product.href}>
//               <span aria-hidden="true" className="absolute inset-0" />
//               {product.name}
//             </a>
//           </h3>
//           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900">{product.price}</p>
//       </div>
//     </div>
//   ));
// }
