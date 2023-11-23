import "./DocumentMaster.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'primeicons/primeicons.css';

function Master() {
  const [category, setCategory] = useState([]);
  const [documentType, setDocumentType] = useState([]);
  const [documentCategory, setDocumentCategory] = useState([]);
  const [minSize, setMinSize] = useState([]);
  const [maxSize, setMaxSize] = useState([]);
  const [editIcon, setEditIcon] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo0LCJleHAiOjE3MDA3MzA3ODksImlhdCI6MTcwMDcxNjM4OX0.k02EyfK6dxmLnXmUaNEyVOLbnAn9KJWsifZo_9ntj0TTsRz-CsGguDnDs70-AFlcm03T3o4UtUs5vbB112prkw";

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/documentmaster",
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
        const categories = result.beans.map((bean) => {
          return { category: bean.category.category };
        });
        setCategory(categories);
        const documentTypesArray = result.beans.map(
          (bean) => bean.documentTypes
        );

        const allDocumentTypes = documentTypesArray.flatMap((d) => d);

        const documentTypeValues = allDocumentTypes.map(
          (item) => item.documentType
        );
        setDocumentType(documentTypeValues);
        const category = result.beans.map((bean) => bean.category.category);
        setDocumentCategory(category);
        const minSize = result.beans.map((bean) => bean.minFileSize);
        setMinSize(minSize) 
        const maxSize = result.beans.map((bean) => bean.maxFileSize);
        setMaxSize(maxSize) 
        const iconArray = maxSize.map(() =>  <i className="pi pi-pencil"></i>);
        setEditIcon(iconArray)
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);

  

  const mergedArray = category.map((type, index) => ({
    category: type.category,
    Category: documentCategory[index],
    minFileSize:minSize[index],
    maxFileSize:maxSize[index],
    documentType: documentType[index],
    icon:editIcon[index]
  }));
  console.log(mergedArray, "yedyyy");

  const handleRowSelect = (event) => {
    setSelectedRowData(event.data);
  };
  console.log(handleRowSelect,"handleRow")
  return (
    
    <div className="App">
      <div className="bgImage">
        <div className="bgimgHeader">
          <p>Database</p>
          <h1>Document Master </h1>
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
        
        
          value={mergedArray}
          tableStyle={{ minWidth: "20rem" }}
          className="dataTable"
          selectionMode="single"
          onRowSelect={handleRowSelect}
        >
          <Column
            field="category"
            style={{
              minWidth: "10rem",
              fontWeight: "400",
              fontSize: "0.80rem",
            }}
            header="Document Name"
          />
          <Column
            field="documentType"
            header="Document Type"
            style={{ minWidth: "5rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="Category"
            header="Category"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="minFileSize"
            header="Min File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
          <Column
            field="maxFileSize"
            header="Max File Size"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
          />
           <Column
        header="Actions"
        style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
        body={(rowData) => (
          <Link to="/UpdateRecords">
            <Button
              icon="pi pi-pencil"
              onClick={() => setSelectedRowData(rowData)}
            />
          </Link>
        )}
      />
        </DataTable>
      </div>

     
    </div>
  );
}

export default Master;
