import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import "../components/AddUser.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const AddUsers = () => {
  const [levels, setLevels] = useState(null);
  const [selected, setSelected] = useState(null);
  const [Departments, setDepartments] = useState(null);
  const [selectedDepartments, setselectedDepartments] = useState(null);
  const [DocumentAccess, setDocumentAccess] = useState(null);
  const [selctedDocumentAccess, setselectedDocumentAccess] = useState(null);
  const [Countries, setCountries] = useState(null);
  const [selectedCountries, setselectedCountries] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [selectedvendor, setselectedVendor] = useState(null);
  const [productGroup, setproductGroup] = useState(null);
  const [selectedProductGroup, setselectedProductGroup] = useState(null);
  const [approvalRights, setApprovalRights] = useState(null);
  const [employeeId, setEmployeeId] = useState("");

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk0NTAxNzAsImlhdCI6MTY5OTQzNTc3MH0._ut-u_6vVRZzaHvL1DALsRUtqk4qcLyzSGQ-JYN4jc-Vh5uXUVTAg4RVCUZ7JIopLJ3HAWp28I8SyR8iyn53WQ"; 

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/level",
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
        const levelNames = result.beans.map((bean) => bean.level_name);

        setLevels(levelNames);
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
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk0NTAxNzAsImlhdCI6MTY5OTQzNTc3MH0._ut-u_6vVRZzaHvL1DALsRUtqk4qcLyzSGQ-JYN4jc-Vh5uXUVTAg4RVCUZ7JIopLJ3HAWp28I8SyR8iyn53WQ"; // Replace with your actual access token

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/department",
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
        const department = result.beans.map((bean) => bean.name);
        setDepartments(department);
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
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk0NTAxNzAsImlhdCI6MTY5OTQzNTc3MH0._ut-u_6vVRZzaHvL1DALsRUtqk4qcLyzSGQ-JYN4jc-Vh5uXUVTAg4RVCUZ7JIopLJ3HAWp28I8SyR8iyn53WQ"; // Replace with your actual access token

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/docrights",
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
        const access = result.beans.map((bean) => bean.name);
        setDocumentAccess(access);
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
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk0NTAxNzAsImlhdCI6MTY5OTQzNTc3MH0._ut-u_6vVRZzaHvL1DALsRUtqk4qcLyzSGQ-JYN4jc-Vh5uXUVTAg4RVCUZ7JIopLJ3HAWp28I8SyR8iyn53WQ"; 

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
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk0NTAxNzAsImlhdCI6MTY5OTQzNTc3MH0._ut-u_6vVRZzaHvL1DALsRUtqk4qcLyzSGQ-JYN4jc-Vh5uXUVTAg4RVCUZ7JIopLJ3HAWp28I8SyR8iyn53WQ"

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
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo1LCJleHAiOjE2OTk0NTAxNzAsImlhdCI6MTY5OTQzNTc3MH0._ut-u_6vVRZzaHvL1DALsRUtqk4qcLyzSGQ-JYN4jc-Vh5uXUVTAg4RVCUZ7JIopLJ3HAWp28I8SyR8iyn53WQ"

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

  const approval = [{ name: "yes" }, { name: "no" }];

  const handleEmployeeIdChange = (e) => {
    const input = e.target.value;
    // Allow only numeric input
    const numericInput = input.replace(/[^0-9]/g, "");
    setEmployeeId(numericInput);
  };
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
                Employee ID <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div className="inpute-hover">
              <InputText
                placeholder="Type here"
                className="inpute"
                value={employeeId}
                onChange={handleEmployeeIdChange}
              />
            </div>
            <div className="inpute-type">
              <span>
                Employee Name <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div className="inpute-hover">
              <InputText placeholder="Type here" className="inpute" />
            </div>
            <div className="inpute-type">
              <span>
                Employee Email <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div className="inpute-hover">
              <InputText
                placeholder="Enter Email"
                type="email"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>
                Employee Level <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={selected}
                onChange={(e) => setSelected(e.value)}
                options={levels}
                placeholder="Select"
                className="inpute"
              />
            </div>
            <div className="inpute-type">
              <span>
                Department <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={selectedDepartments}
                onChange={(e) => setselectedDepartments(e.value)}
                options={Departments}
                placeholder="Select"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>
                Document Access Type <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={selctedDocumentAccess}
                onChange={(e) => setselectedDocumentAccess(e.value)}
                options={DocumentAccess}
                placeholder="Select"
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
                Vendor <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={selectedvendor}
                onChange={(e) => setselectedVendor(e.value)}
                options={vendor}
                placeholder="Select "
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
              <span>Approval Rights</span>
              <span>
                {" "}
                Vendor <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                value={approvalRights}
                onChange={(e) => setApprovalRights(e.value)}
                options={approval}
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
              <Link to={"./config"}>
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

export default AddUsers;
