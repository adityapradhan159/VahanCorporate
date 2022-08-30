import React,{useState} from 'react'

const FaqAccordian = ({item}) => {

const [showAccordian,setShowAccordian] = useState(false);

  return (
    <>
    <div className="faqQuestions" onClick={() => setShowAccordian(!showAccordian)}>
        <h4>{item.question}</h4>
        {
            showAccordian ?  <img src="./images/faqArrowUp.svg" alt="" />
            :  <img src="./images/faqArrowDown.svg" alt="" />
        }
       
    </div>

    {
        showAccordian && <div className="faqAnswers">
        <p>{item.answer}</p>
    </div>
    }
    </>
  )
}

export default FaqAccordian