import React, { useEffect } from "react";
import { fetchPositions } from "@/store/asyncThunk";

const FirstInit = () => {
  const fetchData = async () => {
    await fetchPositions();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
};

export default FirstInit;
