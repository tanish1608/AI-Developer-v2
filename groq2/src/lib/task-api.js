const TaskApi = {
getTasks: async (filterQuery) => {
const response = await fetch('/api/task-api' + filterQuery, {
method: 'GET',
});

const data = await response.json();

return data;
},
};

export default TaskApi;