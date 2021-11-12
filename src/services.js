import api from "./api";

export const fetchSearchKeywords = (params) => {
    const queryParams = `&q=${params}`;
    return api(`https://content.guardianapis.com/tags?show-references=all&api-key=test`, queryParams);
};

export const fetchSearchList = (searchPara, currentPage, itmesPerPage) => {
    const queryParams = `&q=${searchPara}&page=${currentPage}&page-size=${itmesPerPage}`
    return api(`https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline&show-tags=keyword`, queryParams);
};

