import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import { connect } from 'react-redux'

// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setSkill, updateSkill } from "../../redux/actions/skillAction";

function Skill(props) {
  console.log('Skill');
  let history = useHistory();
  const [skill,setSkill]= useState(props.skill);

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setSkill({...skill,[key]:val})
  }
  const getFieldData=(key)=>{
    if(skill && skill[key]){
      return skill[key]
    }
    return "";
}
  const onSubmit = async(e) => {
     if(props.skill != null){
       props.updateSkill(skill)
     }
     else{
       props.setSkill(skill)
     }
     history.push('/finalize')
  }

    
    return (
        <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Skills & Achievements</h2>
            <div className="form-section">
              <div className="input-group"><label>Skills</label>
                <div className="effect"><input type="text" name={fieldCd.Skills}
                  onChange={onchange} value={getFieldData(fieldCd.Skills)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Certificate 1</label>
                <div className="effect"><input type="text" name={fieldCd.Certi1}
                  onChange={onchange} value={getFieldData(fieldCd.Certi1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Certificate 2</label>
                <div className="effect"><input type="text" name={fieldCd.Certi2}
                  onChange={onchange} value={getFieldData(fieldCd.Certi2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Certificate 3</label>
                <div className="effect"><input type="text"  name={fieldCd.Certi3}
                  onChange={onchange} value={getFieldData(fieldCd.Certi3)} /><span></span>
                </div>
                <div className="error"></div>
              </div>


              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/experience' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview experienceSection={props.experience} skillSection={skill} skinCd={props?.document?.skinCd}></ResumePreview>            
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
      experience: state.experience,
      skill: state.skill
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    return{
      setSkill: (skill) => dispatch(setSkill(skill)),
      updateSkill: (skill) => dispatch(updateSkill(skill))
    }
  }


  


export default connect(mapStateToProps,mapDispatchToProps) (Skill)

