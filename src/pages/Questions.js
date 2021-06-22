import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MyFetch from '../utils/myFetch'
import {Typography, makeStyles} from '@material-ui/core'
import MyButton from '../components/MyButton'

const useStyle = makeStyles((theme) => ({
    conteQuestion: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    button:{
        backgroundColor: 'white',
        border: '2px solid black'
    },
    conteButtons:{
        display: 'grid',
        gap: theme.spacing(2)
    }
}));

function Questions() {
    const classes = useStyle();
    const [questions, setQuestions] = useState([])
    const [correct, setCorrect] = useState(0)
    const [total, setTotal] = useState(0)
    const [color, setColor] = useState('initial')
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
            setCorrect(correct + 1)
            setColor('secondary')
        }else{
            setColor('error')
        }
        setTotal(total + 1)
        setTimeout(()=>{
            const i = ((parseInt(index)===(questions.length-1))) ? "0" : parseInt(index) + 1
            setIndex(i)
            setColor('initial')
        },700)
    }

    return (
        <>
            {index ?  
                <>
                    <Typography align="right" variant="h6">{`${correct}/${total}`}</Typography>
                    <Typography className={classes.conteQuestion} align="center" variant="h3" color={color} >
                        {questions[index].question}
                    </Typography>
                    <div className={classes.conteButtons}>
                        <MyButton className={classes.button} onClick={(e)=>handlerClick(e, 'A',questions[index].resCorrect)} value={questions[index].resA} />
                        <MyButton className={classes.button} onClick={(e)=>handlerClick(e, 'B',questions[index].resCorrect)} value={questions[index].resB} />
                        <MyButton className={classes.button} onClick={(e)=>handlerClick(e, 'C',questions[index].resCorrect)} value={questions[index].resC} />
                        <MyButton className={classes.button} onClick={(e)=>handlerClick(e, 'D',questions[index].resCorrect)} value={questions[index].resD} />
                    </div>
                </>
            : null}
        </>
    )
}

export default Questions
