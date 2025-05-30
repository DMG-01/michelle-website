import react from "react"
import QuestionAndAnswer from "./faqQuestionAndAnswer"

function FAQ()  {
return(
    <div className="faq">
        <div className="faqHead">
            <div><h2>FREQUENTLY ASKED QUESTIONS<hr></hr></h2></div>
            
        </div>

        <div className="faqBody">
        <QuestionAndAnswer question="Get an offer on my parcel of land?" answer="We'll give you an offer on your property. It doesn't matter what condition the property is in. We'll also educate you on the why behind our offer." />
        <QuestionAndAnswer question="When can we close?" answer="if the offer makes sense for you we close within  weeks, We will walk you through the process step-by-step." />
        <QuestionAndAnswer question="How do I get paid?" answer="We always purchase property through title and cover all fees. We want you to feel as comfortable as possible with the transaction."/>
        </div>
    </div>
)
}

export default FAQ