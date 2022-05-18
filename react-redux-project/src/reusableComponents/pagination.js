import React, { useState } from 'react';
import { Datafile } from '../scheme'
import "./pagination.scss";

const Pagination = () => {
    let [initialPage, setChangePage] = useState(0);
    let [indexPage,setIndexPage] = useState(5);
    const pages = Math.floor(Datafile.length/3);
    const postPerpage = Datafile.slice(initialPage,indexPage)
    let totalPages = [1,2,3];

    const handlepage = (pageNum) =>{
        if(pageNum == 1){
            setChangePage(0);
            setIndexPage(5)
        }
        if(pageNum == 2){
            setChangePage(5)
            setIndexPage(10)
        }
        if(pageNum == 3){
            setChangePage(10)
            setIndexPage(15)
        }
    }

    
    console.log(initialPage)
  return (
    <div>
      <table style={{width:500}}>
          <thead>
          <tr>
              <th>firstName</th>
              <th>LastName</th>
              <th>email</th>
          </tr>
          </thead>
          <tr>
              {postPerpage.map((posts) =>{
                  console.log(posts)
                  return(
                      <>
                        <tbody>
                            
                                <td>{posts.firstName}</td>
                                <td>{posts.lastName}</td>
                                <td>{posts.email}</td>
                            
                        </tbody>
                      </>
                  )
              })}
          </tr>
      </table>
      <div>
          {totalPages.map((number) =>{
              return(
                  <label 
                  style={{cursor:"pointer"}}
                  onClick={() =>handlepage(number)}
                  >
                      {number}
                  </label>
              )
          })}
      </div>
    </div>
  )
}

export default Pagination