import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import QuantityCounter from "./QuantityCounter";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/ui/carousel";

export interface Masita {
  nombre: string;
  precio: number;
  imagen_lowres: string;
  descripcion?: string;
  imagenes?: string[];
  p_u1: number;
  p_u2: number;
  p_u3: number;
  p_u4: number;
  p_u5: number;
}

interface MasitaCardProps {
  masita: Masita;
  isDetailed?: boolean;
}

const MasitaCard: React.FC<MasitaCardProps> = ({ masita, isDetailed = false }) => {
  const [quantity, setQuantity] = useState(12);
  const [totalPrice, setTotalPrice] = useState(masita.p_u1 * 12);
  const [showCounter, setShowCounter] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    let pricePerUnit = masita.p_u1;

    if (newQuantity >= 51) {
      pricePerUnit = masita.p_u5;
    } else if (newQuantity >= 41) {
      pricePerUnit = masita.p_u4;
    } else if (newQuantity >= 31) {
      pricePerUnit = masita.p_u3;
    } else if (newQuantity >= 18) {
      pricePerUnit = masita.p_u2;
    } else if (newQuantity >= 13) {
      pricePerUnit = masita.p_u1;
    }

    setTotalPrice(Math.ceil(newQuantity * pricePerUnit));
  };

  const handleAddToCart = () => {
    setShowCounter(true);
  };

  return (
    <Card
      className=" w-full bg-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <CardBody className="p-0 overflow-hidden">
        <Carousel>
          <CarouselNext />
          <CarouselPrevious />
          <div className="relative">
            <CarouselMainContainer className="h-28">
              {masita.imagenes?.map((img, index) => (
                <SliderMainItem key={index} className="bg-transparent">
                  <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                    <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                  </div>
                </SliderMainItem>
              ))}
            </CarouselMainContainer>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <CarouselThumbsContainer className="gap-x-1">
                {masita.imagenes?.map((_, index) => (
                  <CarouselIndicator key={index} index={index} />
                ))}
              </CarouselThumbsContainer>
            </div>
          </div>
        </Carousel>
      </CardBody>
      <CardFooter className="text-small flex flex-col p-4 z-10 rounded-b-lg">
        <h1 className="font-bold text-lg text-custom-brown tracking-tighter">
          {masita.nombre} x {quantity} unidades
        </h1>
        <h2 className="font-bold text-xl text-custom-brown-light">
          Bs. {totalPrice.toFixed(2)}
        </h2>

        {showCounter ? (
          <div className="mt-2">
            <QuantityCounter 
              minQuantity={12} 
              initialQuantity={quantity}
              p_u1={masita.p_u1} 
              p_u2={masita.p_u2} 
              p_u3={masita.p_u3} 
              p_u4={masita.p_u4} 
              p_u5={masita.p_u5}
              onQuantityChange={handleQuantityChange}
              showTotalPrice={false} // Oculta el precio total en las cards
            />
          </div>
        ) : (
          <Button
            className="mt-4 w-full bg-primary font-bold shadow-md text-custom-brown bg-custom-primary py-2 px-4 rounded-lg"
            color="primary"
            variant="flat"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MasitaCard;
