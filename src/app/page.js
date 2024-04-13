import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:5000/shoe", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  throw new Error("This is an error");
  return (
    <div>
      <h1 className="text-4xl text-center text-red-400">Page</h1>
      <div>
        {data?.map((shoe) => (
          // make a card title ,price, description
          // card with tailwind css
          <div key={shoe?.id} className="flex flex-col items-center">
            <div className="bg-gray-300 p-4 m-4 rounded-lg">
              <h2 className="text-2xl">{shoe?.title}</h2>
              <p className="text-lg">{shoe?.price}</p>
              <p>{shoe?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
