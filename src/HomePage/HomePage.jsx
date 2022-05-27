import React,{useState, useEffect} from 'react'
import './App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  logo  from '../assets/images/LegendBiotech.jpg';

const  HomePage = () => {
      const [startDate, setStartDate] = useState(new Date());
      const [exStartDate, setExStartDate] = useState(new Date());
      const [exEndDate, setExEndDate] = useState(new Date());

      const [selectedFile, setSelectedFile] = useState([]);
	const [isFilePicked, setIsFilePicked] = useState(false);
      const [legendDetails, setLegendDetails] = useState([]);

      const sessionData = JSON.parse(localStorage.getItem('UserInfo')) || [];
      console.log("UserId", sessionData.userId);
      console.log("UserName", sessionData.userName);
      console.log("Email", sessionData.email)

      const url = `http://localhost:3000/api/vi/forms?formID=&userID=${sessionData.userId}`;


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
            isConfidentialityAgreement:'',
            isSanctionsCheck:'',
            istypeOfContract:'',
            isIfAny:'',
            isAutomaticRenewal:'',
            isContractAmount:'',
            isHourlyRate:'',
            isMaxHours:'',
            unitApprover:'',
            unitRep: '',
            isProRep: '',
            supplyServiceContract: '',
            specificMaterial: '',
            PurposeTrans: '',
            legendConfInfo: '',
            otherConfInfo: '',
            isConfidentiality:'',
            legendConfidentialInfo:'',
            otherPartyConf:'',
            isCollect:'',
            personalDataType:''
            
      })

      const getUsers =  async () => {
            console.log(url);
            const response =  await fetch(url);
            console.log(response);
            const users = await response.json();
            const usersData = users.formData;
            console.log(usersData);
            console.log(users.status);
            if(users.status === 200 && usersData){

                  setLegendData({...legendData ,
                        isProcurementInvolvement: usersData.proInvoloveRequired,
                        isProcurementDiligence: usersData.proDiligenceCompleted,
                        isRequestLegalDepartment: usersData.request,
                        isCapitalAppropriationRequest: usersData.carExpenditure,
                        legendBiotechContracting  : usersData.legendBiotechEntity,
                        legendSubmittingDepartment  : usersData.submittingDepartment,
                        legalNameOfOtherParty  : usersData.contract1LegalName,
                  })
            }
  };


      useEffect(()=>{      
           getUsers();
      },[]);
      
      const handleChange = (e) => {
            console.log(e.target.value);
            const name = e.target.name;
            const value = e.target.value;
            setLegendData({ ...legendData, [name]: value });
      };

      const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

      const handleSubmission = () => {
		const formData = new FormData();
		formData.append('attachments', selectedFile, selectedFile.name);
		fetch(
			'http://localhost:3000/api/vi/forms/uploads',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};



       const handleSubmit = (e) => {
            e.preventDefault();
            //   if ( legendData.isProcurementInvolvement && 
            //        legendData.isProcurementDiligence && 
            //        legendData.isRequestLegalDepartment && 
            //        legendData.isCapitalAppropriationRequest &&
            //        legendData.legendBiotechContracting &&
            //        legendData.legendSubmittingDepartment &&
            //        legendData.legalNameOfOtherParty &&
            //        legendData.legendAddressOfOtherParty && 
            //        legendData.legendContactOneNameAndEmail &&
            //        legendData.legalNameOfOtherPartyToContractTwo &&
            //        legendData.legendAddressOfOtherPartyToContractTwo &&
            //        legendData.legendContactOneNameAndEmailToContractTwo &&
            //        legendData.isThisRelatetoExistAgr &&
            //        legendData.isConfidentialityAgreement && 
            //        legendData.isSanctionsCheck &&
            //        legendData.istypeOfContract && 
            //       legendData.isIfAny && 
            //       legendData.isAutomaticRenewal && 
            //       legendData.isContractAmount &&
            //       legendData.isHourlyRate &&
            //       legendData.isMaxHours &&
            //       legendData.unitApprover &&
            //       legendData.unitRep &&
            //       legendData.isProRep &&
            //       legendData.supplyServiceContract &&
            //       legendData.specificMaterial &&
            //       legendData.PurposeTrans &&
            //       legendData.legendConfInfo &&
            //       legendData.otherConfInfo &&
            //       legendData.isConfidentiality &&
            //       legendData.legendConfidentialInfo &&
            //       legendData.otherPartyConf &&
            //       legendData.isCollect &&
            //       legendData.personalDataType) {
             const newLegendData = { ...legendData, id: new Date().getTime().toString(), enteredDate: startDate, expectedStartDate: exStartDate, expectedEndtDate : exEndDate, attachedFile: selectedFile };
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
                   isConfidentialityAgreement:'',
                   isSanctionsCheck:'',
                   istypeOfContract:'',
                   isIfAny:'',
                   isAutomaticRenewal:'',
                   isContractAmount:'',
                   isHourlyRate:'',
                   isMaxHours:'',
                   unitApprover:'',
                   unitRep:'',
                   isProRep: '',
                   supplyServiceContract:'',
                   specificMaterial:'',
                   PurposeTrans: '',
                   legendConfInfo: '',
                   otherConfInfo: '',
                   isConfidentiality:'',
                   legendConfidentialInfo:'',
                   otherPartyConf: '',
                   isCollect: '',
                   personalDataType:''
                  });
             
      //  }else{
      //        alert("Fill all the fields!")
      //  }
      console.log(legendData);
      console.log(legendDetails); 
      console.log(startDate);
  };

  const PostData =  async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/vi/forms", {
              method: "POST",
              headers:{
                    "Content-Type" : "application/json"
              },
              body:JSON.stringify({
                  todaysDate : startDate,
                  proInvoloveRequired : legendData.isProcurementInvolvement,
                  proDiligenceCompleted : legendData.isProcurementDiligence, 
                  request : legendData.isRequestLegalDepartment, 
                  carExpenditure : legendData.isCapitalAppropriationRequest,
                  legendBiotechEntity : legendData.legendBiotechContracting,
                  submittingDepartment : legendData.legendSubmittingDepartment,
                  contract1LegalName : legendData.legalNameOfOtherParty,
                  contract1FullName : legendData.legendAddressOfOtherParty, 
                  contract1NameAndEmail : legendData.legendContactOneNameAndEmail,
                  contract2LegalName : legendData.legalNameOfOtherPartyToContractTwo,
                  contract2FullName : legendData.legendAddressOfOtherPartyToContractTwo,
                  contract2NameAndEmail : legendData.legendContactOneNameAndEmailToContractTwo,
                  existingAgreement: legendData.isThisRelatetoExistAgr,
                  confidentialityAgreement : legendData.isConfidentialityAgreement, 
                  sanctionsCheck : legendData.isSanctionsCheck,
                  contractStartDate: exStartDate,
                  contractEndDate: exEndDate,
                  contractType : legendData.istypeOfContract, 
                  otherContractType :legendData.isIfAny,
                  renewalOrAgreement : legendData.isAutomaticRenewal, 
                  contractAmount : legendData.isContractAmount,
                  hourlyRate : legendData.isHourlyRate,
                  maxiHours : legendData.isMaxHours,
                  businessUnitApprover : legendData.unitApprover,
                  businessUnitRepresentative : legendData.unitRep,
                  procurementRepresentative : legendData.isProRep,
                  contractPurposeScope : legendData.supplyServiceContract,
                  materialByLegend : legendData.specificMaterial,
                  transactionPurpose : legendData.PurposeTrans,
                  legendConfidentialInfo : legendData.legendConfInfo,
                  otherPartyConfidentialInfo : legendData.otherConfInfo,
                  isConfInfoShared : legendData.isConfidentiality,
                  nonConfidentialLegendInfo : legendData.legendConfidentialInfo,
                  nonConfidentialOtherPartyInfo : legendData.otherPartyConf,
                  isOtherPartyCollectInfo : legendData.isCollect,
                  otherPartySharedData : legendData.personalDataType,
                  attachments : selectedFile,
                  formStatus: "Submitted",
                  userId : sessionData.userId,
                  userName : sessionData.userName,
                  email: sessionData.email
              })
        });
        const data = await res.json();
        if(data.status === 200 && data){
              window.alert("Home Details Successful");
              console.log("Home Details Successful");
             
        }else{
               window.alert("Invalid Home Details");
              console.log("Invalid Home Details");
              
        }
  }

  return (
    <>
    <article>
        <form className="form" method="POST">
            <div className="container">
                 <div className="form-intake">
                       <img src={logo} height={200}
                              width={400}
                              alt=""
                              className="logo-img" />
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
                 </div>
                
                 <div className="form-flex" onChange={handleChange}>
                        <label className="form-section"><b>Procurement</b></label>
                        <br />
                        <label><b>Is Procurement Involvement Required?</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Yes" 
                                    id="isProcurementInvolvement"  
                                    checked={legendData.isProcurementInvolvement === "Yes"}
                                    name="isProcurementInvolvement" /> Yes </label>
                        <label><input 
                                    type="radio" 
                                    value="No"
                                    checked={legendData.isProcurementInvolvement === "No"}
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
                                    checked={legendData.isProcurementDiligence === "Yes"} 
                                    name="isProcurementDiligence" /> Yes</label>
                        <label><input 
                                    type="radio" 
                                    value="No" 
                                    id="isProcurementDiligence"
                                    checked={legendData.isProcurementDiligence === "No"}  
                                    name="isProcurementDiligence" /> No</label>
                        <br />
                 </div> 
                 <div  className="form-flex form-note">
                        <p>
                              <b>Note: If you answered “No” to the question above and Procurement Diligence is required, please do not submit this form until Procurement Diligence is substantially completed.</b>
                        </p>
                </div>
                
                <div  className="form-flex" onChange={handleChange}>
                        <label><b>Request</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Legal Department reviews contract provided other party"
                                    name="isRequestLegalDepartment" 
                                    checked={legendData.isRequestLegalDepartment === "Legal Department reviews contract provided other party"} 
                                    id="isRequestLegalDepartment"/>Legal Department reviews contract provided other party(ies)*</label>
                        <label><input 
                                    type="radio" 
                                    value="Legal Department prepares a contracts" 
                                    name="isRequestLegalDepartment"
                                    checked={legendData.isRequestLegalDepartment === "Legal Department prepares a contracts"}
                                    id="isRequestLegalDepartment" />Legal Department prepares a contracts</label>
                        <div className="form-note">
                              <p>
                                    <b>*Note: for Confidentiality Agreements and Services Agreement, preference is to use Legend Biotech forms.</b>
                              </p> 
                        </div>
                          
                 </div>
            
                  <div  className="form-flex"  onChange={handleChange}>
                        <label className="form-section"><b>Capital Appropriation Request (CAR) Process</b></label>
                        <label><b>Is this a Capital Appropriation Request(CAR) related expenditure?</b></label>
                        <label><input 
                                    type="radio" 
                                    value="Yes, Capital Appropriation Request destination" 
                                    name="isCapitalAppropriationRequest"
                                    checked={legendData.isCapitalAppropriationRequest === "Yes, Capital Appropriation Request destination"}
                                    id="isCapitalAppropriationRequest" />Yes, Capital Appropriation Request destination</label>
                       <label><input 
                                    type="radio" 
                                    value="Yes, Capital Appropriation Request approval in process" 
                                    name="isCapitalAppropriationRequest" 
                                    checked={legendData.isCapitalAppropriationRequest === "Yes, Capital Appropriation Request approval in process"}
                                    id="isCapitalAppropriationRequest" />Yes, Capital Appropriation Request approval in process</label> 
                        <label><input 
                                    type="radio" 
                                    value="No" 
                                    name="isCapitalAppropriationRequest" 
                                    checked={legendData.isCapitalAppropriationRequest === "No"}
                                    id="isCapitalAppropriationRequest" />No</label>
                        <div className="form-note">
                        <p>
                              <b>*Note: if a Capital Appropriation Request related expenditure, Capital
                              Appropriation Request approval must be in-place before contract execution.</b>
                        </p>
                        </div>
                              
                  </div>

                  <div className="form-flex">
                        <label className="form-section"><b>General</b></label>
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
                                          checked={legendData.isConfidentialityAgreement === "Yes"}
                                          id="isConfidentialityAgreement"/>Yes</label>
                              <label><input 
                                          type="radio" 
                                          value="No" 
                                          name="isConfidentialityAgreement"
                                          id="isConfidentialityAgreement" 
                                          checked={legendData.isConfidentialityAgreement === "No"} 
                                          />No</label>
                              <label><input 
                                          type="radio" 
                                          value="Unknown" 
                                          name="isConfidentialityAgreement"
                                          checked={legendData.isConfidentialityAgreement === "Unknown"} 
                                          id="isConfidentialityAgreement"  />Unknown</label>
                  </div>
                
                 <div  className="form-flex" onChange={handleChange}>
                              <label><b>Has a Sanctions Check been performed on the other contracting party?</b></label>
                                    <label><input 
                                                type="radio" 
                                                value="Yes" 
                                                name="isSanctionsCheck"
                                                checked={legendData.isSanctionsCheck === "Yes"} 
                                                id="isSanctionsCheck" />Yes</label>
                                    <label><input 
                                                type="radio" 
                                                value="No" 
                                                name="isSanctionsCheck"
                                                checked={legendData.isSanctionsCheck === "No"} 
                                                id="isSanctionsCheck" />No</label> 
                 </div>
                 
                  <div className="form-flex form-note">
                                    <p><b>Note: A Sanctions Check is required for all contracts, except for CDA requests. Procurement is responsible for performing a
                                    Sanctions Check on all contracting parties, including for contracts that do not otherwise require Procurement involvement. For
                                    contracts that do not require Procurement involvement, the name of the other contracting party(ies) should be sent to
                                    Procurement to perform a Sanctions Check prior to submitting this form.</b></p> 
                  </div>
               
                  <div  className="form-flex">
                        <label ><b>Expected Start Date of Contract </b></label> 
                         <DatePicker 
                              selected={exStartDate} 
                              onChange={(date) => setExStartDate(date)} /> 
                  </div>
                
                <div className="form-flex">
                      <label><b>Expected End Date of Contract</b></label>
                       <DatePicker 
                              selected={exEndDate} 
                              onChange={(date) => setExEndDate(date)} />
                </div>
               
                <div className="form-flex" onChange={handleChange}>
                    <label><b> Type of Contract </b></label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="Confidentiality Agreement" 
                              checked={legendData.istypeOfContract === "Confidentiality Agreement"}
                              id="istypeOfContract"/>Confidentiality Agreement</label>                  
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="Supply Agreement"
                              checked={legendData.istypeOfContract === "Supply Agreement"}
                              id="istypeOfContract"/>Supply Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="Services Agreement"
                              checked={legendData.istypeOfContract === "Services Agreement"}
                              id="istypeOfContract"/>Services Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract"
                              value="Material Transfer Agreement"
                              checked={legendData.istypeOfContract === "Material Transfer Agreement"}
                              id="istypeOfContract" />Material Transfer Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract"
                              value="Collaboration Agreement"
                              checked={legendData.istypeOfContract === "Collaboration Agreement"}
                              id="istypeOfContract" />Collaboration Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="SOW or Work Order under Master Services Agreement"
                              checked={legendData.istypeOfContract === "SOW or Work Order under Master Services Agreement"}
                              id="istypeOfContract"/>SOW or Work Order under Master Services Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="HCP Consulting Agreement"
                              checked={legendData.istypeOfContract === "HCP Consulting Agreement"}
                              id="istypeOfContract"/>HCP Consulting Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract"
                              value="Non-HCP Consulting Agreement"
                              checked={legendData.istypeOfContract === "Non-HCP Consulting Agreement"}
                              id="istypeOfContract" />Non-HCP Consulting Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="Software License Agreement"
                              checked={legendData.istypeOfContract === "Software License Agreement"}
                              id="istypeOfContract"/>Software License Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract"
                              value="Quality Agreement"
                              checked={legendData.istypeOfContract === "Quality Agreement"} 
                              id="istypeOfContract" />Quality Agreement</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract"
                              value="Amendment/Extension to any of the foregoing (if so, provide existing agreement)"
                              checked={legendData.istypeOfContract === "Amendment/Extension to any of the foregoing (if so, provide existing agreement)"}
                              id="istypeOfContract" />Amendment/Extension to any of the foregoing (if so, provide existing agreement)</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract"
                              value="Termination to any of the foregoing (if so, provide existing agreement)"
                              checked={legendData.istypeOfContract === "Termination to any of the foregoing (if so, provide existing agreement)"} 
                              id="istypeOfContract"/>Termination to any of the foregoing (if so, provide existing agreement)</label>
                    <label><input 
                              type="radio"  
                              name="istypeOfContract" 
                              value="Other"
                              checked={legendData.istypeOfContract === "Other"}
                              id="istypeOfContract"/>Other</label>
                    <br />
                </div>
              
                <div className="form-flex">
                      <label><b>If Other is selected above, please indicate contract type.</b></label>
                      <input 
                              type="text" 
                              placeholder="If Other is selected above, please indicate contract type." 
                              name="isIfAny"
                              id="isIfAny"
                              value={legendData.isIfAny} 
                              onChange={handleChange} />
                </div>
                
                <div className="form-flex"  onChange={handleChange}>
                      <label><b>Contract renewed automatically (evergreen) or upon mutual agreement?</b></label>
                      <label><input 
                                    type="radio"  
                                    name="isAutomaticRenewal"
                                    id="isAutomaticRenewal"
                                    value="Automatic renewal" 
                                    checked={legendData.isAutomaticRenewal === "Automatic renewal"}/>Automatic renewal</label>
                      <label><input  
                                    type="radio"  
                                    name="isAutomaticRenewal"
                                    id="isAutomaticRenewal"
                                    value="Mutual agreement" 
                                    checked={legendData.isAutomaticRenewal === "Mutual agreement"} />Mutual agreement</label>
                      <br />
                </div>

                <div className="form-flex">
                      <label><b>Total Contract Dollar Amount</b></label>
                      <input 
                              type="number" 
                              placeholder="Total Contract Dollar Amount" 
                              name="isContractAmount"
                              id="isContractAmount"
                              value={legendData.isContractAmount}
                              onChange={handleChange} />
                </div>
                
                <div className="form-flex">
                      <label className="form-section"><b>For HCP Contracts Only</b></label>
                      <label><b>Hourly Rate</b></label>
                      <input 
                              type="number" 
                              placeholder="Hourly Rate" 
                              name="isHourlyRate"
                              id="isHourlyRate"
                              value={legendData.isHourlyRate}
                              onChange={handleChange}/>
                      <label><b>Maximum Number of Hours</b></label>
                      <input 
                              type="number" 
                              placeholder="Maximum Number of Hours" 
                              name="isMaxHours"
                              id="isMaxHours"
                              value={legendData.isMaxHours}
                              onChange={handleChange}  />
                </div>
                

                <div className="form-flex">
                    <label><b>Business Unit Approver</b></label>
                    <input 
                        type="text" 
                        placeholder="Business Unit Approver" 
                        name="unitApprover" 
                        id="unitApprover"
                        value={legendData.unitApprover}
                        onChange={handleChange} />
                </div>
                
                <div className="form-flex">
                      <div className="form-note">
                        <label><b>Note: Contract approver follows designated DOA guideline based on projected contract value</b></label>
                        <br />
                      </div>
                </div>  

                <div className="form-flex">
                      <label><b>Business Unit Representative</b></label>
                      <input 
                              type="text" 
                              placeholder="Business Unit Representative" 
                              name="unitRep"
                              id="unitRep"
                              value={legendData.unitRep}
                              onChange={handleChange} />
                </div>
                
                <div className="form-flex">
                      <label><b>Procurement Representative (if applicable)</b></label>
                      <input 
                              type="text" 
                              placeholder="Procurement Representative (if applicable)" 
                              name="isProRep" 
                              id="isProRep"
                              value={legendData.isProRep}
                              onChange={handleChange} />
                </div>
                


                <div className="form-flex">
                    <label><b>For supply or service Contracts, provide a detailed description of the purpose and scope of the Contract (including any requested amendment/extension to existing Contract), including a description of any goods or services</b></label>
                    <input 
                        type="text" 
                        placeholder="For supply or service Contracts..." 
                        name="supplyServiceContract" 
                        id="supplyServiceContract"
                        value={legendData.supplyServiceContract}
                        onChange={handleChange} />
                </div>
                
                <div className="form-flex">
                    <label><b>Describe specific materials being provided by Legend Biotech, if any. </b></label>
                    <input 
                        type="text" 
                        placeholder="Describe specific materials being provided by Legend Biotech, if any." 
                        name="specificMaterial"
                        id="specificMaterial"
                        value={legendData.specificMaterial}
                        onChange={handleChange} />
                </div>

                

                <div className="form-flex">
                      <label>
                        <b>For Confidentiality Agreements Only
                          State the purpose of the transaction, specific confidential information being shared by each party or indicate for general discussion.
                        </b>
                      </label>
                      <br />
                      <label><b>Purpose of Transaction:</b></label>
                      <input 
                              type="text" 
                              placeholder="Purpose of Transaction" 
                              name="PurposeTrans"
                              id="PurposeTrans"
                              value={legendData.PurposeTrans}
                              onChange={handleChange}  />

                      <label><b>Legend Confidential Information:  </b></label>
                      <input 
                              type="text" 
                              placeholder="Legend Confidential Information" 
                              name="legendConfInfo" 
                              id="legendConfInfo"
                              value={legendData.legendConfInfo}
                              onChange={handleChange}  />

                      <label><b>Other Party Confidential Information: </b></label>
                      <input 
                              type="text" 
                              placeholder="Other Party Confidential Information" 
                              name="otherConfInfo" 
                              id="otherConfInfo"
                              value={legendData.otherConfInfo}
                              onChange={handleChange} />
                </div>

                  <div className="form-flex" onChange={handleChange}>
                        <label>
                          <b> For all agreements other than Confidentiality Agreements: Is any confidential       information being shared, including employee information, proprietary information and other non-public information? 
                          </b>
                        </label>
                        <label><input 
                                    type="radio"   
                                    name="isConfidentiality" 
                                    id="isConfidentiality"
                                    checked={legendData.isConfidentiality === "Yes"} 
                                    value="Yes" />Yes</label>
                        <label><input 
                                    type="radio"   
                                    name="isConfidentiality" 
                                    id="isConfidentiality"
                                    checked={legendData.isConfidentiality === "No"} 
                                    value="No" />No</label>
                        <br />
                  </div>

                  <div className="form-flex">
                      <label>
                        <b>If yes, what type of confidential information will be shared by either party.
                        </b>
                      </label>
                      <label><b>Legend Confidential Information: </b></label>
                      <input 
                              type="text" 
                              placeholder="Legend Confidential Information" 
                              name="legendConfidentialInfo"
                              id="legendConfidentialInfo"
                              value={legendData.legendConfidentialInfo}
                              onChange={handleChange}  />
                      <label><b>Other Party Confidential Information:  </b></label>
                      <input 
                              type="text" 
                              placeholder="Other Party Confidential Information" 
                              name="otherPartyConf" 
                              id="otherPartyConf"
                              value={legendData.otherPartyConf}
                              onChange={handleChange}  />
                  </div>

                 <div className="form-flex" onChange={handleChange}>
                        <label>
                          <b> Do the other party(ies), collect, record, store, use, view, disclose or transmit (i.e. process) any personal data (for example, employee name, patient names, email, ID, customer names etc.) on behalf of Legend Biotech? 
                          </b>
                        </label>
                        <label><input 
                                    type="radio"  
                                    name="isCollect" 
                                    id="isCollect"
                                    value="Yes"
                                    checked={legendData.isCollect === "Yes"}/>Yes</label>
                        <label><input 
                                    type="radio"  
                                    name="isCollect" 
                                    id="isCollect"
                                    value="No"
                                    checked={legendData.isCollect === "No"} /> No </label>
                        <br />
                  </div>

                  <div className="form-flex">
                      <label><b>If yes, what type of personal data will be shared.</b></label>
                      <input 
                              type="text" 
                              placeholder="If yes, what type of personal data will be shared." 
                              name="personalDataType" 
                              id="personalDataType"
                              value={legendData.personalDataType}
                              onChange={handleChange}  />
                  </div> 
                  <div className="form-flex">
                        <div className="form-docs">
                              <div>
                                    <label><b>Please upload a standard document</b></label>
                                     <br />
                                                                        <input type="file" name="file" accept=".pdf, image/png, image/jpeg " onChange={changeHandler} />
                                                                        {isFilePicked ? (
                                                                        <div>
                                                                              <p>Filename: {selectedFile.name}</p>
                                                                              <p>Filetype: {selectedFile.type}</p>
                                                                              <p>Size in bytes: {selectedFile.size}</p>
                                                                              <p>
                                                                                    lastModifiedDate:{' '}
                                                                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                                                              </p>
                                                                              
                                                                        </div>
                                                                  ) : ( ""
                                                                  )}
                              </div>
                              
                              <div>
                                    <button className="form-docs-btn" type="submit" onClick={handleSubmission}>Upload</button>
                              </div>
                              

                        </div>
                        
                  </div>

                  <div className="form-flex-btn">
                        <button type="submit">Save</button>
                        <button type='submit' onClick={PostData}>Submit</button>
                  </div>
            </div>
        </form>
        </article>
    </>
  )
}

export default HomePage