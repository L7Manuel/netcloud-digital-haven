import { useState } from "react";
import NubecitaButton from "./NubecitaButton";
import NubecitaChat from "./NubecitaChat";

const Nubecita = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NubecitaButton onClick={() => setIsOpen(true)} />
      <NubecitaChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Nubecita;
