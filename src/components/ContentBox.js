import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Block from "./Block";

export default function ContentBox({
  title = "Employment",
  desc = "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
  content,
  contentTitle = "employment",
  contentDesc = "",
  blocks,
  setBlocks,
}) {
  const handleAddBlock = () => {
    setBlocks([
      ...blocks,
      {
        description: "",
        endDate: "",
        city: "",
        startDate: "",
        employer: "",
        jobtitle: "",
      },
    ]);
  };

  return (
    <div className="w-full space-y-2">
      <h1 className="text-md font-medium">{title}</h1>
      <p className="text-sm font-light text-gray-400">{desc}</p>

      {blocks
        ? blocks?.map((block, index) => (
            <Block
              key={index}
              index={index}
              block={block}
              blocks={blocks}
              setBlocks={setBlocks}
            />
          ))
        : null}

      {!content ? (
        <button
          onClick={handleAddBlock}
          className="flex text-indigo-600 px-4 py-4 border border-gray-200  w-full rounded-md"
        >
          <PlusIcon className="w-6 h-6 mr-2" />
          Add {contentTitle}
        </button>
      ) : null}
    </div>
  );
}

// add  element, add one more element
//
