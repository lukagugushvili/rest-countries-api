import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { RegionsBox, RegionsCon } from "../../styles/FilterConStyles";
import { IoIosArrowForward } from "react-icons/io";
import { Props } from "../../types/RegionStatePropType";
import { DataType } from "../../types/DataTypes";

const RegionFilter = ({ regions, setRegions }: Props) => {
  const { mode, countries, setResult } = useDataContext();

  const [show, setShow] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<DataType[]>([]);

  useEffect(() => {
    const uniqueCountry: string[] = ["All"];

    countries.forEach((el) => {
      if (!uniqueCountry.includes(el.region)) {
        uniqueCountry.push(el.region);
      }
    });

    uniqueCountry.sort((a, b) => a.length - b.length);

    setRegions(uniqueCountry);
  }, [countries, setRegions]);

  const handleFilterRegion = (region: string) => {
    if (region === "All") {
      setResult(countries);
    } else {
      const filterRegion = countries.filter((el) => el.region === region);
      setResult(filterRegion);
    }
  };

  return (
    <div>
      <RegionsCon $mode={mode} $show={show} onClick={() => setShow(!show)}>
        <p>Filter by Region</p>
        <IoIosArrowForward />
      </RegionsCon>
      {show && (
        <RegionsBox $mode={mode} $show={show}>
          <ul>
            {regions.map((region, index) => (
              <li key={index}>
                <p onClick={() => handleFilterRegion(region)}>{region}</p>
              </li>
            ))}
          </ul>
        </RegionsBox>
      )}
    </div>
  );
};

export default RegionFilter;
