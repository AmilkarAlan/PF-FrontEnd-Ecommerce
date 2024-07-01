import axios from 'axios';
import {
  GET_ALL_TEMPLATES_REQUEST,
  GET_ALL_TEMPLATES_SUCCESS,
  GET_ALL_TEMPLATES_FAILURE,
  DELETE_TEMPLATE_REQUEST,
  DELETE_TEMPLATE_SUCCESS,
  DELETE_TEMPLATE_FAILURE,
} from './action-types';

const localURL = "http://localhost:3001/admin/templates";

export const getAllTemplates = () => async (dispatch) => {
    dispatch({ type: GET_ALL_TEMPLATES_REQUEST });
    try {
      const { data } = await axios.get(localURL);
      dispatch({
        type: GET_ALL_TEMPLATES_SUCCESS,
        payload: data
      });
      console.log('Plantillas cargadas exitosamente:', data); 
    } catch (error) {
      dispatch({
        type: GET_ALL_TEMPLATES_FAILURE,
        payload: error.response.data
      });
      console.error('Error al cargar las plantillas:', error); 
    }
  };
  

  export const deleteTemplate = (templateId) => async (dispatch) => {
    dispatch({ type: DELETE_TEMPLATE_REQUEST });
    try {
      const { data } = await axios.delete(`${localURL}/${templateId}`);
      dispatch({
        type: DELETE_TEMPLATE_SUCCESS,
        payload: data
      });
      console.log('Plantilla eliminada exitosamente');
    } catch (error) {
      dispatch({
        type: DELETE_TEMPLATE_FAILURE,
        payload: error.response.data
      });
      console.error('Error al eliminar la plantilla:', error);
    }
  };
  

