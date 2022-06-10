import Options from "../components/options"

const renderOptions = (currentQuizObject,options,index) => options.map((option) => <Options option = {option} index = {index} currentQuizObject = {currentQuizObject} />)

export default renderOptions