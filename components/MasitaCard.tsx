// MasitaCard.tsx
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";
import QuantityCounter from "./QuantityCounter";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(12);
  const [totalPrice, setTotalPrice] = useState(masita.p_u1 * 12);

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

  return (
    <div>
      <Card
        className="cursor-pointer w-full bg-background-dark rounded-sm"
        isPressable
        onClick={onOpen}
      >
        <CardBody className="p-0 overflow-hidden">
          <Image
            width="100%"
            alt={masita.nombre}
            className="w-full h-[150px] object-cover rounded-sm"
            src={masita.imagen_lowres}
          />
        </CardBody>
        <CardFooter className="text-small justify-between flex flex-col p-0 z-10">
          <h1 className="font-bold text-lg text-custom-brown tracking-tighter">{masita.nombre} x {quantity} unidades</h1>
          <h2 className="font-bold text-xl text-custom-brown-light">Bs. {totalPrice.toFixed(2)}</h2> 
        </CardFooter>
      </Card>

      {isDetailed && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onClose}
          className="mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg bg-background-dark text-custom-brown"
          scrollBehavior="inside"
          placement="center"
        >
          <ModalContent>
            <>
              <ModalHeader className="text-3xl text-custom-brown">
                {masita.nombre}
              </ModalHeader>
              <ModalBody>
                <div className="md:grid md:grid-cols-3 md:gap-4">
                  <div className="md:col-span-2">
                    <Carousel orientation="vertical" className="flex items-center gap-2">
                      <div className="relative basis-3/4 flex justify-center bg-background-dark">
                        <CarouselMainContainer className="h-40 md:h-64 md:w-80">
                          {masita.imagenes?.map((img, index) => (
                            <SliderMainItem
                              key={index}
                              className="border border-muted flex items-center justify-center rounded-md bg-background-dark"
                            >
                              <Image
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full max-h-[150px] sm:max-h-[300px] object-cover rounded-md"
                              />
                            </SliderMainItem>
                          ))}
                        </CarouselMainContainer>
                      </div>
                      <CarouselThumbsContainer className="h-40 sm:h-60 basis-1/4 bg-background-dark">
                        {masita.imagenes?.map((img, index) => (
                          <SliderThumbItem
                            key={index}
                            index={index}
                            className="rounded-md bg-transparent"
                          >
                            <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                              <Image
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full max-h-[150px] sm:max-h-[300px] object-cover rounded-md"
                              />
                            </span>
                          </SliderThumbItem>
                        ))}
                      </CarouselThumbsContainer>
                    </Carousel>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-xl mt-4 md:mt-0">{masita.descripcion}</p>
                    <div className="mt-4">
                      <QuantityCounter 
                        minQuantity={12} 
                        initialQuantity={quantity}
                        p_u1={masita.p_u1} 
                        p_u2={masita.p_u2} 
                        p_u3={masita.p_u3} 
                        p_u4={masita.p_u4} 
                        p_u5={masita.p_u5}
                        onQuantityChange={handleQuantityChange}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="font-bold"
                  color="primary"
                  variant="bordered"  
                  onClick={() => {
                    console.log(`Añadido al carrito: ${quantity} unidades de ${masita.nombre} por un total de Bs. ${totalPrice}`);
                    onClose();
                  }}
                >
                  Añadir al carrito
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default MasitaCard;
