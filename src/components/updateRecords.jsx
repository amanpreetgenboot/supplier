import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import "../components/updateRecords.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const UpdateRecords = () => {

  return (
    <>
      <div className="from-main">
        <div className="from-body">
          <div className="form-header">
            <div className="right">
              <p>Document Masters</p>
              <h1>UpdateRecords</h1>
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
              Document Name <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                    //   value={selectedvendor}
                    //   onChange={(e) => setselectedVendor(e.value)}
                    //   options={vendor}
                    
        
                placeholder="Select "
                maxSelectedLabels={3}
                className="inpute"
              />
            </div>
            <div className="inpute-type">
              <span>
              Document Type <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                // value={selectedCountries}
                // onChange={(e) => setselectedCountries(e.value)}
                // options={Countries}
                placeholder="Select"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>
              Category <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                // value={selectedProductGroup}
                // onChange={(e) => setselectedProductGroup(e.value)}
                // options={productGroup}
                placeholder="Select"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>Min File Size</span>
            </div>
            <div>
              <MultiSelect
                // value={selectedCities}
                // onChange={(e) => setSelectedCities(e.value)}
                // options={cities}
                optionLabel="name"
                placeholder="Select "
                maxSelectedLabels={3}
                className="inpute"
              />
            </div>
            <div className="inpute-type">
              <span>Max File Size</span>
            </div>
            <div>
              <MultiSelect
                // value={selectedCities}
                // onChange={(e) => setSelectedCities(e.value)}
                // options={cities}
                optionLabel="name"
                placeholder="Select "
                maxSelectedLabels={3}
                className="inpute"
              />
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
                  label="Update"
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

export default UpdateRecords;
