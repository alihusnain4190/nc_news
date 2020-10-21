import axios from 'axios';
export const getTopics = () => {
    return axios.get('https://husnain4190news.herokuapp.com/api/topics');
}
export const getArticles = ( value) => {
  
        return axios.get('https://husnain4190news.herokuapp.com/api/articles', {
            params:
                {sort_by: value }
        });   
}

export const getArticleByID = (article_id) => {
   
    return axios.get(`https://husnain4190news.herokuapp.com/api/articles/${article_id}`);
       
}
export const getCommentByArticleID = (article_id) => {
    
    return axios.get(`https://husnain4190news.herokuapp.com/api/articles/${article_id}/comments`);
}