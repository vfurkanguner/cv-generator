import React from "react";

export default function A4View({
  name,
  surname,
  email,
  phone,
  wantedTitle,
  description,
  blocks,
}) {
  return (
    <div className="w-2/3 bg-white h-full  rounded-md p-4">
      <main className="text-black w-full space-y-2">
        <h1 className="text-center text-[12px] font-semibold">
          {name} {surname}
        </h1>

        <section className="flex text-[8px] justify-center">
          <ul className="flex space-x-4 list-disc">
            {email ? <li>{email}</li> : null}
            {phone ? <li>{phone}</li> : null}
          </ul>
        </section>

        <section className="text-[8px] text-center">
          <h2 className="font-bold">{wantedTitle}</h2>

          <p className="text-left">{description}</p>
        </section>

        <section className="text-[8px]">
          {blocks.length > 0 ? (
            <h2 className="font-bold text-center">Employment History</h2>
          ) : null}

          <ul className="flex flex-col">
            {blocks.map((block, index) => (
              <li className="my-1" key={index}>
                <span className="flex justify-between">
                  <p className="font-bold">{block.jobtitle}</p>
                  <p className="font-light">
                    {block.startDate
                      ? `${block.startDate} - ${block.endDate}`
                      : null}
                  </p>
                </span>
                <p className="font-semibold">{block.employer}</p>
                <p>{block.city}</p>
                <p>{block.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
