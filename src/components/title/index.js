import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(null);

  useEffect(() => {
    const handlePageName = () => {
      const pageName = location.pathname;
      let title = "";

      if (pageName.includes("team")) title = "SIXERS";
      if (pageName.includes("notice")) title = "공지사항";

      return title;
    };

    setPageTitle(handlePageName());
  }, [location.pathname]);

  return <h1>{pageTitle}</h1>;
};

export default PageTitle;
