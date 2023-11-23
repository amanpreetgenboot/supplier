import React from "react";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import "../components/updateRecords.css";
import "../components/DocumentMaster"
import { Dialog } from 'primereact/dialog';
import { useState, useEffect } from "react";



const UpdateRecords = () => {
 

  const [format, setFormat] = useState([]);
  const [document, setDocument] = useState([]);
  const [category,setCategory] = useState([])
  const [cat, setCat] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectMin, setSelectMin] = useState([]);

  const [selectMax, setSelectMax] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  console.log(selectMin,"min")
  console.log(selectMax,"max")




  const onHideSuccessPopup = () => {
    // Hide the success popup
    setShowSuccessPopup(false);
  };
  const minSize = [
    { name: '50KB', id: 1 },
    { name: '100KB', id: 2 },
    { name: '250KB', id: 3 },
    { name: '500KB', id: 4 },
    { name: '1MB', id: 5 }
];

const maxSize = [
  { name: '2MB', id: 1 },
  { name: '3MB', id: 2 },
  { name: '4MB', id: 3 },
  { name: '5MB', id: 4 }
];

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo0LCJleHAiOjE3MDA3MzA3ODksImlhdCI6MTcwMDcxNjM4OX0.k02EyfK6dxmLnXmUaNEyVOLbnAn9KJWsifZo_9ntj0TTsRz-CsGguDnDs70-AFlcm03T3o4UtUs5vbB112prkw";

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/documenttype",
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
        const data =result.beans.map((bean)=> ({name: bean.documentType, id: bean.id}))
        setFormat(data);

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
          "https://dev.supplychainapi.hexalytics.in:8086/v1/oms/metaData/documentcategory",
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
        const category =result.beans.map((bean)=> bean.category)
       setCategory(category)
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);



  const fetchData = async () => {
    const token =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc2luZ2hAaGV4YWx5dGljcy5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo0LCJleHAiOjE3MDA3MzA3ODksImlhdCI6MTcwMDcxNjM4OX0.k02EyfK6dxmLnXmUaNEyVOLbnAn9KJWsifZo_9ntj0TTsRz-CsGguDnDs70-AFlcm03T3o4UtUs5vbB112prkw";

    
      try {
        
        console.info(selectMax);
        const payload = {
          documentName: 'Return Merchandise',
          documentTypes: selected,
          category: { id: 1, name: 'Supporting Document' },
          minFileSize: selectMin?.[0]?.name,
          maxFileSize: selectMax?.[0]?.name,
        };

        const response = await fetch(
          'https://dev.supplychainapi.hexalytics.in:8086/v1/oms/documentmaster/save/8',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result, "result here"); 

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };
  

  const handleButtonClick = () => {
    
    fetchData();
    setButtonClicked(true);
   
    setShowSuccessPopup(true);
  };
   
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
               value={document}
               onChange={(e) => setDocument(e.value)}
               options={category}
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
              value={selected}
              onChange={(e) => {
                setSelected(e.value)
              }}
              options={format}
              placeholder="Select"
              className="inpute"
              optionLabel="name"
              />
            </div>

            <div className="inpute-type">
              <span>
              Category <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <div>
              <MultiSelect
                 value={cat}
                 onChange={(e) => setCat(e.value)}
                options={category}
                placeholder="Select"
                className="inpute"
              />
            </div>

            <div className="inpute-type">
              <span>Min File Size</span>
            </div>
            <div>
              <MultiSelect
               value={selectMin}
               onChange={(e) => { setSelectMin(e.value)}}
               options={minSize.map(option => ({ label: option.name, value: option }))}
                placeholder="Select "
                className="inpute"
                maxSelectedLabels={1}
              />
            </div>
            <div className="inpute-type">
              <span>Max File Size</span>
            </div>
            <div>
              <MultiSelect
                
                value={selectMax}
                onChange={(e) => setSelectMax(e.value)}
                options={maxSize.map(option => ({ label: option.name, value: option }))}
                placeholder="Select "
                className="inpute"
                maxSelectedLabels={1}
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
           
                <Button
                onClick={handleButtonClick}
                  label="Update"
                  severity="success"
                  className="footer-btn"
                />

<Dialog
        visible={showSuccessPopup}
        onHide={onHideSuccessPopup}
        header="Success"
      >
        <div>Update was successful!</div>
      </Dialog>
       
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
};

export default UpdateRecords;
