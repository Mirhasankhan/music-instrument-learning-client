import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  const { data: allInstructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch(
        `https://music-instrument-learning-server-seven.vercel.app/users?role=instructor`
      );
      return res.json();
    },
  });

  return (
    <div className="pt-16">
      <h1 className="animate__animated animate__backInRight text-center font-medium w-1/2 mx-auto text-2xl md:text-3xl text-purple-600 my-8 border-b-4 border-green-400 pb-3">
        Our Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-3 md:mx-12">
        {allInstructors.map((ins) => (
          <div
            key={ins._id}
            className="card card-compact w-full p-3 bg-white border"
          >
            <figure>
              <img
                className="h-80 w-full rounded-md"
                src={ins.photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ins.name}</h2>
              <p className="text-xl font-normal">{ins.email}</p>
              <div className="card-actions justify-start">
                <Link to="/classes">
                  {" "}
                  <button className="common-button">Show Classes</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
