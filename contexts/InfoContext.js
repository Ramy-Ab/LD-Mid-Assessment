import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { getPersonalInfo } from "../api/getPersonalInfo";

const InfoContext = React.createContext();

export const useInfo = () => {
  return useContext(InfoContext);
};

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState();
  const url = "/admin/me";
  const { data } = useSWR(url, getPersonalInfo);

  useEffect(() => {
    setInfo(data);
  }, [data]);

  return <InfoContext.Provider value={info}>{children}</InfoContext.Provider>;
};
