import {useState,useEffect} from 'react'
import {fetcharticles} from './services/articleservice'
const Liste = () => {
const [articles, setArticles] = useState([]);
const fetchProducts = async () => {
try {
const res = await fetcharticles()
setArticles(res.data);
} catch (error) {
console.log(error);
}
};
useEffect(() => {
fetchProducts();
}, []);
return (
<div>
{
articles.map(article =>{
return <div key={article.id}>
{article.designation}
</div>
})
}
</div>
)
}
export default Liste