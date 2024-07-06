"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ModalComponentContactame() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [copySuccess, setCopySuccess] = useState("");

  const email = "cninareynaga@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopySuccess("¡Correo copiado al portapapeles!");
        setTimeout(() => setCopySuccess(""), 3000); // Limpiar mensaje después de 3 segundos
      },
      () => {
        setCopySuccess("Error al copiar");
      }
    );
  };

  return (
    <>
      <button
        onClick={onOpen}
        type="button"
        className={cn(
          "flex items-center gap-x-2 px-6 py-4 text-white text-sm lg:text-base font-medium transition-all hover:text-gray-300 rounded-xl",
          "bg-transparent"
        )}
      >
        <Mail size={22} className="text-gray-500 lg:text-white" />
        Contact Me
      </button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-white dark:bg-gray-800"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black dark:text-white">
                Contact Me
              </ModalHeader>
              <ModalBody>
                <p className="text-black dark:text-white">
                  If you are an employer, recruiter, or interested in discussing
                  potential job opportunities, I would love to hear from you. I
                  am open to exploring roles in companies or startups where I
                  can contribute and grow.
                </p>
                <h1 className="font-bold mt-4 text-black dark:text-white">
                  Email Address:
                </h1>
                <h2 className="bg-yellow-300 p-2 rounded-lg text-black dark:text-gray-800 font-bold select-none">
                  {email}
                </h2>
                {copySuccess && (
                  <h3 className="text-green-500 mt-2">{copySuccess}</h3>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-yellow-dark text-black font-bold"
                  color="secondary"
                  onPress={copyToClipboard}
                >
                  Copy Email
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
