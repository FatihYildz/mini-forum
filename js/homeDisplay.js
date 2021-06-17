export function createHomeDisplay(topicList) {
    const homeDisplay = document.createElement('div');

    homeDisplay.appendChild(createTopicForm());
    homeDisplay.appendChild(createTopicList(topicList));

    return homeDisplay;
}

function createTopicForm() {
    const topicForm = document.createElement('form');
    topicForm.id = "topic-form";

    const topicFormTitleInput = document.createElement('input');
    topicFormTitleInput.type = 'text';
    topicFormTitleInput.name = 'topic-title';
    topicFormTitleInput.id = 'topic-title-ipt';
    topicFormTitleInput.placeholder = "Title";

    const topicFormMessageInput = document.createElement('input');
    topicFormMessageInput.type = 'text';
    topicFormMessageInput.name = 'topic-message';
    topicFormMessageInput.id = 'topic-message-ipt';
    topicFormMessageInput.placeholder = "Message";

    const topicFormSubmitButton = document.createElement('input');
    topicFormSubmitButton.type = 'submit';
    topicFormSubmitButton.textContent = 'Ajouter un nouveau sujet';

    topicForm.appendChild(topicFormTitleInput);
    topicForm.appendChild(topicFormMessageInput);
    topicForm.appendChild(topicFormSubmitButton);

    return topicForm;
}

function createTopicList(topicList) {
    const topicListContainer = document.createElement('div');
    topicListContainer.id = 'topic-list-container';

    const topicListFilterInput = document.createElement('input');
    topicListFilterInput.type = 'text';
    topicListFilterInput.name = 'topic-filter';
    topicListFilterInput.id = 'topic-filter-ipt';
    topicListFilterInput.placeholder = "Filtrer par titre ou par auteur";

    const topicFilteredList = document.createElement('div');
    topicFilteredList.id = 'topic-filtered-list';

    // Use a list of topic named topicList here
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
    topicTitleUpdateInput.placeholder = "Title";
    topicTitleUpdateInput.value = topic.title;
    topicTitleUpdateInput.hidden = true;

    const updateTopicButton = document.createElement('button');
    updateTopicButton.textContent = 'Modifier';
    const saveChangesButton = document.createElement('button');
    updateTopicButton.textContent = 'Sauvegarder';
    const deleteTopicButton = document.createElement('button');
    deleteTopicButton.textContent = 'Supprimer';

    topicLine.appendChild(topicTitle);
    topicLine.appendChild(topicTitleUpdateInput);
    topicLine.appendChild(updateTopicButton);
    topicLine.appendChild(saveChangesButton);
    topicLine.appendChild(deleteTopicButton);

    return topicLine;
}