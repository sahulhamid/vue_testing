import { createStore } from "vuex";

export default createStore({
  state: {
    name: "Todos",
    todos: [
      { id: 1, title: "wake up" },
      { id: 1, title: "brush teeth" },
    ],
  },
  getters: {
      getTodos:(state)=> {return state.todos},
      getName:(state)=>{return state.name}
  },
  mutations: {
      changeName(state,data){
          state.name=data.slice(0)
      }
  },

  actions: {},
});
