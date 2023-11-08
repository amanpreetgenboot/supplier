import "./Config.css";
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
            header="Format"
            style={{ minWidth: "5rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Min. File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Max. File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Category"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="documentName"
            header="Mandatory"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="documentName"
            header="Approval Required"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="documentName"
            header="Approval Value"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          ></Column>
          <Column
            field="documentName"
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

export default Master;
