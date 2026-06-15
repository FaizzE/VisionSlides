import SlidersStyle from '@/components/custom/SlidersStyle'
import { firebaseDb, GeminiAiModel } from './../../../../config/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OutlineSection from '@/components/custom/OutlineSection'

type Project = {
  userInputPrompt: string,
  projectId: string,
  createdAt: string,
  noOfSliders: string,
  outline:any

}



const OUTLINE_PROMPT = `Generate a PowerPoint slide outline for the topic {userInput}". Create {noOfSliders} slides in total. Each slide should include a topic name and a 2-line descriptive outline that clearly explains what content the slide will cover.

Include the following structure:

The first slide should be a Welcome screen.

The second slide should be an Agenda screen.

The final slide should be a Thank You screen.

Return the response only in JSON format, following this schema:

[

 {

 "slideNo": "",

 "slidePoint": "",

 "outline": ""

 }

]

`

function Outline () {
  const { projectId } = useParams()
  const [projectDetail, setProjectDetail] = useState<Project | null>()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    projectId && GetProjectDetail()
  }, [projectId])

  const GetProjectDetail = async () => {
    const docRef = doc(firebaseDb, 'projects', projectId ?? '')
    const docSnap: any = await getDoc(docRef)
    if (!docSnap.exists()) {
      return
    }
    console.log(docSnap.data())
    setProjectDetail(docSnap.data())
    if(!docSnap.data()?.outline) {
      GenerateSlidersOutline(docSnap.data())
    }
  }

  const GenerateSlidersOutline = async (projectData: Project) => {
    setLoading(true);
    const prompt = OUTLINE_PROMPT.replace('{userInput}', projectData?.userInputPrompt).replace('{noOfSliders}', projectData ?.noOfSliders)


    // To generate text output, call generateContent with the text input
    const result = await GeminiAiModel.generateContent(prompt)

    const response = result.response
    const text = response.text()
    console.log('Outline Result: ', text)
    setLoading(false);
  }

  return (
    <div className='flex justify-center mt-20'>
      <div className='max-w-3xl w-full'>
        <h2 className='font-bold text-2xl'>Project Overview & Structure</h2>
        <SlidersStyle />
        <OutlineSection loading={loading} />
      </div>
    </div>
  )
}

export default Outline
