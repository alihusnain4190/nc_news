import axios from 'axios';

const instance = axios.create(
    {baseURL:'https://husnain4190news.herokuapp.com/api'})

export const getTopics = () => {
    return instance.get(`/topics`);
}
export const getArticles = ( value) => {
  
        return instance.get('/articles', {
            params:
                {sort_by: value }
        });   
}

export const getArticleByID = (article_id) => {
   
    return instance.get(`/articles/${article_id}`);
       
}
export const getCommentByArticleID = (article_id) => {
    
    return instance.get(`/articles/${article_id}/comments`);
}
export const addCommentByArticleID=(article_id,comment,author) => {
   return instance.get(`/articles/${article_id}/comments`,
                {
                  body:comment,
                  username: author,
                }
              )
             
}