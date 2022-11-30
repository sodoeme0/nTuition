export class grants{
    sg_id: string=""
    sg_category: string =""
    sg_name: string =""
    sg_deadline: string =""
    sg_offered_by: string=""
    sg_nationality: string=""
    sg_description: string=""
    sg_requirements: { essay: boolean, recommendations: boolean, min_gpa: string}={
        essay: false,
        recommendations: false,
        min_gpa: "0.0"
    }
    sg_major: string=""
    sg_type: string=""
    sg_application_link: string=""
    sg_award_amount: string=""
}