
import axios from 'axios';

const API_URL = 'http://localhost:8081'; 


const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    
  }
});

export const fetchCreditsClient = async (typeReference, numeroReference) => {
  try {
    const response = await axiosInstance.get(`/predeclassement/infos/${typeReference}/${numeroReference}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des crédits:', error);
    throw error;
  }
};

export const preDeclasser = async (contrats) => {
  try {
    
    const response = await axiosInstance.post('/predeclassement/process', contrats);
    return response.data;
  } catch (error) {
    console.error('Erreur lors du pré-déclassement:', error);
    throw error;
  }
};