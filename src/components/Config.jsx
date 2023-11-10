import "./Config.css";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";

import axios from "axios";

function Config() {
  const toast = useRef(null);
  // const mandatoryRowCats = ["PO Document", "Quotation", "EUPO Document"];
  const [documentName, setDocumentName] = useState([]);
  const [format, setFormat] = useState([]);
  const [minSize, setminSize] = useState([]);
  const [approverPopup, setApproverPopup] = useState(false);
  const [approverPopupRow, setApproverPopupRow] = useState(null);
  const [approverPopupRowData, setApproverPopupRowData] = useState(null);
  const [maxSize, setmaxSize] = useState([]);
  const [category, setCategory] = useState([]);
  const [approvalRequired, setApprovalRequired] = useState({});
  const [approvalValues, setApprovalValues] = useState(null);
  const [rowClick, setRowClick] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [Approvalamount, setApprovalamount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/documentmaster";
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk2MDgwMDksImlhdCI6MTY5OTU5MzYwOX0.H026gzRSDa88_J-siDuYSJ5ad8k8UR4xWOI5Nm71DjERFm2xqfAOnQ2UUqtCqmX-eSUsCiaz-WpHnL4Wl4H8Fw",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Access-Control-Request-Headers": "authorization,content-type",
        "Access-Control-Request-Method": "GET",
        Connection: "keep-alive",
        Host: "dev.supplychainapi.hexalytics.in:8086",
        Origin: "http://localhost:3000",
        Referer: "http://localhost:3000/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
      };

      try {
        const res = await axios.get(url, { headers });
        const modifiedItems = res.data.beans.map((bean) => {
          return { documentName: bean.documentName };
        });
        setDocumentName(modifiedItems);

        const docTypeArrays = res.data.beans.map((bean) => bean.documentTypes);
        const min = res.data.beans.map((bean) => bean.minFileSize);
        setminSize(min);

        const max = res.data.beans.map((bean) => bean.maxFileSize);
        setmaxSize(max);

        const cat = res.data.beans.map((bean) => bean.category.category);
        console.log(cat, "cat");
        setCategory(cat);

        const allDocumentTypes = docTypeArrays
          .map((d) => d.map((e) => e))
          .flat();
        const documentType = allDocumentTypes.map((e) => {
          return { documentType: e.documentType };
        });
        setFormat(documentType);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk2MDgwMDksImlhdCI6MTY5OTU5MzYwOX0.H026gzRSDa88_J-siDuYSJ5ad8k8UR4xWOI5Nm71DjERFm2xqfAOnQ2UUqtCqmX-eSUsCiaz-WpHnL4Wl4H8Fw";

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/approvalamt",
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
        const approvalue = result.beans.map((bean) => bean.description);
        console.log(approvalue, "result=====================================");
        setApprovalamount(approvalue);

        // setLevels(levelNames);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);

  const booleanValues = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const handleDropdownChange = (e) => {
    setSelectedValue(e.value);
  };

  const mergedArray = documentName.map((type, index) => ({
    documentName: type.documentName,
    documentType: format[index].documentType,
    minFileSize: minSize[index],
    maxFileSize: maxSize[index],
    category: category[index],
    description: Approvalamount[index],
  }));
  console.log(mergedArray, "merged");

  const handleApproverView = (row) => {
    setApproverPopup(true);
    setApproverPopupRow(row.id);
    setApproverPopupRowData(row);
  };

  const constructDropdownColumn = (field, header, options, minWidth) => {
    return (
      <Column
        className={"custDropdown inputPadding"}
        field={field}
        header={header}
        // onChange={handleDropdownChange}
        style={{
          minWidth: minWidth,
          minWidth: "7rem",
          fontWeight: "400",
          fontSize: "0.80rem",
        }}
        body={(row) => (
          <Dropdown
            id={row.id}
            itemTemplate={(option) => (
              <div className="px-[25px]" title={option.title}>
                {option.label}
              </div>
            )}
            onChange={handleDropdownChange}
            value={row[field]}
            options={options}
            optionLabel="label"
            placeholder="Select"
            className="w-full md:w-14rem"
          />
        )}
      />
    );
  };

  return (
    <div className="App">
      <div className="bgImage">
        <div className="bgimgHeader">
          <p>All documents</p>
          <h1>Document Configuration </h1>
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
          className="custompaginator custIconsImg custmBtnTable custTable p-datatable-tbody"
          scrollable
          paginator
          paginatorTemplate={`FirstPageLink PrevPageLink PageLinks  'CurrentPageReport'} NextPageLink LastPageLink`}
          rows={5}
          selectionMode={rowClick ? null : "checkbox"}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
          selectionAutoFocus={false}
          emptyMessage="No data found"
          value={mergedArray}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
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
            field="documentType"
            header="Format"
            style={{ minWidth: "7rem", fontWeight: "400", fontSize: "0.80rem" }}
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
          {constructDropdownColumn("mandatory", "Mandatory", booleanValues)}
          {constructDropdownColumn(
            "approvalRequired",
            "Approval Required",
            booleanValues
          )}
          {constructDropdownColumn(
            "description",
            "Approval Value",
            Approvalamount,
            "7rem"
          )}
          ,
          {constructDropdownColumn(
            "approvalValue",
            "Upload",
            approvalValues,
            "7rem"
          )}
          ,
          {constructDropdownColumn(
            "approvalValue",
            "Replace",
            approvalValues,
            "7rem"
          )}
          ,
          {constructDropdownColumn(
            "approvalValue",
            "Delete",
            approvalValues,
            "7rem"
          )}
          ,
          {constructDropdownColumn(
            "approvalValue",
            "Below Approval Value",
            approvalValues,
            "7rem"
          )}
          ,
          <Column
            field="approverDepartment"
            header="Approver Department"
            body={(row) => (
              <button
                onClick={(e) =>
                  approvalRequired[row.id]
                    ? handleApproverView(row)
                    : e.preventDefault()
                }
                type="button"
                disabled={!approvalRequired[row.id]}
                className="underline text-[#0f6cbd] print:no-underline print:text-[#494E5F]"
              >
                View
              </button>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
}

export default Config;
