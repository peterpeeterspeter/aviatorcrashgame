"use client";

import { useState, type ReactNode } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

interface AccordionItemProps {
  value: string;
  question: string;
  children: ReactNode;
}

export function Accordion({
  items,
  className = "",
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col divide-y divide-border ${className}`}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} question={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ question, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex w-full cursor-pointer items-start justify-between gap-2 py-4 text-left text-base font-semibold outline-none transition-colors hover:text-primary"
      >
        <span>{question}</span>
        <CaretDownIcon
          className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        />
      </button>
      {open && (
        <div className="pb-4 pt-0 text-muted-foreground">{children}</div>
      )}
    </div>
  );
}
