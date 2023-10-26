// import ContactForm from './components/ConfigurationList'
import "./App.css";
// import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";



const data = [
  {
    documentName: "Check",
    format: "PDF",
    minFileSize: "250KB",
    maxFileSize: "2MB",
    category: "EUPO Document",
  },
  {
    documentName: "Test",
    format: "PDF",
    minFileSize: "250KB",
    maxFileSize: "5MB",
    category: "PO Document",
  },
  {
    documentName: "SSN",
    format: "PDF",
    minFileSize: "250KB",
    maxFileSize: "5MB",
    category: "EUPO Document",
  },
];

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/departments",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          console.log(Error, "errror rhehrh");
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        console.log(result, "response here");
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
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "1rem" }}
          ></Column>
          <Column
            field="documentName"
            header="Document Name"
            style={{
              minWidth: "10rem",
              fontWeight: "400",
              fontSize: "0.80rem",
            }}
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

export default App;
