
const buttonColour = (currentAnswer,correctAnswer,option) => {

    if(option === correctAnswer){
        return "btn-success"
    }
    else if(option === currentAnswer){
        return "btn-error"
    }
    else{
        return "btn-primary"
    }
}

export default buttonColour