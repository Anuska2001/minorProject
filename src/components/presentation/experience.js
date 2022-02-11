import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import { connect } from 'react-redux'
import {setEducation, updateEducation} from '../../redux/actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setExperience, updateExperience } from "../../redux/actions/experienceActions";

function Experience(props) {
  console.log('Experience');
  let history = useHistory();
  const [experience,setExperience]= useState(props.experience);

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setExperience({...experience,[key]:val})
  }
  const getFieldData=(key)=>{
    if(experience && experience[key]){
      return experience[key]
    }
    return "";
}
  const onSubmit = async(e) => {
     if(props.experience != null){
       props.updateExperience(experience)
     }
     else{
       props.setExperience(experience)
     }
     history.push('/finalize')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Work Experience</h2>
            <div className="form-section">
              <div className="input-group"><label>Company Name</label>
                <div className="effect"><input type="text" name={fieldCd.JobLocation}
                  onChange={onchange} value={getFieldData(fieldCd.JobLocation)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Job Description</label>
                <div className="effect"><input type="text" name={fieldCd.JobDescription}
                  onChange={onchange} value={getFieldData(fieldCd.JobDescription)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Start Date</label>
                <div className="effect"><input type="text" name={fieldCd.JobStartDate}
                  onChange={onchange} value={getFieldData(fieldCd.JobStartDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>End Date</label>
                <div className="effect"><input type="text"  name={fieldCd.JobEndDate}
                  onChange={onchange} value={getFieldData(fieldCd.JobEndDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>


              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview educationSection={props.education} experienceSection={experience} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state) =>{
    return{
      document: state.document,
      contact: state.contact,
      education: state.education,
      experience: state.experience
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    return{
      setExperience: (experience) => dispatch(setExperience(experience)),
      updateExperience: (experience) => dispatch(updateExperience(experience))
    }
  }


  


export default connect(mapStateToProps,mapDispatchToProps) (Experience)

