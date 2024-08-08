// MasitaCard.tsx
import React from "react";
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
  Link,
} from "@nextui-org/react";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
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
          <h1 className="font-bold text-lg text-custom-brown tracking-tighter">{masita.nombre} x 12 unidades</h1>
          <h2 className="font-bold text-xl text-custom-brown-light">Bs.{masita.precio}</h2> 
        </CardFooter>
      </Card>

      {isDetailed && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onClose}
          className="mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg bg-background-dark text-custom-brown "
          scrollBehavior="inside"
          placement="center"
        >
          <ModalContent>
            <>
              <ModalHeader className="text-3xl text-custom-brown">
                {masita.nombre}
              </ModalHeader>
              <ModalBody>
                <Carousel>
                  <CarouselNext className="top-1/3 -translate-y-1/3" />
                  <CarouselPrevious className="top-1/3 -translate-y-1/3" />
                  <div className="relative ">
                  <CarouselMainContainer className="h-40">
                    {masita.imagenes?.map((img, index) => (
                      <SliderMainItem key={index} className="bg-transparent">
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full max-h-[150px] object-cover rounded-md"
                      />
                    </SliderMainItem>
                    ))}
                  </CarouselMainContainer>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <CarouselThumbsContainer className="gap-x-1">
                  {masita.imagenes?.map((img,index) => (
                    <CarouselIndicator key={index} index={index} />
                  ))} 
  
                </CarouselThumbsContainer>
                </div>
                </div>
                </Carousel>
                <p className="text-xl mt-4">{masita.descripcion}</p>
                <div className="mt-4">
                <QuantityCounter 
                    minQuantity={12} 
                    p_u1={masita.p_u1} 
                    p_u2={masita.p_u2} 
                    p_u3={masita.p_u3} 
                    p_u4={masita.p_u4} 
                    p_u5={masita.p_u5} 
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="font-bold"
                  color="danger"
                  variant="bordered"  
                  onClick={onClose}
                >
                  Close
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
