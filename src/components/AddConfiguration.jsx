import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import "../components/addConfig.css"
import { useState } from "react"
import { Link } from 'react-router-dom';
const AddConfiguration = () => {

  const [selectedCities, setSelectedCities] = useState(null);

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
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

              <Button label="Close" icon="pi pi-times" iconPos="right" severity="success" className='header-btn' />

            </div>
          </div>


          <div className="inpute-section">
            <div className='inpute-type'>
              <span>Employee ID <span style={{ color: "red" }}>*</span></span>
            </div>
            <div className='inpute-hover'>
              <InputText placeholder='Enter Employee id' className='inpute' />

            </div>
            <div className='inpute-type'>
              <span>Employee Name <span style={{ color: "red" }}>*</span></span>

            </div>
            <div className='inpute-hover'>
              <InputText placeholder='Enter Name' className='inpute' />

            </div>
            <div className='inpute-type'>
              <span>Employee Email <span style={{ color: "red" }}>*</span></span>

            </div>
            <div className='inpute-hover'>
              <InputText placeholder='Enter Email' type='email' className='inpute' />

            </div>


            <div className='inpute-type'>
              <span>Employee Level <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>Department <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>

            <div className='inpute-type'>
              <span>Document Access Type  <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>Country <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>Vendor <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>Product Group <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>End User Type</span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>Approval Rights <span style={{ color: "red" }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>
            <div className='inpute-type'>
              <span>Approval Amount <span style={{ color: "red", }}>*</span></span>

            </div>
            <div>

              <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                placeholder="Select " maxSelectedLabels={3} className="inpute" />

            </div>

          </div>
          <div className="footer">
            <div className="btn-footer">

              <Button label="Cancel" severity="secondary" text raised className='footer-btn' style={{ backgroundColor: "white" }} />
              <Link to={"./config"}>

              <Button label='Create' severity="success" className='footer-btn' />
              </Link>


            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default AddConfiguration;
