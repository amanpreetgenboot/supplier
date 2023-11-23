import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import "../components/addConfig.css";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
const AddConfiguration = () => {
  const [Countries, setCountries] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [productGroup, setproductGroup] = useState(null);
  const [selectedProductGroup, setselectedProductGroup] = useState(null);
  const [selectedvendor, setselectedVendor] = useState(null);
  const [selectedCountries, setselectedCountries] = useState(null);
  const cities = [
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
  ];



  useEffect(() => {
    const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo0LCJleHAiOjE3MDA3MzA3ODksImlhdCI6MTcwMDcxNjM4OX0.k02EyfK6dxmLnXmUaNEyVOLbnAn9KJWsifZo_9ntj0TTsRz-CsGguDnDs70-AFlcm03T3o4UtUs5vbB112prkw"

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/vendor",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
    
        const vendor = result.beans.map((bean) => bean.description);
    
        setVendor(vendor);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo0LCJleHAiOjE3MDA3MzA3ODksImlhdCI6MTcwMDcxNjM4OX0.k02EyfK6dxmLnXmUaNEyVOLbnAn9KJWsifZo_9ntj0TTsRz-CsGguDnDs70-AFlcm03T3o4UtUs5vbB112prkw"; 

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/country",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        const country = result.beans.map((bean) => bean.countryname);
        console.log(country,"sssssssssssss")

        setCountries(country);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo0LCJleHAiOjE3MDA3MzA3ODksImlhdCI6MTcwMDcxNjM4OX0.k02EyfK6dxmLnXmUaNEyVOLbnAn9KJWsifZo_9ntj0TTsRz-CsGguDnDs70-AFlcm03T3o4UtUs5vbB112prkw"

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/productgroup",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
   
        const pg = result.beans.map((bean) => bean.productGroup);
      
        setproductGroup(pg);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="from-main">
        <div className="from-body">
          <div className="form-header">
            <div className="right">
              <p>Create</p>
              <h1>New User</h1>
            </div>
            <div className="left">
              <Button
                label="Close"
                icon="pi pi-times"
                iconPos="right"
                severity="success"
                className="header-btn"
              />
            </div>
          </div>
 
          <div className="inpute-section">
            <div className="inpute-type">
              <span>
                Vendor <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                      value={selectedvendor}
                      onChange={(e) => setselectedVendor(e.value)}
                      options={vendor}
                    
        
                placeholder="Select "
                maxSelectedLabels={3}
                className="inpute"
              />
            </div>
            <div className="inpute-type">
              <span>
                Country <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={selectedCountries}
                onChange={(e) => setselectedCountries(e.value)}
                options={Countries}
                placeholder="Select"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>
                Product Group <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={selectedProductGroup}
                onChange={(e) => setselectedProductGroup(e.value)}
                options={productGroup}
                placeholder="Select"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>End User Type</span>
            </div>
            <div>
              <MultiSelect
                // value={selectedCities}
                // onChange={(e) => setSelectedCities(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select "
                maxSelectedLabels={3}
                className="inpute"
              />
            </div>
            <div className="inpute-type">
              
              <span>
                Description <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div className="inpute-hover">
              <InputText placeholder="Enter here" className="inpute" />
            </div>
          </div>
          <div className="footer">
            <div className="btn-footer">
              <Button
                label="Cancel"
                severity="secondary"
                text
                raised
                className="footer-btn"
                style={{ backgroundColor: "white" }}
              />
             <Link to={"/Master"}>
                <Button
                  label="Create"
                  severity="success"
                  className="footer-btn"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddConfiguration;
