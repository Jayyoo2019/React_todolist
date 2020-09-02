import React, {Component} from 'react';
import TodoItem from './TodoItem';


//세번째 Components : Rendering하는 역할
//클래스형 컴포넌트(함수형 x) : 보여주는 리스트가 동적인 경우에 사용

class TodoItemList extends Component{
    render(){
        const{todos, onToggle, onRemove} = this.props;
        
        const todoList = todos.map(
            ({id, text, checked}) => (
              <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
              />
            )
          );
        return(
            <div>
                {todoList}

            </div>
        )
    }
}

export default TodoItemList;