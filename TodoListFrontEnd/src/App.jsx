import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row,
  Toast,
  ToastBody,
  ToastHeader
} from 'reactstrap';
import {
  TASKITEM_DELETE,
  TASKITEM_POST,
  TASKITEM_PUT,
  TASKLIST_GET
} from './api';

import './App.css';

function App() {
  //debugger;
  function createBaseTask() {
    return { id: null, taskMsg: '', done: false };
  }
  function createBaseOperationMsgState() {
    return { operationMsg: '' };
  }

  const [taskItemState, setTaskItemState] = useState(createBaseTask());

  const [operationMsgState, setOperationMsgState] = useState(
    createBaseOperationMsgState()
  );

  const [taskListState, setTaskListState] = useState([]);

  async function getTaskList() {
    const { url, options } = TASKLIST_GET();
    const response = await fetch(url, options);
    const data = await response.json();
    const elements = [];
    data.forEach(element => {
      elements.push({
        id: element.id,
        taskMsg: element.descricao,
        done: false
      });
    });
    setTaskListState(elements);
  }

  useEffect(_ => {
    getTaskList();
  }, []);

  function refreshTaskListState() {
    setTaskListState([...taskListState]);
  }

  function showOperationMsg(operationMsg, timeMilliseconds = 2000) {
    setOperationMsgState({ operationMsg });
    setTimeout(_ => {
      setOperationMsgState(createBaseOperationMsgState());
    }, timeMilliseconds);
  }

  async function add() {
    if (taskItemState.taskMsg === '') {
      showOperationMsg('A mensagem da tarefa não pode ser vazia');
      return;
    }

    if (taskItemState.id !== null) {
      //update
      const { url, options } = TASKITEM_PUT({
        id: taskItemState.id,
        descricao: taskItemState.taskMsg
      });
      const response = await fetch(url, options);
      const data = await response.json();
      const taskItem = taskListState.find(
        taskItem => taskItem.id === taskItemState.id
      );
      taskItem.taskMsg = data.descricao;
      //taskItem.done = data.concluida;
      setTaskItemState(createBaseTask());
      refreshTaskListState();
      showOperationMsg('Tarefa atualizada com sucesso');
    } else {
      //add
      const { url, options } = TASKITEM_POST({
        descricao: taskItemState.taskMsg
      });

      const response = await fetch(url, options);
      const data = await response.json();
      taskListState.push({
        id: data.id,
        taskMsg: taskItemState.taskMsg,
        done: false
      });
      setTaskItemState(createBaseTask());
      refreshTaskListState();
      showOperationMsg('Tarefa adicionada');
    }
  }

  function setDone(item) {
    item.done = !item.done;
    refreshTaskListState();
  }

  async function remove(item) {
    const { url, options } = TASKITEM_DELETE(item);
    await fetch(url, options);
    taskListState.splice(taskListState.indexOf(item), 1);
    refreshTaskListState();
    showOperationMsg('Tarefa removida');
  }

  async function edit(item) {
    setTaskItemState(item);
  }

  function changeTaskMsg(value) {
    setTaskItemState({ ...taskItemState, taskMsg: value });
  }

  return (
    <>
      <Container>
        <Row className='mt-5 mb-3'>
          <Col>
            <h1 className='text-center'>
              To Do Lista - Atividade Linguagens de Programação I
            </h1>
          </Col>
        </Row>

        <Row>
          <Col className='d-flex mb-3'>
            <InputGroup>
              <InputGroupText>Digite a tarefa aqui</InputGroupText>
              <Input
                type='text'
                value={taskItemState.taskMsg}
                onChange={e => changeTaskMsg(e.target.value)}
              />
            </InputGroup>
            <Button
              color='primary'
              onClick={add}
              style={{ marginLeft: '0.8em' }}
            >
              Adicionar
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup>
              {taskListState.map(item => (
                <ListGroupItem key={item.id}>
                  <div className='d-flex'>
                    <div
                      className='d-flex align-items-center'
                      style={{ width: '100%' }}
                    >
                      <Input
                        id={item.id}
                        type='checkbox'
                        checked={item.done}
                        onChange={_ => setDone(item)}
                        style={{ marginRight: '0.8em' }}
                      />
                      <label
                        htmlFor={item.id}
                        style={{
                          textDecoration: item.done ? 'line-through' : 'none'
                        }}
                      >
                        {item.taskMsg}
                      </label>
                    </div>
                    <ButtonGroup>
                      <Button color='warning' onClick={_ => edit(item)}>
                        Editar
                      </Button>
                      <Button color='danger' onClick={_ => remove(item)}>
                        Remover
                      </Button>
                    </ButtonGroup>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Toast
        isOpen={operationMsgState.operationMsg !== ''}
        style={{ position: 'absolute', bottom: 30, right: 30 }}
      >
        <ToastHeader icon='success'>Atenção</ToastHeader>
        <ToastBody>{operationMsgState.operationMsg}</ToastBody>
      </Toast>
    </>
  );
}

export default App;
