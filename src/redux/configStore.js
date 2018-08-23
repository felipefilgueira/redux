import { createStore, combineReducers} from 'redux';
import todoReducer from './reducers/todo-reducer'

const rootReducers = combineReducers({
    todoreducer: todoReducer
})

const configStore = () => {
    return createStore(rootReducers);
}

export default configStore;