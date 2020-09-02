import React, {Component} from 'react';
import './TodoItem.css';

//4번째 Components : 체크값 활성화 + 엑스마크 표시
//클래스형

class TodoItem extends Component{
    render(){

        const {text, checked, id, onToggle, onRemove} = this.props;
        return(
            <div className="todo-item" onClick={()=>onToggle(id)}>
               <div className="remove" onClick={(e)=>{
                   e.stopPropagation();
                   onRemove(id);}
               }>&times;
               </div>
               <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
               </div>
                todoitem's space
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}


export default TodoItem;