import axios from 'axios';

const instance = axios.create(
    {baseURL:'https://husnain4190news.herokuapp.com/api'})

export const getTopics = async() => {
    const topics = await instance.get(`/topics`);
    return topics.data.topics;
}
export const getArticles = ( value,page) => {
    
        return instance.get('/articles', {
            params:  {sort_by: value }
        });   
}

export const getArticleByID = (article_id) => {
   
    return instance.get(`/articles/${article_id}`);
       
}
export const getCommentByArticleID = (article_id) => {
    
    return instance.get(`/articles/${article_id}/comments`);
}
export const addCommentByArticleID=(article_id,comment,author) => {
   return instance.post(`/articles/${article_id}/comments`,
                {
                  body:comment,
                  username: author,
                }
   )
             
}
export const deleteCommentByID = (comment_id) => {
    return instance.delete(`comments/${comment_id}`);
    // return instance.delete(`comments/${comment_id}`);
}
