import React,{useState} from 'react'
import './App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const  HomePage = () => {
      const [startDate, setStartDate] = useState(new Date());

      const [legendData, setLegendData] = useState({
            isProcurementInvolvement: "",
            isProcurementDiligence:"",
            isRequestLegalDepartment:"",
            isCapitalAppropriationRequest:"",
            legendBiotechContracting:"",
            legendSubmittingDepartment:'',
            legalNameOfOtherParty:'',
            legendAddressOfOtherParty:'',
            legendContactOneNameAndEmail:'',
            legalNameOfOtherPartyToContractTwo:'',
            legendAddressOfOtherPartyToContractTwo:'',
            legendContactOneNameAndEmailToContractTwo:'',
            isThisRelatetoExistAgr:'',
            isConfidentialityAgreement:''
            
      })
      const[legendDetails, setLegendDetails] = useState([]);

      const handleChange = (e) => {
            console.log(e.target.value);
            const name = e.target.name;
            const value = e.target.value;
            setLegendData({ ...legendData, [name]: value });
      };

       const handleSubmit = (e) => {
            e.preventDefault();
             if (legendData.isProcurementInvolvement && 
                  legendData.isProcurementDiligence && 
                  legendData.isRequestLegalDepartment && 
                  legendData.isCapitalAppropriationRequest &&
                  legendData.legendBiotechContracting &&
                  legendData.legendSubmittingDepartment &&
                  legendData.legalNameOfOtherParty &&
                  legendData.legendAddressOfOtherParty && 
                  legendData.legendContactOneNameAndEmail &&
                  legendData.legalNameOfOtherPartyToContractTwo &&
                  legendData.legendAddressOfOtherPartyToContractTwo &&
                  legendData.legendContactOneNameAndEmailToContractTwo &&
                  legendData.isThisRelatetoExistAgr &&
                  legendData.isConfidentialityAgreement) {
             const newLegendData = { ...legendData, id: new Date().getTime().toString() };
             setLegendDetails([...legendDetails, newLegendData]);
             setLegendData({ 
                   isProcurementInvolvement: '', 
                   isProcurementDiligence: '',
                   isRequestLegalDepartment:'',
                   isCapitalAppropriationRequest:'',
                   legendBiotechContracting:'',
                   legendSubmittingDepartment:'',
                   legalNameOfOtherParty:'',
                   legendAddressOfOtherParty:'',
                   legendContactOneNameAndEmail:'',
                   legalNameOfOtherPartyToContractTwo:'',
                   legendAddressOfOtherPartyToContractTwo:'',
                   legendContactOneNameAndEmailToContractTwo:'',
                   isThisRelatetoExistAgr:'',
                   isConfidentialityAgreement:''
                  });
             
      }
      console.log(legendData);
      console.log(legendDetails); 
      console.log(startDate);
  };

  return (
    <>
    <article>
        <form className="form">
            <div className="container">
                 <div className="form-intake">
                        <h1>LEGAL CONTRACT INTAKE FORM</h1>
                        <p><b>Please complete and email this form to LegalContracts@LegendBiotech.com and include any relevant attachments (such as
                        previous agreements, proposed slides, proposed contracts and SOWs, and a description of the proposed terms of business, if
                        available.</b></p>
                  </div>

                 <div className="form-flex">
                        <label><b>Today's Date</b></label>
                         <DatePicker 
                              selected={startDate} 
                              onChange={(date) => setStartDate(date)} />
                        <br />
                 </div>
                
                 <div className="form-flex" onChange={handleChange}>
                        <label><b>Procurement</b></label>
                        <label><b>Is Procurement Involvement Required?</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Yes" 
                                    id="isProcurementInvolvement"  
                                    name="isProcurementInvolvement" /> Yes </label>
                        <label><input 
                                    type="radio" 
                                    value="No" 
                                    id="isProcurementInvolvement"  
                                    name="isProcurementInvolvement" /> No </label>
                        <br />
                </div>
                
                  <div className="form-flex" onChange={handleChange}>       
                        <label><b>Is Procurement Diligence Substantially Completed?</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Yes" 
                                    id="isProcurementDiligence"  
                                    name="isProcurementDiligence" /> Yes</label>
                        <label><input 
                                    type="radio" 
                                    value="No" 
                                    id="isProcurementDiligence" 
                                    name="isProcurementDiligence" /> No</label>
                        <br />
                 </div> 
                 <div  className="form-flex">
                        <p>
                              <b>Note: If you answered “No” to the question above and Procurement Diligence is required, please do not submit this form until Procurement Diligence is substantially completed.</b>
                        </p>
                        <br />
                </div>
                
                <div  className="form-flex" onChange={handleChange}>
                        <label><b>Request</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Legal Department reviews contract provided other party"
                                    name="isRequestLegalDepartment"  
                                    id="isRequestLegalDepartment"/>Legal Department reviews contract provided other party(ies)*</label>
                        <label><input 
                                    type="radio" 
                                    value="Legal Department prepares a contracts" 
                                    name="isRequestLegalDepartment"
                                    id="isRequestLegalDepartment" />Legal Department prepares a contracts</label>
                        <p>
                              <b>*Note: for Confidentiality Agreements and Services Agreement, preference is to use Legend Biotech forms.</b>
                        </p>   
                 </div>
            
                  <div  className="form-flex"  onChange={handleChange}>
                        <label><b>Capital Appropriation Request (CAR) Process</b></label>
                        <label><b>Is this a Capital Appropriation Request(CAR) related expenditure?</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Yes, Capital Appropriation Request destination" 
                                    name="isCapitalAppropriationRequest" 
                                    id="isCapitalAppropriationRequest" />Yes, Capital Appropriation Request destination</label>
                       <label><input 
                                    type="radio" 
                                     value="Yes, Capital Appropriation Request approval in process" 
                                     name="isCapitalAppropriationRequest" 
                                     id="isCapitalAppropriationRequest" />Yes, Capital Appropriation Request approval in process</label> 
                        <label><input 
                                    type="radio" 
                                    value="no" 
                                    name="isCapitalAppropriationRequest" 
                                    id="isCapitalAppropriationRequest" />No</label>
                        <p>
                              <b>*Note: if a Capital Appropriation Request related expenditure, Capital
                              Appropriation Request approval must be in-place before contract execution.</b>
                        </p>
                              
                  </div>

                  <div className="form-flex">
                        <label><b>General</b></label>
                        <br />
                  </div>            
              
               
                  <div className="form-flex">
                        <label><b>Legend Biotech Contracting Entity</b></label> 
                        <input 
                              type="text" 
                              placeholder="Legend Biotech Contracting Entity" 
                              name="legendBiotechContracting"
                              id="legendBiotechContracting"
                              value={legendData.legendBiotechContracting} 
                              onChange={handleChange}/>
                  </div>
                      
                
                  <div  className="form-flex">
                        <label><b>Submitting Department</b></label> 
                        <input 
                              type="text" 
                              placeholder="Submitting Department" 
                              name="legendSubmittingDepartment"
                              id="legendSubmittingDepartment" 
                              value={legendData.legendSubmittingDepartment} 
                              onChange={handleChange} />
                  </div>
                
                  <div className="form-flex">
                        <label><b>Legal Name of Other Party to Contract 1</b></label> 
                        <input 
                              type="text" 
                              placeholder="Legal Name of Other Party to Contract 1" 
                              name="legalNameOfOtherParty" 
                              id="legalNameOfOtherParty"
                              value={legendData.legalNameOfOtherParty}
                              onChange={handleChange} />
                  </div>
                
                 <div className="form-flex">
                        <label><b>Full Address of Other Party to Contract 1</b></label> 
                        <input 
                              type="text" 
                              placeholder="Full Address of Other Party to Contract 1" 
                              name="legendAddressOfOtherParty"
                              id="legendAddressOfOtherParty"
                              value={legendData.legendAddressOfOtherParty}
                              onChange={handleChange} />
                 </div>
                
                <div className="form-flex">
                        <label><b>Other Party to Contract 1 Contact Name and Email</b></label> 
                        <input 
                              type="text" 
                              placeholder="Other Party to Contract 1 Contact Name and Email" 
                              name="legendContactOneNameAndEmail"
                              id="legendContactOneNameAndEmail"
                              value={legendData.legendContactOneNameAndEmail} 
                              onChange={handleChange} />
                </div>
                
                 <div className="form-flex">
                        <label><b>Legal Name of Other Party to Contract 2</b></label> 
                        <input 
                              type="text" 
                              placeholder="Legal Name of Other Party to Contract 2" 
                              name="legalNameOfOtherPartyToContractTwo"
                              id="legalNameOfOtherPartyToContractTwo"
                              value={legendData.legalNameOfOtherPartyToContractTwo}
                              onChange={handleChange}/>
                 </div>
                
                <div className="form-flex">
                        <label><b>Full Address of Other Party to Contract 2</b></label> 
                         <input 
                              type="text" 
                              placeholder="Full Address of Other Party to Contract 2" 
                              name="legendAddressOfOtherPartyToContractTwo"
                              id="legendAddressOfOtherPartyToContractTwo"
                              value={legendData.legendAddressOfOtherPartyToContractTwo}
                              onChange={handleChange}  />
                </div>
                
                <div className="form-flex">
                        <label><b>Other Party to Contract 2 Contact Name and Email</b></label> 
                        <input 
                              type="text" 
                              placeholder="Other Party to Contract 2 Contact Name and Email" 
                              name="legendContactOneNameAndEmailToContractTwo"
                              id="legendContactOneNameAndEmailToContractTwo"
                              value={legendData.legendContactOneNameAndEmailToContractTwo} 
                              onChange={handleChange}/>
                </div>
                
            <div className="form-flex">
                  <label><b>Does this relate to an existing agreement(s) with the other party(ies) (if so, describe how)?:</b></label> 
                        <input 
                              type="text" 
                              placeholder="Does this relate to an existing agreement(s)..." 
                              name="isThisRelatetoExistAgr"
                              id="isThisRelatetoExistAgr" 
                              value={legendData.isThisRelatetoExistAgr}
                              onChange={handleChange} />    
            </div>
                
                  <div className="form-flex" onChange={handleChange}>
                              <label><b>Is there a Confidentiality Agreement between the contracting Legend Biotech entity and the other party(ies)?</b></label>
                              <label><input 
                                          type="radio" 
                                          value="Yes" 
                                          name="isConfidentialityAgreement" 
                                          id="isConfidentialityAgreement"/>Yes</label>
                              <label><input 
                                          type="radio" 
                                          value="No" 
                                          name="isConfidentialityAgreement"
                                          id="isConfidentialityAgreement"  
                                          />No</label>
                              <label><input 
                                          type="radio" 
                                          value="Unknown" 
                                          name="isConfidentialityAgreement"
                                          id="isConfidentialityAgreement"  />Unknown</label>
                  </div>
                
                 <div  className="form-flex" onChange={handleChange}>
                              <label><b>Has a Sanctions Check been performed on the other contracting party?</b></label>
                                    <label><input 
                                                type="radio" 
                                                value="Yes" 
                                                name="isSanctionsCheck"
                                                id="isSanctionsCheck" />Yes</label>
                                    <label><input 
                                                type="radio" 
                                                value="No" 
                                                name="isSanctionsCheck"
                                                id="isSanctionsCheck" />No</label> 
                 </div>
                 
                  <div className="form-flex">
                                    <p><b>Note: A Sanctions Check is required for all contracts, except for CDA requests. Procurement is responsible for performing a
                                    Sanctions Check on all contracting parties, including for contracts that do not otherwise require Procurement involvement. For
                                    contracts that do not require Procurement involvement, the name of the other contracting party(ies) should be sent to
                                    Procurement to perform a Sanctions Check prior to submitting this form.</b></p> 
                  </div>
               
                  <div  className="form-flex">
                        <label ><b>Expected Start Date of Contract </b></label> 
                        <input type="text" placeholder="Please type here" name="uname" />  
                  </div>
                
                <div className="form-flex">
                      <label><b>Expected End Date of Contract</b></label>
                      <input type="text" placeholder="Expected End Date of Contract" name="expectedDate" />
                </div>
               
                <div className="form-flex">
                    <label><b> Type of Contract </b></label>
                    <label><input type="checkbox"  name="typeOfContract" /> Confidentiality Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Supply Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Services Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Material Transfer Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Collaboration Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> SOW or Work Order under Master Services Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> HCP Consulting Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Non-HCP Consulting Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Software License Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Quality Agreement </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Amendment/Extension to any of the foregoing (if so, provide existing agreement) </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Termination to any of the foregoing (if so, provide existing agreement) </label>
                    <label><input type="checkbox"  name="typeOfContract" /> Other </label>
                    <br />
                </div>
              
                <div className="form-flex">
                      <label><b>If Other is selected above, please indicate contract type.</b></label>
                      <input type="text" placeholder="If Other is selected above, please indicate contract type." name="ifOther" />
                </div>
                
                <div className="form-flex">
                      <label><b>Contract renewed automatically (evergreen) or upon mutual agreement?</b></label>
                      <label><input type="radio"  name="remember" />Automatic renewal</label>
                      <label><input type="radio"  name="remember" />Mutual agreement </label>
                      <br />
                </div>

                <div className="form-flex">
                      <label><b>Total Contract Dollar Amount</b></label>
                      <input type="text" placeholder="Total Contract Dollar Amount" name="totalContract" />
                </div>
                
                <div className="form-flex">
                      <div className="form-note">
                        <label><h3>For HCP Contracts Only</h3></label>
                      </div>
                      <label><b>Hourly Rate</b></label>
                      <input type="text" placeholder="Hourly Rate" name="hourlyRate" />
                      <label><b>Maximum Number of Hours</b></label>
                      <input type="text" placeholder="Maximum Number of Hours" name="maxHours" />
                </div>
                

                <div className="form-flex">
                    <label><b>Business Unit Approver</b></label>
                    <input type="text" placeholder="Business Unit Approver" name="unitApprover" />
                </div>
                
                <div className="form-flex">
                      <div className="form-note">
                        <label><b>Note: Contract approver follows designated DOA guideline based on projected contract value</b></label>
                        <br />
                      </div>
                </div>  

                <div className="form-flex">
                      <label><b>Business Unit Representative</b></label>
                      <input type="text" placeholder="Business Unit Representative" name="unitRep" />
                </div>
                
                <div className="form-flex">
                      <label><b>Procurement Representative (if applicable)</b></label>
                      <input type="text" placeholder="Procurement Representative (if applicable)" name="proRep" />
                </div>
                


                <div className="form-flex">
                    <label><b>For supply or service Contracts, provide a detailed description of the purpose and scope of the Contract (including any requested amendment/extension to existing Contract), including a description of any goods or services</b></label>
                    <input type="text" placeholder="For supply or service Contracts..." name="supplyService" />
                </div>
                
                <div className="form-flex">
                    <label><b>Describe specific materials being provided by Legend Biotech, if any. </b></label>
                    <input type="text" placeholder="Describe specific materials being provided by Legend Biotech, if any." name="speMaterial" />
                </div>

                

                <div className="form-flex">
                      <label>
                        <b>For Confidentiality Agreements Only
                          State the purpose of the transaction, specific confidential information being shared by each party or indicate for general discussion.
                        </b>
                      </label>
                      <br />
                      <label><b>Purpose of Transaction: </b></label>
                      <input type="text" placeholder="Purpose of Transaction" name="purTrans"  />
                      <label><b>Legend Confidential Information:  </b></label>
                      <input type="text" placeholder="Legend Confidential Information" name="legConf"  />
                      <label><b>Other Party Confidential Information: </b></label>
                      <input type="text" placeholder="Other Party Confidential Information" name="partyConf"  />
                </div>

                  <div className="form-flex">
                        <label>
                          <b> For all agreements other than Confidentiality Agreements: Is any confidential       information being shared, including employee information, proprietary information and other non-public information? 
                          </b>
                        </label>
                        <label><input type="radio"  name="confidentiality" /> Yes </label>
                        <label><input type="radio"  name="confidentiality" /> No </label>
                        <br />
                  </div>

                  <div className="form-flex">
                      <label>
                        <b>If yes, what type of confidential information will be shared by either party.
                        </b>
                      </label>
                      <label><b>Legend Confidential Information: </b></label>
                      <input type="text" placeholder="Legend Confidential Information" name="legendConf"  />
                      <label><b>Other Party Confidential Information:  </b></label>
                      <input type="text" placeholder="Other Party Confidential Information" name="otherPartyConf"  />
                  </div>

                 <div className="form-flex">
                        <label>
                          <b> Do the other party(ies), collect, record, store, use, view, disclose or transmit (i.e. process) any personal data (for example, employee name, patient names, email, ID, customer names etc.) on behalf of Legend Biotech? 
                          </b>
                        </label>
                        <label><input type="radio"  name="collect" /> Yes </label>
                        <label><input type="radio"  name="collect" /> No </label>
                        <br />
                  </div>

                  <div className="form-flex">
                      <label><b>If yes, what type of personal data will be shared.</b></label>
                      <input type="text" placeholder="If yes, what type of personal data will be shared." name="personal data"  />
                  </div> 

                  <div className="form-flex-btn">
                        <button type="submit" >Save</button>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                  </div>
            </div>
        </form>
        </article>
        <article>
        {legendDetails.map((data)=>{
                 return (
                <div key={data.id}>
                <h4>{data.isProcurementDiligence}</h4>
                <h4>{data.isProcurementInvolvement}</h4>
                </div>
                )
                })}
      </article>
    </>
  )
}

export default HomePage