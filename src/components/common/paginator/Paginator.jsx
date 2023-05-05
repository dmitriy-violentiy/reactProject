import React from "react";
import styles from "./Paginator.module.css"

let  Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
   
   let pagesCount = Math.ceil(totalUsersCount / pageSize)
   let pages = []
   for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
   }

   //карусель количества переключения страниц
   let curP = currentPage;
   let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
   let curPL = curP + 5;
   let slicedPages = pages.slice( curPF, curPL);
   
   return   <div>
               {slicedPages.map(pages => {
                  return <span className={currentPage === pages && styles.selectedPage} onClick={(e) => { onPageChanged(pages) }}>{pages}</span>
               })}
            </div>
}

export default Paginator