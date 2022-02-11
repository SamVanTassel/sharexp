import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSelectedCompanyQuery } from '../../services/api';

const SelectedCompany = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetSelectedCompanyQuery(id);

  return (
    <div>
      { isLoading ? 
        (<>Loading</>) :
        error ? 
        (<>Oops error occured</>) :
        (<div>
          Here's a list of posts:
          {data.posts.map(post => {
            return (<div key={post.id} id={post.id}>
              <h2>{post.title}</h2>
              <h3>Author: {post.author}</h3>
              <p>{post.timePosted}</p>
              <h2>{post.levelName + ' ' + post.positionName}</h2>
            </div>)
          })}
        </div>)} 
    </div>
  )
}

/*
posts: [
[0]     {
[0]       author: 'sam',
[0]       title: 'salad days',
[0]       id: 2,
[0]       timePosted: 2022-01-26T13:20:17.483Z,
[0]       userId: 4,
[0]       comapnyId: undefined,
[0]       locationName: 'Pasadena',
[0]       levelName: 'mid',
[0]       positionName: 'software developer'
[0]     }
[0]   ]
*/
export default SelectedCompany;