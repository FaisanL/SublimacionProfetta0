"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComp() {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="???"
        className="flex items-center justify-center flex-col"
      >
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam est
          dignissimos sed, odio asperiores in incidunt, repellat reiciendis
          totam blanditiis at, veniam ullam voluptatum cupiditate aliquid
          nostrum commodi pariatur enim.
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="???"
        className="flex items-center justify-center flex-col"
      >
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam est
          dignissimos sed, odio asperiores in incidunt, repellat reiciendis
          totam blanditiis at, veniam ullam voluptatum cupiditate aliquid
          nostrum commodi pariatur enim.
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="???"
        className="flex items-center justify-center flex-col"
      >
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam est
          dignissimos sed, odio asperiores in incidunt, repellat reiciendis
          totam blanditiis at, veniam ullam voluptatum cupiditate aliquid
          nostrum commodi pariatur enim.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
