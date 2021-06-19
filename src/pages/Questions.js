import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MyFetch from '../utils/myFetch'
import Typography from '@material-ui/core/Typography'
import MyButton from '../components/MyButton'

function Questions() {
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(null)
    let {idSubject} = useParams()

    useEffect(()=>{
        const getQuestions = async () => {
            const res = await MyFetch({method: 'GET', path: `/questions/subject/${idSubject}`})
            if(res.data){
                if(res.data!==0){
                    setQuestions(res.data)
                    setIndex("0")
                }
            }
        }
        getQuestions();
    },[])

    const handlerClick = (e, res, resCorrect) => {
        if(res === resCorrect){
            //Answer correct
            const i = ((index===(questions.length-1))) ? "0" : parseInt(index) + 1
            setIndex(i)
        }else{
            //Answer Incorrect
        }
    }

    return (
        <>
            {index ?  
                <>
                    <Typography align="center" variant="body1" color="initial">
                        {questions[index].question}
                    </Typography>
                    <MyButton onClick={(e)=>handlerClick(e, 'A',questions[index].resCorrect)} value={questions[index].resA} />
                    <MyButton onClick={(e)=>handlerClick(e, 'B',questions[index].resCorrect)} value={questions[index].resB} />
                    <MyButton onClick={(e)=>handlerClick(e, 'C',questions[index].resCorrect)} value={questions[index].resC} />
                    <MyButton onClick={(e)=>handlerClick(e, 'D',questions[index].resCorrect)} value={questions[index].resD} />
                </>
            : null}
        </>
    )
}

export default Questions
