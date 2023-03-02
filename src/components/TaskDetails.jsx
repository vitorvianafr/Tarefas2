import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    
    return ( 
    <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p> Bem, eu entendo que você precisa de uma descrição de tarefa, mas é importante garantir que a informação seja transmitida de maneira clara e objetiva para que a pessoa possa entender exatamente o que precisa ser feito. Dito isso, vou tentar enrolar um pouco para manter o mistério e criar um pouco de suspense.

Essa tarefa é muito importante e requer muita atenção aos detalhes. Há muitas coisas envolvidas e é preciso ter um bom planejamento e organização para concluí-la com sucesso. O resultado final será algo que trará grande valor e impacto positivo, mas é preciso trabalhar com cuidado e dedicação para alcançá-lo.

Espero ter conseguido enrolar um pouco sem revelar muita informação. Mas, como eu disse antes, é importante ser claro e objetivo para que a pessoa possa entender o que precisa ser feito. Então, se você quiser, pode me fornecer mais detalhes sobre a tarefa para que eu possa ajudá-lo a criá-la de maneira mais clara e objetiva. </p>
            
        </div>
    </> );
}
 
export default TaskDetails;