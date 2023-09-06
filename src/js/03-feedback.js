import throttle from 'lodash.throttle';

refs = {
    feedbackFormEl: document.querySelector('.feedback-form'),
};


const feedbackFormState = 'userData';
const saveToLS = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
};

const loadFromLS = function (key) {
    const data = localStorage.getItem(key);
    try { return JSON.parse(data) }
    catch { return data };
};

let data = loadFromLS(feedbackFormState) || {};


const onFeedbackFormElInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    data[name] = value;
    saveToLS(feedbackFormState, data)
}

refs.feedbackFormEl.addEventListener('input', throttle(onFeedbackFormElInput, 500));

function onPageLoad() {
    for(const key of Object.keys(data)) {
        refs.feedbackFormEl.elements[key].value = data[key];
    };
}

onPageLoad();

refs.feedbackFormEl.addEventListener('submit', event => {
    event.preventDefault();
    refs.feedbackFormEl.reset();
    console.log(data);
    localStorage.removeItem(feedbackFormState);
    data = {};
}) 










// const feedbackFormEl = document.querySelector('.feedback-form');


// const userData = {};

// const fillFeedbackFormFields = () => { 
//     const userDataFromLs = JSON.parse(localStorage.getItem('feedbackFormState'));

//     if (userDataFromLs === null) {
//         return;
//     }
    
//     for (const key in userDataFromLs)
//         if (userDataFromLs.hasOwnProperty(key)) {
//             feedbackFormEl.elements[key].value = userDataFromLs[key];            
//         }
// };

// fillFeedbackFormFields();

// const onFeedbackFormFieldElInput = event => {
//     const { target: feedbackFormFieldEl } = event;

//     const name = feedbackFormFieldEl.name;
//     const value = feedbackFormFieldEl.value;
    
//     userData[name] = value;
    
//     localStorage.setItem('feedbackFormState', JSON.stringify(userData));
// }

// const onFeedbackFormElSubmit = event => {
//     event.preventDefault();

//     event.target.reset();
//     localStorage.removeItem('feedbackFormState');
//     console.log(userData);
// }

// feedbackFormEl.addEventListener('input', throttle(onFeedbackFormFieldElInput, 500));
// feedbackFormEl.addEventListener('submit', onFeedbackFormElSubmit);