import './Question.css';

function Question(props) {
    const { question, choices, action } = props;

    return (
        <div className='question-container'>
            <h1 className='question'>{question}</h1>
            <div className='options'>
                <h1 className='option' onClick={() => action(choices[0], -1)}>{choices[0]}</h1>
                <h1 className='option' onClick={() => action(choices[1], 1)}>{choices[1]}</h1>
            </div>
        </div>
    );
}

export default Question;
