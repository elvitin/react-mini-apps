export const API_URL = 'http://localhost:5225/api/tarefa/';

export function TASKLIST_GET() {
  return {
    url: API_URL,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      redirect: 'follow'
    }
  };
}

export function TASKITEM_POST(task) {
  return {
    url: API_URL,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(task),
      redirect: 'follow'
    }
  };
}

export function TASKITEM_PUT(task) {
  return {
    url: API_URL + task.id,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(task),
      redirect: 'follow'
    }
  };
}

export function TASKITEM_DELETE(task) {
  return {
    url: API_URL + task.id,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      redirect: 'follow'
    }
  };
}
