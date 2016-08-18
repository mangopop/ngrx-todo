import {ActionReducer, Action} from "@ngrx/store";
import {SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL} from "../common/actions";

//is listened to in app.component const visibilityFilter$ = _store.select('visibilityFilter');
// this is imported (StoreModule.provideStore(APP_REDUCERS), along with others) in the NgModule

//args are weird here, but think it's just assinging state to a default function with arguement 
export const visibilityFilter : ActionReducer<any> = (state : any = t => t, action : Action) => {

console.log(state,action);
//the counter app returns an increments state
// 
    switch(action.type){        
        case SHOW_COMPLETED:
        //these are filters, here we are returning all complete todos
        
            //when we return is the store listening?
            return todo => todo.complete;
        
        case SHOW_ACTIVE:
            return todo => !todo.complete;
        
        case SHOW_ALL:
            return todo => todo;
            
        default:
            return state;
    }
};
