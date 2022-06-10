import Options from "../components/options"
import { v4 as uuid } from "uuid";

const renderOptions = (currentQuizObject,options,index) => options.map((option) => <Options option = {option} index = {index} currentQuizObject = {currentQuizObject} key = {uuid()} />)

export default renderOptions