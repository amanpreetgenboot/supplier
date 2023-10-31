// import ContactForm from './components/ConfigurationList'
import "./Config.css";
// import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";




function Config() {
  const [data, setData] = useState([]);

  console.log(data,"itt")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTg2NzM4MjIsImlhdCI6MTY5ODY1OTQyMn0.7xL_9EsDmmWwPKr2Qq0i6KooPHHVrB9D5zRhAiWyReK_2VgtxH1z5sdSKxPQnjhRkatqRWWmpewnhiYepk87vA";
        const pages = 0; 
        const size = 20; 
        const response = await fetch(
          `https://dev.supplychainapi.hexalytics.in:8086/v1/oms/documentConfig?pages=${pages}&size=${size}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
             
            },
          }
        );
   
        if (!response.ok) {
          console.log(Error, "error occurred");
          throw new Error("Network response was not ok");
        }
  
        const result = await response.json();
        console.log(result,"=====")
        console.log(result.beans,"bin")
        setData(result.beans);
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <div className="bgImage">
        <div className="bgimgHeader">
          <p>All documents</p>
          <h1>Document Configuration </h1>
        </div>

        <div>
          <Button
            className="bgimage-btn"
            label="Close"
            icon="pi pi-times"
            iconPos="right"
            style={{ marginRight: "1.2rem" }}
            severity="success"
          />
        </div>
      </div>
      <div>
        <div className="greySection">
          <div className="config">
            <h2>Configuration List</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "centre",
              alignContent: "centre",
            }}
          >
            <div className="searchBar">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" className="SearchInput" />
              </span>
            </div>
            <div className="vendorSelect">
              <div>
                <span className="inputextName">Vendor</span>
              </div>
              <MultiSelect
                optionLabel="name"
                disabled={true}
                placeholder="Select"
                className="SearchInput"
              />
            </div>
            <div className="productSelect">
              <div>
                <span className="inputextName">Product Group</span>
              </div>
              <MultiSelect
                optionLabel="name"
                disabled={true}
                placeholder="Select"
                className="SearchInput"
              />
            </div>
            <div className="countrySelect">
              <div>
                <span className="inputextName">Country</span>
              </div>
              <MultiSelect
                optionLabel="name"
                disabled={true}
                placeholder="Select"
                className="SearchInput"
              />
            </div>
            <div>
              <div>
                <span className="inputextName">End User Type</span>
              </div>
              <MultiSelect
                optionLabel="name"
                disabled={true}
                placeholder="Select"
                className="SearchInput"
              />
            </div>
          </div>
        </div>

        <div className="editSetting">
          <div>
            <p>Edit Settings</p>
          </div>

          <div className="cancelbtn">
            <div className="cancelbutton">
              <Button label="Cancel" severity="secondary" outlined />
            </div>
            <div>
              <Button
                className="bgimage-btn"
                label="Close"
                severity="success"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <DataTable
          value={data}
          tableStyle={{ minWidth: "20rem" }}
          className="dataTable"
        >
          {/* <Column
          field="name"
            // selectionMode="multiple"
            // headerStyle={{ width: "1rem" }}
            header='Document Name'
          ></Column> */}
          <Column
            field="documentName"
            style={{
              minWidth: "10rem",
              fontWeight: "400",
              fontSize: "0.80rem",
            }}
            header="Document Name"
          />
          <Column
            field="format"
            header="Format"
            style={{ minWidth: "5rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="minFileSize"
            header="Min. File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="maxFileSize"
            header="Max. File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="category"
            header="Category"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="Mandatory"
            header="Mandatory"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Approval Required"
            header="Approval Required"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Approval Value"
            header="Approval Value"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Upload"
            header="Upload"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Replace"
            header="Replace"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Delete"
            header="Delete"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Below Approval Value"
            header="Below Approval Value"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="Approver Department"
            header="Approver Department"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
        </DataTable>
      </div>

      <div></div>
    </div>
  );
}

export default Config;
