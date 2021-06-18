import { Topic } from '../models/topic.js';

export function createTopicDisplay() {
    const topicDisplay = document.createElement('div');

    const topicId = localStorage.getItem('topicId');
    Topic.getTopic(topic).then(topic => {

        const topicTitle = document.createElement('h2');
        topicTitle.innerHTML = `Titre du sujet ${topic.title}`;
        topicDisplay.appendChild(topicTitle);

        const topicDescription = document.createElement('h3');
        topicDescription.innerHTML = `Posté le ${topic.date} à ${topic.hour} par ${topic.author}`;
        topicDisplay.appendChild(topicDescription);

        const refreshButton = document.createElement('button');
        refreshButton.innerHTML = 'Actualiser les messages';
        topicDisplay.appendChild(refreshButton);

        const topicContainer = document.createElement('div');

        topic.messages.forEach((message) => {
            const messageElement = createMessageElement(message);
            topicContainer.appendChild(messageElement);
        });

        const messageForm = createMessageForm();
        topicContainer.appendChild(messageForm);
        topicDisplay.appendChild(topicContainer);

    });

    return topicDisplay;

};

function createMessageElement(message) {

    const messageElement = document.createElement('div');

    const messageHeading = document.createElement('h3');
    messageHeading.innerHTML = `Posté le ${message.date} à ${message.hour} par ${message.author}`;
    messageElement.appendChild(messageHeading);

    const messageText = document.createElement('div');
    messageText.innerHTML = `${message.text}`;
    messageElement.appendChild(messageText);

    return messageElement;
};

function createMessageForm() {

    const messageForm = document.createElement('form');
    messageForm.id = 'message-form';

    const inputMessageText = document.createElement('input');
    inputMessageText.type = 'text';
    inputMessageText.placeholder = 'Message';

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Répondre au sujet';

    messageForm.appendChild(inputMessageText);
    messageForm.appendChild(submitButton);

    return messageForm;
};