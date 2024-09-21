import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
} from "@/components/ui/carousel"; // Nuevo carousel importado
import QuantityCounter from "./QuantityCounter";
import { useOrder } from "@/components/cart/OrderContext";
import { Masita } from "./MasitasSection";

interface MasitaCardProps {
  masita: Masita;
  isDetailed?: boolean;
}

const MasitaCard: React.FC<MasitaCardProps> = ({
  masita,
  isDetailed = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(9); // Set initial quantity to 9
  const [totalPrice, setTotalPrice] = useState(masita.p_u1 * 9);
  const { addToCart } = useOrder();

  const handleQuantityChange = (newQuantity: number, newTotalPrice: number) => {
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice); // Actualizamos el precio total
  };

  const handleAddToCart = () => {
    addToCart({
      id: masita.nombre,
      nombre: masita.nombre,
      imagen: masita.imagen_lowres,
      cantidad: quantity,
      precio: totalPrice, // Guardamos el precio total calculado
    });
    onClose(); // Cerramos el modal tras añadir al carrito
  };

  return (
    <div>
      <Card
        className="cursor-pointer w-full bg-background-dark rounded-md min-h-[210px]"
        isPressable
        onClick={onOpen}
      >
        <CardBody className="p-0 overflow-hidden">
          <Image
            width="100%"
            alt={masita.nombre}
            className="w-full h-[150px] min-h-[150px] object-cover rounded-sm"
            src={masita.imagen_lowres}
          />
        </CardBody>
        <CardFooter className="text-small flex items-center justify-center flex-col p-0 z-10 min-h-[60px]">
          <h1 className="font-bold text-lg text-custom-brown tracking-tighter px-4 leading-tight text-center">
            {masita.nombre}
          </h1>
        </CardFooter>
      </Card>

      {isDetailed && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onClose}
          className="w-full max-w-3xl max-h-96 p-0 m-0 flex items-center justify-center rounded-sm bg-background-dark lg:max-w-[400px]" 
          placement="center"
        >
          <ModalContent className="w-full max-w-80 max-h-[700px] p-0 m-0 lg:p-4 ">
            <>
              <ModalBody className="relative p-0 m-0 bg-background-dark">
              <div className="absolute inset-0 z-10 top-5 left-5 max-h-5">
                <h1 className="text-white text-xl font-bold lg:text-2xl">{masita.nombre}</h1>
              </div>

                {/* Carrusel actualizado */}
                <div className="w-full px-0 ">
                  <Carousel>
                    <CarouselNext />
                    <CarouselPrevious />
                    <div className="relative w-full ">
                      <CarouselMainContainer className="w-full">
                        {masita.imagenes?.map((img, index) => (
                          <SliderMainItem key={index} className="bg-transparent">
                            <Image
                              src={img}
                              alt={`Slide ${index + 1}`}
                              className="w-full max-w-full h-[360px] object-cover rounded-xl" // Ajustamos el ancho
                            />
                          </SliderMainItem>
                        ))}
                      </CarouselMainContainer>

                      {/* Indicadores de carrusel debajo de las imágenes */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex justify-center">
                          {masita.imagenes?.map((_, index) => (
                            <CarouselIndicator key={index} index={index} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>

                                  {/* Descripción y contador */}
                    <div className="w-full text-center px-2">
                    <p className="text-md ">{masita.descripcion}</p>
                    <div className="">
                      <span className="font-bold text-xl lg:text-2xl block mb-2">
                        Cantidad:
                      </span>
                      <QuantityCounter
                        minQuantity={9}
                        initialQuantity={quantity}
                        p_u1={masita.p_u1}
                        p_u2={masita.p_u2}
                        p_u3={masita.p_u3}
                        showTotalPrice={false}
                        onQuantityChange={handleQuantityChange}
                      />
                    </div>
                  </div>
                
              </ModalBody>
              <ModalFooter className="flex justify-between px-0 mx-0 bg-background-dark">

                <Button
                  className="font-bold bg-custom-brown-light px-10"
                  onClick={handleAddToCart}
                >
                  Añadir al carrito - <span className="text-lg lg:text-xl">Bs {totalPrice.toFixed(2)}</span>
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
