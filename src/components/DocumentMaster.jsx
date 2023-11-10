import "./DocumentMaster.css";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column"; 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";




function Master() {

  return (
    <div className="App">
      <div className="bgImage">
        <div className="bgimgHeader">
          <p>Database</p>
          <h1>Document Master </h1>
        </div>

        <div>
          <Link to={"/AddUsers"}>
          <Button
            className="bgimage-btn"
            label="Close"
            icon="pi pi-times"
            iconPos="right"
            style={{ marginRight: "1.2rem" }}
            severity="success"
          />
          </Link>
     
        </div>
      </div>
      <div>
    

        <div className="editSetting">
          <div>
            <p>Document Masters</p>
          </div>

          <div className="cancelbtn">
          <div className="searchBar">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" className="SearchInput" />
              </span>
            </div>
            <div className="cancelbutton">
              
              <Button label="Add Dimension" severity="secondary" outlined />
            </div>
            <div>
              <Button
                className="bgimage-btn"
                label="Add Records"
                severity="success"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <DataTable
        
        //   value={allItems}
          tableStyle={{ minWidth: "20rem" }}
          className="dataTable"
        >
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
            field="documentName"
            header="Document Type"
            style={{ minWidth: "5rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Category"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Min File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="	
            Max File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Actions"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
        </DataTable>
      </div>

      <div></div>
    </div>
  );
}

export default Master;
