// Adding a bunch of typing for our Redux

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit/dist/configureStore"


export interface Task {
    // in TS - interfaces are really just a list of properties (unlikke other langs like Java)
    // N.B. Interfaces are recommended over classes for this purpose
    // Redux requirements = everthign has to be an object literal

    taskId: string
    description: string
    isComplete: boolean 


}

export interface State {
    tasks: Task[]
}

const initialState: State = {
    tasks: []
}

const slice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {

        addTask(state: State, action: PayloadAction<Task>) {
            state.tasks.push(action.payload)
        }
    }
})

export const store = configureStore({reducer: slice.reducer})