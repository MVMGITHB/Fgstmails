import React from "react";
import { ArticleHome } from "./ArticleHome";
import EVPopup from "../popup/page";
const Article = ({ data }) => {
  return (
    <div>
      {/* <EVPopup data={data}/> */}
      <ArticleHome data={data} />
    </div>
  );
};

export default Article;
