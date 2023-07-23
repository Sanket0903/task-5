import React,{ createContext, useReducer } from 'react'
export const FirstContext = createContext()
export const FirstReducer =(state,action)=>{
    switch (action.type) {
        case 'setDetails': 
            return {...state,index:action.payload}
    
        default:
            return state;
           
}};

export const FirstProvider=({ children })=>{
    const initialState ={
        index:null
    }
    const [state,dispatch]=useReducer(FirstReducer,initialState)
    return (
        <FirstContext.Provider value={{state,dispatch}}>
                {children}
        </FirstContext.Provider>
    )
}