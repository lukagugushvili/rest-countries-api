import React, { useEffect, useState } from "react";
import { Container } from "../styles/ContainerStyles";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  FilterCon,
  InpCon,
  RegionsBox,
  RegionsCon,
} from "../styles/FilterConStyles";
import { useDataContext } from "../context/DataContext";

const Filter = () => {
  const { mode, countries } = useDataContext();

  const [regions, setRegions] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const uniqueCountry: string[] = [];

    countries.forEach((el) => {
      if (!uniqueCountry.includes(el.region)) {
        uniqueCountry.push(el.region);
      }
    });

    uniqueCountry.sort((a, b) => a.length - b.length);

    setRegions(uniqueCountry);
  }, [countries]);

  return (
    <div>
      <Container>
        <FilterCon>
          <InpCon $mode={mode}>
            <IoIosSearch />
            <input type="text" placeholder="Search for a country..." />
          </InpCon>
          <div>
            <RegionsCon
              $mode={mode}
              $show={show}
              onClick={() => setShow(!show)}
            >
              <p>Filter by Region</p>
              <IoIosArrowForward />
            </RegionsCon>
            {show && (
              <RegionsBox $mode={mode} $show={show}>
                <ul>
                  {regions.map((region, index) => (
                    <li key={index}>
                      <p>{region}</p>
                    </li>
                  ))}
                </ul>
              </RegionsBox>
            )}
          </div>
        </FilterCon>
      </Container>
    </div>
  );
};

export default Filter;
