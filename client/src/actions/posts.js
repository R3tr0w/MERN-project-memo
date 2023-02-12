import * as api from '../api';

// Action creator
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message })
    }
}