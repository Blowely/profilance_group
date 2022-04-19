const defaultState = {
    news: [
        {id: 0, title: "Something is happend", text: "Something is happend is Very cool", date: "03-02-2022"},
        {id: 1, title: "Lorem some spirit", text: "Spirit is never is eleven cool", date: "04-02-2022"},
        {id: 2, title: "Its a realy good day", text: "Becouse right now something wont wrong", date: "05-02-2022"}
    ],
    approved_news: []
}

const ADD = "ADD";
const APPROVE = "APPROVE";
const REMOVE = "REMOVE";

export const newsReducer = (state = defaultState, action) => {
    const ids = []
    let lastId = 0;
    if (action.type === ADD) {
        for (let i = 0; i < state.news.length; i++) {
            ids.push(state.news[i].id);
        }
        ids.sort();
        lastId = ids[ids.length - 1];
    }



    const findIndex = (id) => {
        for (let i = 0; i < state.news.length; i++) {
            if (state.news[i].id === id) {
                return i;
            }
        }
    }

    switch (action.type) {
        case ADD:
            let date = new Date();
            return {...state, news: [...state.news, {
                id: lastId + 1,
                title: action.title,
                text: action.text,
                date: date.toISOString().split('T')[0]
            }]
            };
        case APPROVE:
            const id_app = findIndex(action.id);
            const item = {...state.news[id_app], is_approved: true};
            state.news.splice(id_app, 1);
            return {...state, approved_news: [...state.approved_news, {...item}]};
        case REMOVE:
            const id_rem = findIndex(action.id);
            action.is_approved ? state.approved_news.splice(id_rem, 1) : state.news.splice(id_rem, 1);
            return {...state, news: [...state.news], approved_news: [...state.approved_news]};
        default:
            return state;
    }
}

export const addNewsAction = (payload) => ({type: ADD, title: payload.title, text: payload.text});
export const approveNewsAction = (id) => ({type: APPROVE, id: id});
export const removeNewsAction = (payload) => ({type: REMOVE, id: payload.id, is_approved: payload.is_approved});
