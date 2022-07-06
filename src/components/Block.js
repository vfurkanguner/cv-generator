import React, { useState } from "react";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

export default function Block({ block, setBlocks, blocks, index }) {
  const [blockVisible, setBlockVisible] = useState(false);

  const onChange = (e) => {
    let newArr = [...blocks];
    newArr[index][e.target.name] = e.target.value;
    setBlocks(newArr);
  };

  return (
    <div className="space-y-4 border rounded-md border-gray-200 p-4">
      <aside className="flex justify-between">
        <h1 className="font-semibold">Not specified</h1>
        <button onClick={() => setBlockVisible(!blockVisible)}>
          {!blockVisible ? (
            <ChevronDownIcon className="w-6 h-6 mr-2" />
          ) : (
            <ChevronUpIcon className="w-6 h-6 mr-2" />
          )}
        </button>
      </aside>
      {blockVisible ? (
        <main className="w-full text-gray-400">
          <div className="grid grid-cols-2 gap-2">
            <FormControl>
              <FormLabel htmlFor="jobtitle">Job Title</FormLabel>
              <Input name="jobtitle" type="text" onChange={onChange} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="employer">Employer</FormLabel>
              <Input name="employer" type="text" onChange={onChange} />
            </FormControl>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <p className="font-medium">Start & End Date</p>
              <div className="flex mt-2">
                <input
                  className="border w-full h-10 rounded-md p-2"
                  name="startDate"
                  type="date"
                  onChange={onChange}
                />

                <input
                  className="border w-full h-10 rounded-md p-2"
                  name="endDate"
                  type="date"
                  onChange={onChange}
                />
              </div>
            </div>

            <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input name="city" type="text" onChange={onChange} />
            </FormControl>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                name="description"
                htmlFor="description"
                onChange={onChange}
              />
            </FormControl>
          </div>
        </main>
      ) : null}
    </div>
  );
}
