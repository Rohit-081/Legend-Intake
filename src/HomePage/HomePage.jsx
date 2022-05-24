import React from 'react'
import './App.css'

function HomePage() {
  return (
    <>
        <form className="form-control">
            <div className="container">
                 <div className="form-intake">
                        <h1>LEGAL CONTRACT INTAKE FORM</h1>
                        <p><b>Please complete and email this form to LegalContracts@LegendBiotech.com and include any relevant attachments (such as
                        previous agreements, proposed slides, proposed contracts and SOWs, and a description of the proposed terms of business, if
                        available.</b></p>
                  </div> 
                 <div className="form-flex">
                        <label for="date"><b>Today's Date</b></label>
                        <input type="date" placeholder="Enter date" name="date" required />
                        <br />
                 </div>
                
                <div className="form-flex">
                        <label><b>Procurement</b></label>
                        <label for="procure"><b>Is Procurement Involvement Required?</b></label>
                        <label>
                        <input type="radio" value="yes" name="Pro" /> Yes 
                        </label>
                        <label htmlFor="">
                              <input type="radio" value="no" name="Pro" /> No 
                        </label>
                        <br />
                </div>
                
                  <div className="form-flex">       
                        <label for="procure"><b>Is Procurement Diligence Substantially Completed?</b></label>
                        <label>
                              <input type="radio" value="yes" name="Pro" /> Yes
                        </label>
                        <label htmlFor="">
                              <input type="radio" value="no" name="Pro" /> No
                        </label>
                        <br />
                </div>

                <div  className="form-flex">
                        <p><b>Note: If you answered “No” to the question above and Procurement Diligence is required, please do not submit this form until
                        Procurement Diligence is substantially completed.</b></p>
                </div>
                
                <div  className="form-flex">
                        <label for="procure"><b>Request</b></label>
                        <label>
                        <input type="radio" value="yes" name="Pro" /> Legal Department reviews contract provided other party(ies)* </label>
                       <label> <input type="radio" value="no" name="Pro" /> Legal Department prepares a contracts
                        </label>
                        <p><b>*Note: for Confidentiality Agreements and Services Agreement, preference is to
                        use Legend Biotech forms.</b></p>
                        
                 </div>
            
                  <div  className="form-flex">
                        <label><b>Capital Appropriation Request (CAR) Process</b></label>
                        <label for="procure"><b>Is this a Capital Appropriation Request(CAR) related expenditure?</b></label>
                        <label>
                        <input type="radio" value="yes" name="Pro" /> Yes, Capital Appropriation Request destination</label>
                       <label htmlFor=""><input type="radio" value="yes" name="Pro" /> Yes, Capital Appropriation Request destination</label> 
                        <label htmlFor=""><input type="radio" value="no" name="Pro" /> No</label>
                        <p><b>*Note: if a Capital Appropriation Request related expenditure, Capital
                              Appropriation Request approval must be in-place before contract execution.</b></p>
                              
                  </div>

                  <div className="form-flex">
                        <label><b>General</b></label>
                  </div>            
              
               
                  <div className="form-flex">
                        <label for="uname"><b>Legend Biotech Contracting Entity </b></label> 
                        <input type="text" placeholder="Legend Biotech Contracting Entity" name="uname" required />
                  </div>
                      
                
                  <div  className="form-flex">
                        <label for="uname"><b>Submitting Department </b></label> 
                        <input type="text" placeholder="Submitting Department" name="uname" required />
                  </div>
                
                  <div className="form-flex">
                        <label for="uname"><b>Legal Name of Other Party to Contact 1 </b></label> 
                        <input type="text" placeholder="Legal Name of Other Party to Contact 1" name="uname" required />
                  </div>
                
                 <div className="form-flex">
                        <label for="uname"><b>Full Address of Other Party to Contract 1 </b></label> 
                        <input type="text" placeholder="Full Address of Other Party to Contract 1" name="uname" required />
                 </div>
                
                <div className="form-flex">
                        <label for="uname"><b>Other Party to Contract 1 Contact Nameand Email </b></label> 
                        <input type="text" placeholder="Other Party to Contract 1 Contact Nameand Email" name="uname" required />
                </div>
                
                 <div className="form-flex">
                        <label for="uname"><b>Legal Name of Other Party to Contract 2 </b></label> 
                        <input type="text" placeholder="Legal Name of Other Party to Contract 2" name="uname" required />
                 </div>
                
                <div className="form-flex">
                        <label for="uname"><b>Full Address of Other Party to Contract 2  </b></label> 
                         <input type="text" placeholder="Full Address of Other Party to Contract 2" name="uname" required />
                </div>
                
                <div className="form-flex">
                        <label for="uname"><b>Other Party to Contract 2 Contact Name and Email</b></label> 
                        <input type="text" placeholder="Other Party to Contract 2 Contact Name and Email" name="uname" required />
                </div>
                
            <div className="form-flex">
                  <label for="uname"><b>Does this relate to an existing agreement(s) with the other party(ies) (if so, describe how)?:</b></label> 
                 <label><input type="text" placeholder="Does this relate to an existing agreement(s)..." name="uname" required /></label> 
            </div>
                
                  <div className="form-flex">
                              <label for="procure"><b>Is there a Confidentiality Agreement between the contracting Legend Biotech entity and the other party(ies)?</b> </label>
                              <label htmlFor=""><input type="radio" value="yes" name="Pro" /> Yes</label>
                              <label htmlFor=""><input type="radio" value="no" name="Pro" /> No</label>
                              <label htmlFor=""><input type="radio" value="unknow" name="Pro" /> Unknown</label>
                  </div>
                
                 <div  className="form-flex">
                              <label for="procure"><b>Has a Sanctions Check been performed on the other contracting party?</b></label>
                
                <label htmlFor=""><input type="radio" value="yes" name="Pro" /> Yes</label>
                <label><input type="radio" value="no" name="Pro" /> No
                </label> 
                 </div>
                 
                  <div className="form-flex">
                                    <p><b>Note: A Sanctions Check is required for all contracts, except for CDA requests. Procurement is responsible for performing a
                                    Sanctions Check on all contracting parties, including for contracts that do not otherwise require Procurement involvement. For
                                    contracts that do not require Procurement involvement, the name of the other contracting party(ies) should be sent to
                                    Procurement to perform a Sanctions Check prior to submitting this form.</b></p> 
                  </div>
               
                  <div  className="form-flex">
                        <label for="uname"><b>Expected Start Date of Contract </b></label> 
                        <input type="text" placeholder="Please type here" name="uname" required />  
                  </div>
                
                <div className="form-flex">
                      <label><b>Expected End Date of Contract</b></label>
                      <input type="text" placeholder="Expected End Date of Contract" name="expectedDate" required />
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
                      <input type="text" placeholder="If Other is selected above, please indicate contract type." name="ifOther" required />
                </div>
                
                <div className="form-flex">
                      <label><b>Contract renewed automatically (evergreen) or upon mutual agreement?</b></label>
                      <label><input type="radio"  name="remember" />Automatic renewal</label>
                      <label><input type="radio"  name="remember" />Mutual agreement </label>
                      <br />
                </div>

                <div className="form-flex">
                      <label><b>Total Contract Dollar Amount</b></label>
                      <input type="text" placeholder="Total Contract Dollar Amount" name="totalContract" required />
                </div>
                
                <div className="form-flex">
                      <div className="form-note">
                        <label><h3>For HCP Contracts Only</h3></label>
                      </div>
                      <label><b>Hourly Rate</b></label>
                      <input type="text" placeholder="Hourly Rate" name="hourlyRate" required />
                      <label><b>Maximum Number of Hours</b></label>
                      <input type="text" placeholder="Maximum Number of Hours" name="maxHours" required />
                </div>
                

                <div className="form-flex">
                    <label><b>Business Unit Approver</b></label>
                    <input type="text" placeholder="Business Unit Approver" name="unitApprover" required />
                </div>
                
                <div className="form-flex">
                      <div className="form-note">
                        <label><b>Note: Contract approver follows designated DOA guideline based on projected contract value</b></label>
                        <br />
                      </div>
                </div>  

                <div className="form-flex">
                      <label><b>Business Unit Representative</b></label>
                      <input type="text" placeholder="Business Unit Representative" name="unitRep" required />
                </div>
                
                <div className="form-flex">
                      <label><b>Procurement Representative (if applicable)</b></label>
                      <input type="text" placeholder="Procurement Representative (if applicable)" name="proRep" required />
                </div>
                


                <div className="form-flex">
                    <label><b>For supply or service Contracts, provide a detailed description of the purpose and scope of the Contract (including any requested amendment/extension to existing Contract), including a description of any goods or services</b></label>
                    <input type="text" placeholder="For supply or service Contracts..." name="supplyService" required />
                </div>
                
                <div className="form-flex">
                    <label><b>Describe specific materials being provided by Legend Biotech, if any. </b></label>
                    <input type="text" placeholder="Describe specific materials being provided by Legend Biotech, if any." name="speMaterial" required />
                </div>

                

                <div className="form-flex">
                      <label>
                        <b>For Confidentiality Agreements Only
                          State the purpose of the transaction, specific confidential information being shared by each party or indicate for general discussion.
                        </b>
                      </label>
                      <br />
                      <label><b>Purpose of Transaction: </b></label>
                      <input type="text" placeholder="Purpose of Transaction" name="purTrans" required />
                      <label><b>Legend Confidential Information:  </b></label>
                      <input type="text" placeholder="Legend Confidential Information" name="legConf" required />
                      <label><b>Other Party Confidential Information: </b></label>
                      <input type="text" placeholder="Other Party Confidential Information" name="partyConf" required />
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
                      <input type="text" placeholder="Legend Confidential Information" name="legendConf" required />
                      <label><b>Other Party Confidential Information:  </b></label>
                      <input type="text" placeholder="Other Party Confidential Information" name="otherPartyConf" required />
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
                      <input type="text" placeholder="If yes, what type of personal data will be shared." name="personal data" required />
                  </div>

                  <div className="form-flex-btn">
                        <button>Save</button>
                        <button>Submit</button>
                  </div>
            </div>
        </form>
    </>
  )
}

export default HomePage