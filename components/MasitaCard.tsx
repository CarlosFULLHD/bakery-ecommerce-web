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
        className="cursor-pointer w-full bg-background-dark rounded-lg min-h-[210px]"
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
          className="mx-auto w-[90%] h-[90%] md:max-w-[620px] md:max-h-[90%] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg bg-background-dark text-custom-brown"
          scrollBehavior="inside"
          placement="center"
        >
          <ModalContent>
            <>
              <ModalHeader className="text-3xl text-custom-brown">
                {masita.nombre}
              </ModalHeader>
              <ModalBody>
                {/* Cambiamos el layout a flex-col para que se apilen verticalmente */}
                <div className="flex flex-col items-center space-y-6">
                  {/* Carrusel */}
                  <div className="w-full">
                    <Carousel
                      orientation="vertical"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-full flex justify-center bg-background-dark">
                        <CarouselMainContainer className="h-64 w-full">
                          {masita.imagenes?.map((img, index) => (
                            <SliderMainItem
                              key={index}
                              className="border border-muted flex items-center justify-center rounded-md bg-background-dark"
                            >
                              <Image
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full max-h-[300px] object-cover rounded-md"
                              />
                            </SliderMainItem>
                          ))}
                        </CarouselMainContainer>
                      </div>
                      <CarouselThumbsContainer className="h-20 sm:h-40 w-full flex justify-center bg-background-dark">
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
                                className="w-full h-full max-h-[100px] sm:max-h-[200px] object-cover rounded-md"
                              />
                            </span>
                          </SliderThumbItem>
                        ))}
                      </CarouselThumbsContainer>
                    </Carousel>
                  </div>

                  {/* Descripción y contador */}
                  <div className="w-full text-center">
                    <p className="text-xl">{masita.descripcion}</p>
                    <div className="mt-4">
                      <span className="font-bold text-xl lg:text-2xl block mb-2">Cantidad:</span>
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
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button
                  className="font-bold border-custom-brown-light text-custom-brown-light"
                  variant="ghost"
                  onClick={onClose}
                >
                  Atrás
                </Button>
                <Button
                  className="font-bold bg-custom-brown-light"
                  onClick={handleAddToCart}
                >
                  Añadir al carrito - Bs {totalPrice.toFixed(2)}
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
