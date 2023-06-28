import { useState } from "react";

export const useFilter = (dataList, callback)=>{
  const [query, setQuery]=useState('');
  const filterData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  return [filterData, setQuery];
}