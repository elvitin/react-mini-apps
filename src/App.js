import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
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

import './App.css';
function App() {
  function GenUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  //factory function
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

  function refreshTaskListState() {
    setTaskListState([...taskListState]);
  }

  function showOperationMsg(operationMsg, timeMilliseconds = 2000) {
    setOperationMsgState({ operationMsg });
    setTimeout(_ => {
      setOperationMsgState(createBaseOperationMsgState());
    }, timeMilliseconds);
  }

  function add() {
    if (taskItemState.taskMsg === '') {
      showOperationMsg('A mensagem da tarefa não pode ser vazia');
      return;
    }

    if (taskItemState.id !== null) {
      //update
      taskListState.at(taskItemState.indexTaskToUpdate).taskMsg =
        taskItemState.taskMsg;

      setTaskItemState(createBaseTask());
      refreshTaskListState();
      showOperationMsg('Tarefa atualizada');
    } else {
      //add
      const task = { ...taskItemState, id: GenUUID() };
      taskListState.push(task);
      setTaskItemState(createBaseTask());
      refreshTaskListState();
      showOperationMsg('Tarefa adicionada');
    }
  }

  function setDone(item) {
    item.done = !item.done;
    refreshTaskListState();
  }

  function remove(index) {
    if(taskItemState.id === taskListState[index].id){
      setTaskItemState(createBaseTask());
    }
    taskListState.splice(index, 1);

    refreshTaskListState();
    showOperationMsg('Tarefa removida');
  }

  function edit(item) {
    setTaskItemState(item);
  }

  function changeTaskMsg(value) {
    setTaskItemState({ ...taskItemState, taskMsg: value });
  }

  return (
    <>
      <Container >
        <Row className='mt-5 mb-3'>
          <Col>
            <h1 className='text-center'>To Do Lista - Atividade Linguagens de Programação I</h1>
          </Col>
        </Row>

        <Row>
          <Col className='d-flex mb-3'>
            <InputGroup>
              <InputGroupText>Digite a tarefa aqui</InputGroupText>
              <Input type='text' value={taskItemState.taskMsg} onChange={e => changeTaskMsg(e.target.value)}/>
            </InputGroup>
            <Button color='primary' onClick={add} style={{marginLeft: '0.8em'}}>Adicionar</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup>
              {taskListState.map((item, index) => (
                <ListGroupItem key={item.id}>
                  <div className='d-flex'>
                    <div className='d-flex align-items-center' style={{ width: '100%' }}>
                      <Input id={item.id} type='checkbox' checked={item.done} onChange={_ => setDone(item)} style={{ marginRight: '0.8em' }}/>
                      <label htmlFor={item.id} style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.taskMsg}</label>
                    </div>
                    <ButtonGroup>
                      <Button color='warning' onClick={_ => edit(item)}>Editar</Button>
                      <Button color='danger' onClick={_ => remove(index)}>Remover</Button>
                    </ButtonGroup>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Toast isOpen={ operationMsgState.operationMsg !== '' } style={{ position: 'absolute', bottom: 30, right: 30 }} >
        <ToastHeader icon='success'>Atenção</ToastHeader>
        <ToastBody>{operationMsgState.operationMsg}</ToastBody>
      </Toast>
    </>
  );
}

export default App;
