import React from 'react';
import {fieldCd} from './../../constants/typeCodes'
function ResumePreview(props){
    // console.log('Resume Preview');
    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvExperience=(key,valToAppend)=>{
        if(props.experienceSection){
            return props.experienceSection[key]?props.experienceSection[key]+
            (valToAppend?valToAppend:''):'';
        }
    }
    const rvSkill=(key,valToAppend)=>{
        if(props.skillSection){
            return props.skillSection[key]?props.skillSection[key]+
            (valToAppend?valToAppend:''):'';
        }
    }


        return (
            <div className={props.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{rvContact(fieldCd.Email ) }</p>
                    <p className={'center'}>{rvContact(fieldCd.Phone) } </p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{rvContact(fieldCd.ProfSummary)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvEducation(fieldCd.SchoolName)}</p>
                     <p>{rvEducation(fieldCd.Degree)}</p>
                     <p>{rvEducation(fieldCd.City)}</p>
                     <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p>{rvEducation(fieldCd.GraduationDate)}</p>
                     <p>{rvEducation(fieldCd.GraduationYear)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">Work Experience</p>
                     <div className={'divider'}></div>
                     <p>{rvExperience(fieldCd.JobLocation)}</p>
                     <p>{rvExperience(fieldCd.JobDescription)}</p>
                     <p>{rvExperience(fieldCd.JobStartDate)}</p>
                     <p>{rvExperience(fieldCd.JobEndDate)}</p>
                </div>
                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">Skills & Achievements</p>
                     <div className={'divider'}></div>
                     <p>{rvSkill(fieldCd.Skills)}</p>
                     <p>{rvSkill(fieldCd.Certi1)}</p>
                     <p>{rvSkill(fieldCd.Certi2)}</p>
                     <p>{rvSkill(fieldCd.Certi3)}</p>
                </div>
          
            </div>
        )
    }
export default ResumePreview;