const feedbackFormEl = document.querySelector('.feedback-form');
const userData = {};

const fillFeedbackFormFields = () => { 
    const userDataFromLs = JSON.parse(localStorage.getItem('feedbackFormState'));

    if (userDataFromLs === null) {
        return;
    }
    
    for (const key in userDataFromLs)
        if (userDataFromLs.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = userDataFromLs[key];            
        }
};

fillFeedbackFormFields();

const onFeedbackFormFieldElInput = event => {
    const { target: feedbackFormFieldEl } = event;

    const name = feedbackFormFieldEl.name;
    const value = feedbackFormFieldEl.value;
    
    userData[name] = value;
    
    localStorage.setItem('feedbackFormState', JSON.stringify(userData));
}

const onFeedbackFormElSubmit = event => {
    event.preventDefault();

    event.target.reset();
    localStorage.removeItem('feedbackFormState');
    console.log(userData);
}

feedbackFormEl.addEventListener('input', onFeedbackFormFieldElInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormElSubmit);