import { Topic } from '../models/topic.js';
import { Topic } from '../index.js';

export function createHomeDisplay() {
    const homeDisplay = document.createElement('div');

    homeDisplay.appendChild(createTopicForm());
    Topic.getTopics().then(topics => {
        homeDisplay.appendChild(createTopicList(topics));
    });

    return homeDisplay;
}

function createTopicForm() {
    const topicForm = document.createElement('form');
    topicForm.id = 'topic-form';
    const titleDiv = document.createElement('div');
    const messageDiv = document.createElement('div');

    const topicFormTitleLabel = document.createElement('label');
    topicFormTitleLabel.setAttribute('for', 'topic-title-ipt');
    topicFormTitleLabel.textContent = 'Titre';

    const topicFormTitleInput = document.createElement('input');
    topicFormTitleInput.type = 'text';
    topicFormTitleInput.name = 'topic-title';
    topicFormTitleInput.id = 'topic-title-ipt';
    topicFormTitleInput.placeholder = 'Titre';

    titleDiv.appendChild(topicFormTitleLabel);
    titleDiv.appendChild(topicFormTitleInput);

    const topicFormMessageLabel = document.createElement('label');
    topicFormMessageLabel.setAttribute('for', 'topic-message-ipt');
    topicFormMessageLabel.textContent = 'Message';

    const topicFormMessageInput = document.createElement('input');
    topicFormMessageInput.type = 'text';
    topicFormMessageInput.name = 'topic-message';
    topicFormMessageInput.id = 'topic-message-ipt';
    topicFormMessageInput.placeholder = 'Message';

    messageDiv.appendChild(topicFormMessageLabel);
    messageDiv.appendChild(topicFormMessageInput);

    const topicFormSubmitButton = document.createElement('input');
    topicFormSubmitButton.type = 'submit';
    topicFormSubmitButton.value = 'Ajouter un nouveau sujet';

    topicForm.appendChild(titleDiv);
    topicForm.appendChild(messageDiv);
    topicForm.appendChild(topicFormSubmitButton);

    topicForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        const topicCreationDate = new Date();
        const newTopic = new Topic(topicFormTitleInput.value, topicCreationDate, localStorageUser, topicFormMessageInput.value);

        Topic.createTopic(newTopic);
    });

    return topicForm;
}

function createTopicList(topicList) {


    const topicListContainer = document.createElement('div');
    topicListContainer.id = 'topic-list-container';

    const topicListFilterInput = document.createElement('input');
    topicListFilterInput.type = 'text';
    topicListFilterInput.name = 'topic-filter';
    topicListFilterInput.id = 'topic-filter-ipt';
    topicListFilterInput.placeholder = 'Filtrer par titre ou par auteur';

    const topicFilteredList = document.createElement('div');
    topicFilteredList.id = 'topic-filtered-list';

    topicList.forEach((topic, index) => {
        const topicLine = createTopicLine(topic);
        topicLine.id = `topic-${index}`;
        topicFilteredList.appendChild(topicLine);
    });

    topicListContainer.appendChild(topicListFilterInput);
    topicListContainer.appendChild(topicFilteredList);

    return topicListContainer;
}

function createTopicLine(topic) {
    const topicLine = document.createElement('div');

    const topicTitle = document.createElement('span');
    topicTitle.textContent = topic.title;

    const topicTitleUpdateInput = document.createElement('input');
    topicTitleUpdateInput.type = 'text';
    topicTitleUpdateInput.name = 'update-topic-title';
    topicTitleUpdateInput.id = 'update-topic-title-ipt';
    topicTitleUpdateInput.placeholder = 'Title';
    topicTitleUpdateInput.value = topic.title;
    topicTitleUpdateInput.hidden = true;

    const updateTopicButton = document.createElement('button');
    updateTopicButton.textContent = 'Modifier';
    const saveChangesButton = document.createElement('button');
    saveChangesButton.textContent = 'Sauvegarder';
    const deleteTopicButton = document.createElement('button');
    deleteTopicButton.textContent = 'Supprimer';

    topicLine.appendChild(topicTitle);
    topicLine.appendChild(topicTitleUpdateInput);
    topicLine.appendChild(updateTopicButton);
    topicLine.appendChild(saveChangesButton);
    topicLine.appendChild(deleteTopicButton);

    saveChangesButton.addEventListener('click', (event) => {
        changeTopic(topic.id, topicTitleUpdateInput.value);
        displayPage('home');
    });

    deleteTopicButton.addEventListener('click', (event) => {
        deleteTopic(topic.id);
        displayPage('home');
    });


    return topicLine;
}