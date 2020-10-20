import axios from 'axios';
export const getTopics = () => {
    return axios.get('https://husnain4190news.herokuapp.com/api/topics');
}