"use client";
import getRandomIds from "@/actions/getRanomIds";
import { useEffect, useState } from "react";

const page = () => {
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    const draw = getRandomIds();
    console.log(draw + "drawed whats up");
    // let winners = [...(draw || [])];
    // winners.push(draw);
    // console.log("finally " + winners);
    console.log("runed");
    // if (draw === undefined) {
    //   return;
    // }
    // setWinners((prev) => [...prev, ...draw]);
  }, [getRandomIds]);

  //   on the front end make the getrandomids function if its equb start date
  return (
    <div>
      <h1 className="text-lg text-red-700">Draw</h1>
    </div>
  );
};

export default page;
